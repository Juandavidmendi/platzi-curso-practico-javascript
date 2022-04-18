const lista1 = [
    1,
    2,
    3,
    4,
    4,
    2,
    2,
    2,
    1,
    3,
    3,
    3,
];

//contar cuantas veces se repite para eso se crea un objeto
const lista1Contador = {};

lista1.map(
    function(elemento){
        if(lista1Contador[elemento]){
            lista1Contador[elemento] += 1;
        }else{
            lista1Contador[elemento] = 1;
        }
    }
);
//convertir un objeto en un array
const lista1Array = Object.entries(lista1Contador).sort(
    function (valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
);
//encontrar el numero que mas se repite
const moda = lista1Array[lista1Array.length - 1];