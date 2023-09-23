//const express = require('express')
import express from "express"; // cambie esto "type": "module", en el package.json
import usersRouter from "./router/user.router.js";
import productsRouter from "./router/products.router.js";
import viewsRouter from "./router/views.router.js"
import { __dirname } from "./utils.js";
import { engine } from "express-handlebars";
const app = express(); // El nombre de la constante no importa

//Creacion del __dirname (no es recomendable crearla aqui
/* import {dirname} from 'path'
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)) */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'))

//HANDLEBARS
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views',__dirname+'/views')

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

//ROUTES
app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter)
app.use('/api', viewsRouter)

app.listen(8080, () => {
  //console.log('Escuchando al puerto 8080')
});
