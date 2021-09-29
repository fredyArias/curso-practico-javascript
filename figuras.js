// Código del cuadrado
console.group('Cuadrados');

function perimetroCuadrado(lado) {
    return lado * 4;
};
function areaCuadrado(lado) {
    return lado * lado
};
console.groupEnd();


// Código del triangulo
console.group('Triangulos')
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};
function areatriangulo(base, altura){
    return (base * altura) / 2;
};
console.groupEnd();


// Código del Circulo
console.group('Circulos')
const pi = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
};
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
};  
function areaCirculo(radio){
    return (radio * radio) * pi;
}; 
console.groupEnd();


function calcularPerimetroCuadrado() {
    const input = document.getElementById('input-cuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    let input = document.getElementById('input-cuadrado');
    let value = parseFloat(input.value);
    const area = areaCuadrado(value);
    alert(area); 
}
function calcularPerimetroTriangulo() {
    const inputL1 = document.getElementById('input-triangulo-l1');
    const inputL2 = document.getElementById('input-triangulo-l2');
    const inputBase = document.getElementById('input-base-triangulo');
    const value1 = parseFloat(inputL1.value);
    const value2 = parseFloat(inputL2.value);
    const value3 = parseFloat(inputBase.value); 
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const inputBase = document.getElementById('input-base-triangulo');
    const inputAltura = document.getElementById('input-altura-triangulo');
    const value1 = parseFloat(inputBase.value);
    const value2 = parseFloat(inputAltura.value);
    const area = areatriangulo(value1, value2);
    alert(area);
}
function calcularDiametroCirculo() {
    const input = document.getElementById('input-circulo');
    const value = parseFloat(input.value);
    const diametro = diametroCirculo(value);
    alert(diametro);
}
function calcularPerimetroCirculo() {
    const input = document.getElementById('input-circulo');
    const value = parseFloat(input.value);
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById('input-circulo');
    const value = parseFloat(input.value);
    const area = areaCirculo(value);
    alert(area);
}

function alturaIsosceles(lado1, lado2, base) {  
    const altura = Math.sqrt((lado1 * lado2) - (base * base) / 4);
    return altura
}

function calcularAlturaIsosceles() {
    let resp;
    const inputL1 = document.getElementById('input-isoscelesL1');
    const inputL2 = document.getElementById('input-isoscelesL2');
    const inputBase = document.getElementById('input-isosceles-base');
    const value1 = parseFloat(inputL1.value);
    const value2 = parseFloat(inputL2.value);
    const value3 = parseFloat(inputBase.value);
    if(value1 == value2) {
        resp = alturaIsosceles(value1, value2, value3);
    }
    else {
        resp = 'No es un isosceles';
    }
    alert(resp);
}


 







