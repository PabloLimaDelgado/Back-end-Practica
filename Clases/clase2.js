//PRIMEROS EJEMPLOS
/*const exp = Math.pow(2,4)

const array = [1,2,3,4]

console.log(array.includes(2))

const obj = {
    nombre: "PABLO",
    edad: 23,
    estaSolo: true
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

const obArray = Object.entries(obj)
const obArrayMod = obArray.map((k,v) => [`k, ${v} rod`])

console.log(obArrayMod)

const obj2 = {
    prop1: "name",
}
const objs = {...obj, ...obj2}

console.log(objs)

const newObj = {...obj, id:1, estaSolo: false}

console.log(newObj)

const function1 = (a,b, ...otros)=> {
console.log(a,b)
console.log(otros)

}

function1(1,2,3,4,5,6,67,7,8,8,8,0)

const text = " Hola que hace "

console.log(text)

console.log(text.length)
console.log(text.trim().length)


const array2 = [1,2,[1,1,3,[43,2,2]]]

console.log(array2.flat(2))

const number = undefined
console.log(number || 10)
console.log(number ?? 10) */

//CLASE
class ticketManager  {
    #precioBaseDeGanancia = 2 //Por convencion esto se coloca al principio
    constructor() {
        this.eventos = []
    }

    agregarEvento(nombre, lugar, precio, capacidad=50, fecha = new Date()){
        const evento = {
            id: 
                this.eventos.length 
                ?  this.eventos[this.eventos.length-1].id + 1 
                : 1,
            nombre,
            lugar,
            precio: precio + this.#precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes: []
        }
        this.eventos.push(evento)
    }

    agregarUsuario(idEvento, idUsuario){
        const evento = this.eventos.find(e => e.id === idEvento)

        if(!evento){
            return "Este evento no existe";
        }
        if(evento.participantes.includes(idUsuario)){
            return "Usuario ya registrado en el evento"
        }
        evento.participantes.push(idUsuario) //Da lo mismo porque el return del if lo saca
    }

    ponerEventoEnGira(idEvento, nuevoLugar, nuevFecha){
       const evento = this.#buscarEvento(idEvento)

       if(!evento){
            return "Este evento no existe";
        }
        
        const nuevoEvento = {
            ...evento, 
            lugar: nuevoLugar, 
            fecha: nuevFecha, 
            participantes: [],
            id: this.#generarIdEvento()
        }
        this.eventos.push(nuevoEvento)
    }

    #buscarEvento(idEvento){ //Clase privada para buscar al metodo
       return this.eventos.find(e => e.id === idEvento)
    }

    #generarIdEvento(){ //Por convencion esto se coloca al final
       return this.eventos.length 
       ?  this.eventos[this.eventos.length-1].id + 1 
       : 1 
    }
}

//CALLBACKS
/* setTimeout(() =>{
    console.log("Log time out")
}, 1000)

setTimeout(() =>{
    console.log("Log time out 0 segundos")
}, 0)

console.log("Ultimo log")

const array = []

array.map(e => e.id)

const sumar = () => {}
const restar = () => {}
const mult = () => {}

function calc(num1, num2, operacion){ //Esta funcion es un callback

}
calc(1,2,sumar) 

function agregarFamiliar(idUsuario, infoFamiliar){
    idUsuario.findByid(idUsuario, function(error, usuario){
        if(error){
            return error
        }else{
            familiares.findAllByLastName(usuario.lastName, function(error, famliares) {
                if(error){
                    return error
                }else{
                    if(famliares.includes(infoFamiliar)){
                        return "Familiar ya existe"
                    }else{
                        famliares.createOne(infoFamiliar)
                    }
                }
            })
        }
    }) //Esto son muchos callBacks anidado
} */

//PROMESAS
/*function promesaFun(a,b){
    return new Promise((resolve, reject) => {
        if(a==0 || b==0){
            reject("Promesa rechazada porque algun parametro es 0")
        } else{
            resolve(a+b)
        }
    })
}
    //promesaFun(0,7)
    //.then(res => console.log(res))
    //.catch(error => console.log(error))

function agregarFamiliarProm(idUsuario, infoFamiliar){
    usuarios.findById(idUsuario)
    .then(usuario=>{
        familiares.findAllByLastName(usuario.lastName)
    })
    .then(familiares =>{
        if(familiares.includes(infoFamiliar)){
            return "Familiar ya existe"
        } else {
            return familiares.createOne(infoFamiliar)
        }
    })
    .then(()=> "Famliar agregado con exito")
    .cath(error =>error)
}

try {
    
} catch (error) {
    
}

async function agregarFamiliarAsync(idUsuario, infoFamiliar){
    try {
        const usuario = await usuarios.findById(idUsuario)
        const familiares = await familiares.findAllByLastName(usuario.lastName)

        if(familiares.includes(infoFamiliar)){
            return "Familiar ya existe"
        }

        await familiares.createOne(infoFamiliar)
        return "Familiar creado con exito"
    } catch (error) {
        return error
    }
}*/