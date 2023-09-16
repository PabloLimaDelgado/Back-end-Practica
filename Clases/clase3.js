//Fyle System
const { error } = require('console')
const fs = require('fs')

//escribir un archivo
//fs.writeFileSync('archivo.txt', 'primer archivo creado') //Aqui va la ruta

//leer un archivo
//const infoArchivo = fs.readFileSync('archivo.txt', 'utf-8')

//console.log(infoArchivo)

//Eliminar archivo
//fs.unlinkSync('archivo.txt')

//existe archivo
//const existeArchivo = fs.existsSync('archivo.txt')
//console.log(existeArchivo)

//añadir informacion
//fs.appendFileSync('archivo.txt', 'segundo parrafo')

//ASINCRONO
//escribir un archivo
/*fs.writeFile('archivoAsync.txt', 'primer archivo', (error) =>{
    if(error){
        console.log(error)
    }else{
        console.log("Archivo creado con exito")
    }
})

//Leer un archivo
fs.readFile('archivoAsync.txt', 'utf-8', (error, info) => {
    if(error){
        console.log(error)
    }else{
        console.log(info)
    }
}) */

//Eliminar un archivo
/*fs.unlink('archivoAsync.txt', (error) => {
    if(error){
        console.log(error);
    } else{
        console.log("Archivo eliminado con exito")
    }
}) */

//PROMESAS (solo agregar el .promises)
/*fs.promises.writeFile('archivoAsync.txt', 'primer archivo')
.then(()=>console.log('Archivo creado con exito'))
.catch(error =>console.log(error))*/
/*fs.promises.readFile('archivoAsync.txt', 'utf-8')
.then((info)=>console.log(info))
.catch(error =>console.log(error))*/
/*fs.promises.unlink('archivoAsync.txt')
.then(()=>console.log("Archivo eliminado con exito"))
.catch(error =>console.log(error))*/

const products = [
    {
        name: 'Iphone',
        price: 500,
        stock: 25
    },
    {
        name: 'Ipad',
        price: 2000,
        stock: 35
    },
    {
        name: 'TV',
        price: 1000,
        stock: 45
    },
    {
        name: 'Galaxy',
        price: 5000,
        stock: 50
    }
]

/*fs.promises.writeFile('products.json', JSON.stringify(products))
.then(()=>console.log('Archivo creado con exito'))
.catch(error => console.log(error)) */

fs.promises.readFile('products.json', 'utf-8')
.then(info => console.log(JSON.parse(info)))
.catch(error => console.log(error))