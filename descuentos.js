
let coupons = [
    {
        name: 'Cupon 1',
        discount: 15
    }, 
    {
        name: 'Cupon 2',
        discount: 30
    }, 
    {
        name: 'Cupon 3',
        discount: 50
    }];


function calcularDescuento(precio, descuento) {
    const porcentajeAPagar = 100 - descuento;
    const precioTotal = (precio * porcentajeAPagar) / 100;

    return precioTotal
}

function onClickCalcularDescuento() {
    let inputPrice = document.getElementById('input-price');
    let value1 = parseFloat(inputPrice.value);
    let inputCoupon = document.getElementById('input-coupon');
    let value2 = parseFloat(inputCoupon.value); 

    const couponValidate = function(coupons) {
       return coupons.name === value2;
    }

    const userCoupon = coupons.find(couponValidate);

   
    if (!userCoupon) {
        alert("El cupón " + value2 + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(value1, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }

   
}