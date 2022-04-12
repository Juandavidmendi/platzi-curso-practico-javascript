//const precioOriginal  = 120;
//const descuento = 18;
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
            descuento = 15;
            break ;
        case cupones[1]:
            descuento = 30; 
            break;
        case cupones[2]:
            descuento = 25;  
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    //insertar texto en HTML
    const resultadoP = document.getElementById("resultadoP");
    resultadoP.innerText = "El precio con descuento es: $"+precioConDescuento;
}

