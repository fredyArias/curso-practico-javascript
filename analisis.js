const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salarioColSorted = salariosCol.sort(
    function(a, b) {
        return a - b;
    }
);

function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });

    let promedio = sumaLista / lista.length;
    return promedio
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica(personaMitad1, personaMitad2);
        return mediana
    }
    else {
        const personaMitad = lista[mitad];
        return personaMitad
    }
}

console.log(medianaSalarios(salarioColSorted));