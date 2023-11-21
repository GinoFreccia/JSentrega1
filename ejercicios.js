//EJ 1//
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + ' es un número par');
    } else {
        console.log(numero + ' es un número impar');
    }
}

//EJ 2

function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + ' es mayor que ' + num2);
    } else if (num2 > num1) {
        console.log(num2 + ' es mayor que ' + num1);
    } else {
        console.log('Ambos números son iguales');
    }
}

//EJ 3

function esMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
        console.log(numero + ' es múltiplo de 5');
    } else {
        console.log(numero + ' no es múltiplo de 5');
    }
}

//EJ 4

function ContarHasta(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}

//EJ5 

function imprimirPalabraVeces(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}

//EJ 6

function imprimirValoresArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

//EJ 7

function imprimirValoresExceptoQuinto(array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) {
            console.log(array[i]);
        }
    }
}

//EJ8

function multiplicarArrayPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * numero);
    }
}
