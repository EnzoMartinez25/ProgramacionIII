
// ==================================================
// TP: Algoritmia con Arrays y Strings
// ==================================================


// ==================================================
// 1. Crear un array de palabras
// ==================================================

// Creamos un array vacío para guardar las palabras
let palabras = [];

// Pedimos al usuario que ingrese 5 palabras
for (let i = 0; i < 5; i++) {

    let palabra = prompt("Ingresa una palabra:");

    // Agregamos la palabra al final del array
    palabras.push(palabra);
}

// Mostramos el array completo
console.log("Array original:", palabras);


// ==================================================
// 2. Manipular el array
// ==================================================

// Agregamos una palabra al inicio
palabras.unshift("inicio");

// Agregamos una palabra al final
palabras.push("final");

// Eliminamos la segunda palabra
// Los arrays empiezan a contar desde 0,
// por eso la segunda palabra está en el índice 1.
palabras.splice(1, 1);

// Mostramos el array actualizado
console.log("Array actualizado:", palabras);


// ==================================================
// 3. Analizar las palabras
// ==================================================

let palabraMasLarga = "";

// Recorremos todas las palabras del array
for (let i = 0; i < palabras.length; i++) {

    let palabra = palabras[i];

    // Mostramos la longitud de cada palabra
    console.log(palabra,"tiene",palabra.length,"caracteres");

    // Comprobamos si es la palabra más larga
    if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
    }

    // Comprobamos si contiene la letra "a"
    if (palabra.includes("a")) {
        console.log(palabra,"contiene la letra a");
    }
}

// Mostramos la palabra más larga
console.log("La palabra más larga es:",palabraMasLarga);


// ==================================================
// 4. Juego de inversion de palabras
// ==================================================

let palabrasInvertidas = [];

// Recorremos el array original
for (let i = 0; i < palabras.length; i++) {

    let palabra = palabras[i];

    // Separamos la palabra en letras
    let letras = palabra.split("");

    // Invertimos el orden de las letras
    letras.reverse();

    // Volvemos a unir las letras
    let palabraInvertida = letras.join("");

    // Guardamos la palabra invertida
    palabrasInvertidas.push(palabraInvertida);
}

// Mostramos el array de palabras invertidas
console.log("Palabras invertidas:", palabrasInvertidas);

// Mostramos las palabras invertidas con alert
alert("Palabras invertidas: " + palabrasInvertidas.join(", "));


// ==================================================
// 5. Palindromo
// ==================================================

let respuesta = prompt(
    "¿Quieres comprobar palindromos? Responde sí o no:"
);

// Comprobamos si el usuario respondió "sí"
if (respuesta.toLowerCase() === "sí") {

    console.log("Palíndromos encontrados:");

    // Recorremos todas las palabras
    for (let i = 0; i < palabras.length; i++) {

        let palabra = palabras[i];

        // Invertimos la palabra
        let palabraInvertida = palabra
            .split("")
            .reverse()
            .join("");

        // Comparamos la palabra original con la invertida
        if (palabra === palabraInvertida) {

            console.log(
                palabra,
                "es un palindromo"
            );
        }
    }
}


// ==================================================
// 6. BONUS
// ==================================================

// Contar cuantas palabras tienen más de 4 caracteres

let cantidadPalabras = 0;

for (let i = 0; i < palabras.length; i++) {

    if (palabras[i].length > 4) {
        cantidadPalabras++;
    }
}

console.log(
    "Cantidad de palabras con mas de 4 caracteres:",
    cantidadPalabras
);


// Crear un string con todas las palabras
// unidas por "-"

let palabrasUnidas = palabras.join("-");

console.log(
    "Palabras unidas:",
    palabrasUnidas
);