import { Router } from "express";
import { CartManager } from "../../carts.js";
const router = Router();

router.post("/", async (req, res) => {
  try {
    const newCart = await CartManager.createCart();
    res.status(200).json({ message: "Cart created", cart: newCart });
    req.cart = newCart;
    res.redirect(`/cart/${newCart.id}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:cid", async (req, res) => {
  try {
    const cid = Number(req.params.cid);
    const cart = await CartManager.getCartById(cid);
    if (!cart) {
      res.status(400).json({ message: "Cart not found with the id" });
      return;
    }
    res.status(200).json({ message: "Cart found: ", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/:cid/product/:pid", async (req, res) => {
  try {
    const cid = Number(req.params.cid);
    const pid = Number(req.params.pid);

    const updatedCart = await CartManager.addProductToCart(cid, pid);

    if (updatedCart === -1) {
      res.status(400).json({ message: "Cart not found with the id sent" });
      return; // Añade un return para evitar enviar múltiples respuestas
    }

    res
      .status(200)
      .json({ message: "Product added to cart", cart: updatedCart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default router;
