//const precioOriginal  = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento)/ 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    document.getElementById("inputPrice");
    
    document.getElementById("inputPrice");
}