//Ejemplo 2: Crear un objeto a partir de una clase
class Pet {
}
const myPet1 = new Pet() // Puedo crear muchos objetos de la clase Pet
console.log("Ejemplo 2: Crear un objeto a partir de una clase")
console.log(myPet1) // un objeto de la clase Pet

// Ejemplo 3: Instanciar un objeto con atributos
class Student {
  // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
  constructor(name, age, subjects){
    this.name = name
    this.age = age
    this.subjects = subjects
	}
}