//Template de un objeto
function carro(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//template 
/*carro
ƒ carro(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}*/

//insertar un nuevo hijo 
var nuevoCarro = new carro("Ferrari", "Enzo", 2001);

var nuevoCarro2 = new carro("Tesla", "Model X", 2018);
var nuevoCarro3 = new carro("Toyota", "Corolla", 2020);



//Ejercicio de loop con objetos
//inicializar variables
let autos = [];
let cantidadCarros = 0;
let cantRegistrados = 0;

//crear function constructora
function Carro(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
//Solicitalre al usuario la cantidad de carros a ingresar
cantidadAutos = prompt('Cuantos autos desea registrar');

/*
    Se ejecuta un ciclo en ña ciañ se pregunta que la cantidad de autos registrados sea menor a la cantidad de autos que el usuario desea registrar 
*/
while (cantRegistrados < cantidadCarros){
    //definir variables con scope local
    let marca = prompt("Marca");
    let modelo = prompt("Modelo");
    let annio = prompt("Año");
    
    //Pasar las variables del scope local a la function constructora
    var nuevoCarro = new Carro(marca, modelo, annio);

    //agrego el auto a el arreglo de autos
    autos.unshift(autoNuevo);

    //incremento la cantidad de autos registrados en 1
    cantRegistrados++;
}

/*Se retorna por consola el arreglo con todos los autos registrados por el usuario */
console.log(Carros);