
// ==================================================
// EJERCICIOS ADICIONALES JAVASCRIPT
// ==================================================


// ==================================================
// 1. Invertir un array sin usar reverse()
// ==================================================

let numeros1 = [1, 2, 3, 4];
let invertido = [];

for (let i = numeros1.length - 1; i >= 0; i--) {
    invertido.push(numeros1[i]);
}

console.log("1. Array invertido:", invertido);


// ==================================================
// 2. Palíndromo
// ==================================================

let texto2 = "reconocer";
let textoInvertido = "";

for (let i = texto2.length - 1; i >= 0; i--) {
    textoInvertido += texto2[i];
}

if (texto2 === textoInvertido) {
    console.log("2. Es palíndromo:", true);
} else {
    console.log("2. Es palíndromo:", false);
}


// ==================================================
// 3. Contar vocales
// ==================================================

let texto3 = "Javascript ES Genial";
let cantidadVocales = 0;

texto3 = texto3.toLowerCase();

for (let i = 0; i < texto3.length; i++) {

    let caracter = texto3[i];

    if (
        caracter === "a" ||
        caracter === "e" ||
        caracter === "i" ||
        caracter === "o" ||
        caracter === "u"
    ) {
        cantidadVocales++;
    }
}

console.log("3. Cantidad de vocales:", cantidadVocales);


// ==================================================
// 4. Rotación de array
// ==================================================

let numeros4 = [10, 20, 30, 40];
let rotado = [];

rotado.push(numeros4[numeros4.length - 1]);

for (let i = 0; i < numeros4.length - 1; i++) {
    rotado.push(numeros4[i]);
}

console.log("4. Array rotado:", rotado);


// ==================================================
// 5. Ordenar números sin usar sort()
// ==================================================

let numeros5 = [5, 2, 9, 1];

for (let i = 0; i < numeros5.length; i++) {

    for (let j = 0; j < numeros5.length - 1; j++) {

        if (numeros5[j] > numeros5[j + 1]) {

            let auxiliar = numeros5[j];

            numeros5[j] = numeros5[j + 1];

            numeros5[j + 1] = auxiliar;
        }
    }
}

console.log("5. Array ordenado:", numeros5);


// ==================================================
// 6. Reemplazo de palabras
// ==================================================

let texto6 = "me gusta programar en Java";

let textoReemplazado = texto6.replaceAll(
    "Java",
    "JavaScript"
);

console.log("6. Texto reemplazado:", textoReemplazado);


// ==================================================
// 7. Números únicos sin usar Set
// ==================================================

let numeros7 = [1, 2, 2, 3, 4, 4, 5];
let unicos = [];

for (let i = 0; i < numeros7.length; i++) {

    let numero = numeros7[i];

    if (!unicos.includes(numero)) {
        unicos.push(numero);
    }
}

console.log("7. Números únicos:", unicos);


// ==================================================
// 8. Intersección de arrays
// ==================================================

let array8a = [1, 2, 3, 4];
let array8b = [3, 4, 5, 6];
let comunes = [];

for (let i = 0; i < array8a.length; i++) {

    let numero = array8a[i];

    if (array8b.includes(numero)) {
        comunes.push(numero);
    }
}

console.log("8. Elementos comunes:", comunes);


// ==================================================
// 9. Contar palabras
// ==================================================

let texto9 = "hola mundo hola javascript";

let palabras9 = texto9.split(" ");

let contador = {};

for (let i = 0; i < palabras9.length; i++) {

    let palabra = palabras9[i];

    if (contador[palabra] === undefined) {

        contador[palabra] = 1;

    } else {

        contador[palabra]++;
    }
}

console.log("9. Cantidad de cada palabra:", contador);


// ==================================================
// 10. Matriz transpuesta
// ==================================================

let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

let transpuesta = [];

for (let i = 0; i < matriz[0].length; i++) {

    let fila = [];

    for (let j = 0; j < matriz.length; j++) {

        fila.push(matriz[j][i]);
    }

    transpuesta.push(fila);
}

console.log("10. Matriz transpuesta:", transpuesta);