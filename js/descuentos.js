//onst precioOriginal  = 1200000;
//const descuento = 50;

const cupones = [
    "un_producto",
    "2_o_mas_de_dos_productos",
    "3_o_mas_de_dos_productos",
];
function calcularPrecioConDescuento(precio, descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento)/ 100;

    return precioConDescuento;
}

function unClicYCalcula(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
 
    //const inputDiscount = document.getElementById("inputDiscount");
    //const discountValue = inputDiscount.value;
    const inputCupon = document.getElementById("InputCoupon");
    const cuponValue = inputCupon.value;

    let descuento;

    switch(cuponValue){
        case cupones[0]:
            descuento = 50;
            break ;
        case cupones[1]:
            descuento = 10; 
            break;
        case cupones[2]:
            descuento = 40;  
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    //insertar texto en HTML
    const resultadoP = document.getElementById("resultadoP");
    resultadoP.innerText = "El precio con descuento es: $"+precioConDescuento;
}

