console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado*4;
} 
function areaCuadrado(lado){
    return lado * lado;
} 
console.groupEnd();
/*----------------------------------------------------------------------*/
console.group("Triangulos");  
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}    

function areaTriangulo(base, altura){
    return (base + altura)/2;
}
console.groupEnd();
/*----------------------------------------------------------------------*/
console.group("Circulos");
function diametroCirculo(radio){
    return radio * 2;
}
//pi
const PI = Math.PI;
console.log("Pi es  " +PI);
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio){
    return (radio * radio)*PI;
}

console.groupEnd();
/*----------------------------------------------------------------------*/
//interactuar con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value; 

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value; 

    const area = areaCuadrado(value);
    alert(area);
}
/*----------------------------------------------------------------------*/
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("lado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("lado2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("base");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("base");
    const value3 = Number(input3.value);
    const input2 = document.getElementById("lado3");
    const altura = Number(input2.value);

    const area = areaTriangulo(value3, altura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}


function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}