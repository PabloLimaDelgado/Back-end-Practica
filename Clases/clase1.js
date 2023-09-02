/*let name = "Pablo Lima"
let name
name = "Pablo Lima"

let array1 = [1,"Hola", true]

let bool = true 

let nombre = "Pablo"
let age = 23
let precio = 23
let obj = {
    name1: "Pablo Lima",
    edad: 21,
    series: [21,22,23]
};

obj.series.push("Hellou")
age += 1

console.log(age, obj.edad)
console.log(obj.series[3]) */

//En este ejemplo hay un error de sintaxis
/*var var1 = 10
{
    let var2 = 5
}

console.log(var1,var2) */

/*function sum(num1, num2){
    return console.log(num1+num2)
}

sum(1,3) */

const sum = (num1, num2) => {
    suma = num1+num2
    return suma
}

/* const sum = (num1, num2) => num1 + num2 */
console.log(sum(1,5))

const array1 = [5,2,3,4,6,7,8,9,10]

let num = array1.indexOf(5)

console.log(`El resultado es ${num}`)

const mostrarLista = array => {

    if(Array.isArray(array)) {
        if(!array.length){
            return "Lista vacia"
        }
        return `La longitud de la lista es ${array.length}`
    }
}

console.log(mostrarLista([1,2,3,4]))


class User{
    constructor(first_name, last_name,email){
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
    }

    getFistName(){
        return this.first_name
    }
}

const user1 = new User("CARLOS", "LIMA", "CARLOSLIMA@GMAIL")

console.log(user1.getFistName())

class Contador {
    constructor(nombre){
        this.nombre = nombre
        this.contador = 0
    }
    static contadorGlobal = 0

    getResponsable(){
        console.log(this.nombre)
    }

    contar(){
        this.contador += 1
        Contador.contadorGlobal++
    }
    getCuentaIndividual(){
        console.log(`Cuenta individual de ${this.nombre} es ${this.contador}`)
    }

    getCuentaGlobal(){
        console.log(`Cuenta global de ${Contador.contadorGlobal}`)
    }
}

const cuenta1 = new Contador("Pablo")
const cuenta2 = new Contador("Juan")
cuenta1.contar()
cuenta2.contar()

cuenta1.getCuentaIndividual()
cuenta2.getCuentaGlobal()
