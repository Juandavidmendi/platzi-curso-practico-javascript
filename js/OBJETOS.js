let miCarro = {
    marca: "KIa",
    model: "Corola",
    annio: 1997

};

var escritorioSala = {
    computador: "Mac",
    teclado:  "Genius",
    mouse: "Logitech",
    detallesDelEscritorio: function(){
        console.log(`Computador ${this.computador} ${this.teclado}`);
    }
};

var objeto = {
    propiedad: "VALOR",
    propiedad2: "VALOR",
    propiedad3: function(){
 
    }
};


//Objetos relacionados
//objeto persona
function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

//nueva persona llamada rand
var rand = new Person('Rand McKinnon', 33, 'M');
//nueva persona llamada ken
var ken = new Person('Ken Jones', 39, 'M');

//modificar funcion car
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

//mostrar en consola la nueva persona
console.log(rand)
VM925:1 
Person {name: 'Rand McKinnon', age: 33, sex: 'M'}

//insertar nuevo carro con propietario y ahi va el nombre de la persona
var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);

//mostrar en pantalla el objeto carro1 con datos del propietario
console.log(car1)
VM1016:1 
    Car {make: 'Eagle', model: 'Talon TSi', year: 1993, owner: Person}
    make
    : 
    "Eagle"
    model
    : 
    "Talon TSi"
    owner
    : 
    Person {name: 'Rand McKinnon', age: 33, sex: 'M'}
    year
    : 
    1993
    [[Prototype]]
    : 
    Object

//insertar nuevo carro con el propietario ken
var car2 = new Car('Nissan', '300ZX', 1992, ken);

console.log(car2)
VM1074:1 
    Car {make: 'Nissan', model: '300ZX', year: 1992, owner: Person}
    make
    : 
    "Nissan"
    model
    : 
    "300ZX"
    owner
    : 
    Person {name: 'Ken Jones', age: 39, sex: 'M'}
    year
    : 
    1992
    [[Prototype]]
    : 
    Object
    
//acceder al nombre del propietario
console.log(car2.owner.name)
VM1221:1 Ken Jones
//agregando propiedades
car1.color = 'black';
'black'
console.log(car1)
VM1324:1 
Car {make: 'Eagle', model: 'Talon TSi', year: 1993, owner: Person, color: 'black'}
undefined
console.log(car2)
VM1347:1 
Car {make: 'Nissan', model: '300ZX', year: 1992, owner: Person}
undefined
Car.tipo = 'automovil'
'automovil'
console.log(car1)
VM1441:1 
Car {make: 'Eagle', model: 'Talon TSi', year: 1993, owner: Person, color: 'black'}
undefined
console.log(Car)
VM1521:1 ƒ Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
undefined
Car.tipo = this.tipo;
undefined
console.log(Car)
﻿
