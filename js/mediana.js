function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
//
const lista1 = [
    100,
    200,
    500,
    4000000000,
];

const mitadLista1 = parseInt(lista1.length / 2);
//funcion para saber si el arreglo es par
function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else{
        return false;//es impar
    }
}
//este codigo me va a traer el valor del medio 
let mediana;

if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);
    mediana = promedioElemento1y2;
}else{
    mediana =  lista1[mitadLista1];
}
//--------------------------------------------------------------------
const lista2 = [
    1,
    9,
    2,
    10,
    3,
    4,
    11,
    5,
    12,
    6,
    13,
    7,
    14,
    8,
];
//ordenar los elementos 
//lista2.sort(function compare(a,b){return a - b});

const mediana = (list) => {
    //ordenar los elementos
    const listaOrdenada = lista2.sort((a,b) => a - b);
    const esPar = () => listaOrdenada.length % 2 === 0;
    
    const mitadValor = lista2.parseInt(values);
    //si es par obtengame los dos elementos del medio 
    if(esPar()){
        const mitadLista2 = listaOrdenada.length / 2;
        const segundaMitadLista2 = mitadLista2 - 1; 
        //const values = [listaOrdenada[mitadLista2], listaOrdenada[segundaMitadLista2]];
        const values = calcularMediaAritmetica([
            mitadLista2,
            segundaMitadLista2
        ]);
        return promedio = values;
    }
    if(!esPar()){
        const mitadValor = Math.floor(listaOrdenada.length / 2);
        return listaOrdenada[mitadValor];
    }
}   