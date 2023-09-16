//const express = require('express')
import express from "express"; // cambie esto "type": "module", en el package.json

const app = express(); // El nombre de la constante no importa
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { userManager } from "./UserManager.js";
/*const users = [
    {
        id:1,
        nombre: "Juan"
    },
    {
        id:2,
        nombre: "Laura"
    },
    {
        id:3,
        nombre: "Pedro"
    },
    {
        id:4,
        nombre: "Jose"
    }
] */
/*//PRIMERA, SI HAGO SEVRER/PRIMERA VA A PRIMERA
app.get('/primera', (req,res) => {
    //res.send('Bienvenido a primera')
    res.json({})
}) 

app.get('/', (req,res) => {
    res.send('Bienvenido a la raiz')
})

app.get('/ultima', (req,res) => {
    res.send('Bienvenido a ultima')
})

app.get('/users', (req,res) => {
    //res.send('Bienvenido a primera')
    console.log('query',req.query)
    const {sort, name} = req.query

    /*if(name){
        const user = users.find(u => u.nombre === name)
        res.json({message:'User',user})
    }
    const usersArray = 
        sort === 'ASC' ? 
        users.sort((a,b) => a.nombre.localeCompare(b.nombre)) : 
        users.sort((a,b) => b.nombre.localeCompare(a.nombre))
    res.json({message:'All users',users:usersArray})
}) 

//Los : indica que es dinamico
app.get('/users/:id', (req,res) => {
    const {id} = req.params
    const user = users.find(u => u.id === +id) //El mas me pasa el id a number

    res.json({message: 'User', user})
})*/

app.get("/users", async (req, res) => {
  try {
    const users = await userManager.getUsers(req.query);

    if (!users.length) {
      res.status(400).json({ message: "No users found" });
    } else {
      res.status(200).json({ message: "User found", users });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.get("/users/:idUser", async (req, res) => {
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

app.post("/users", async (req, res) => {
    /*const {first_name,last_name,password} = req.body

    if(!first_name || !last_name || !password){
        return res.status(400).json({message: 'Some data is missing'})
    } */
  try {
    const newUser = await userManager.createUser(req.body);
    res.status(200).json({ message: "User create", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.delete("/users/:idUser", async (req, res) => {
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

app.put("/users/:idUser", async (req, res) => {
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

app.listen(8080, () => {
  //console.log('Escuchando al puerto 8080')
});
