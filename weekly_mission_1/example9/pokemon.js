
class Pokemon {
    constructor(nombre){
        this.nombre = nombre
    }

    sayHello(){
        console.log(`${this.nombre} te saluda!!!`)
    }
    sayMessage(mensaje){
        console.log(`${this.nombre} dice ${mensaje}`)
    }
}

module.exports = Pokemon

