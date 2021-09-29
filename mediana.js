
const lista = [
    100,
    200,
    500,
    40000000
];

function calcularMediana (lista){

    function calcularMediaAritmetica(lista) {
        const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        });

        let promedio = sumaLista / lista.length;
        return promedio
    }

    function comparar (a, b) {return a - b}
    lista.sort(comparar);

    let mitadLista = parseInt(lista.length / 2);

    let mediana;

    function numeroPar(numero) {
        if(numero % 2 == 0) {
            return true
        }
        else {
            return false
        }
    }

    if(numeroPar(lista.length) == true) {
        const elemento1 = lista[mitadLista]
        const elemento2 = lista[mitadLista -  1]

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ])

        mediana = promedioElemento1y2;

    }
    else {
        mediana = lista[mitadLista];
    }
    return mediana
}
