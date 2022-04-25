//mapear el parametro del array con el cual deseo interactuar
const salariosColombia = salariosCol.map(
    function(colombiano){
        return colombiano.gastosAnuales;
    }
);
//ordenar gastos
const gastosAnualesOrdenados = salariosColombia.sort(
    function(a, b){
        return a - b; 
    }
)

//devolver true si es par
function esPar(gasto){
    return (gasto % 2 ===0);
}

//sacar el promedio de los gastos y esta funcion funciona como un for que recorre
function calcularPromedio(array){
    const sumar = array.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumar / array.length;
    return promedio;
}
//funcion para determinar la mita del arreglo y devolver el promedio
function medianaGastos(array){
    const mitad = parseInt(array.length / 2);

    if(esPar(array.length)){
        const colombianoDeLaMitad1 = array[mitad - 1];
        const colombianoDeLaMitad2 = array[mitad];

        const mediana = calcularPromedio([colombianoDeLaMitad1, colombianoDeLaMitad2]);
        return mediana;
    }else{
        //es impar
        const colombianoDeLaMitad = array[mitad]; 
        return colombianoDeLaMitad;
    }
}

console.log(
    medianaGastos(gastosAnualesOrdenados)
);