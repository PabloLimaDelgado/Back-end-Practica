import { Router } from "express";
import { userManager } from "../UserManager.js";
import { authMidleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await userManager.getUsers(req.query);

    if (!users.length) {
      res.status(400).json({ message: "No users found" });
    } else {
      res.status(200).json({ message: "Users found", users });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get("/:idUser", async (req, res) => {
  const { idUser } = req.params;
  try {
    const user = await userManager.getUserById(+idUser);

    if (!user) {
      res.status(400).json({ message: "User not found with de id sent" });
    } else {
      res.status(200).json({ message: "User found", user });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const { first_name, email, password } = req.body;

  if (!first_name || !email || !password) {
    return res.status(400).json({ message: "Some data is missing" });
  }

  try {
    const newUser = await userManager.createUser(req.body);
    res.status(200).json({ message: "User create", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete("/:idUser", async (req, res) => {
  const { idUser } = req.params;
  try {
    const response = await userManager.deleteUser(+idUser);
    if (response === -1) {
      res.status(400).json({ message: "User not found with de id sent" });
    } else {
      res.status(200).json({ message: "User delete" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.put("/:idUser", async (req, res) => {
  const { idUser } = req.params;
  try {
    const response = await userManager.updateUser(+idUser, req.body);
    if (response === -1) {
      res.status(400).json({ message: "User not found with de id sent" });
    } else {
      res.status(200).json({ message: "User update" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default router;
