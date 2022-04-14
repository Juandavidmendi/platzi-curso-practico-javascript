var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 1200},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];
//formas para recorrer un arreglo
//filter //Genera un nuevo array
var articulosFiltrados = articulos.filter(function (articulo){
    return articulo.costo <= 500
 });

//map//Genera un nuevo array
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});


//Metodo find //Genera un nuevo array
var encuentraArticulos = articulos.find(
    function (articulo){
        return articulo.nombre === "Laptop"
    }
);
//metodo  No genera otro array
//sirve para ghacer filtros en una ecomerce
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//Metodo Some();regresa verdadero o falso
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700
});