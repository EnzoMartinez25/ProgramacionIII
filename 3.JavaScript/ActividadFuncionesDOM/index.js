/* ============================================================
   PUNTO 1: Funciones declarativas y expresadas
   ============================================================ */

// Función DECLARATIVA: se define con la palabra "function" y un nombre.
// Se puede usar en cualquier parte del archivo, incluso antes de esta línea.
function cuadrado(numero) {
  return numero * numero;
}

// Función EXPRESADA: se guarda dentro de una variable (const).
// Solo se puede usar a partir de la línea donde fue definida.
const cubo = function (numero) {
  return numero * numero * numero;
};

// Diferencia: la declarativa queda "disponible" en todo el archivo (hoisting),
// la expresada se comporta como una variable más, y solo existe después de definirse.
// Se suele usar la declarativa para funciones "principales" del programa,
// y la expresada (o arrow functions) cuando se pasa una función como argumento a otra.

console.log("Punto 1 -> cuadrado(4):", cuadrado(4)); // 16
console.log("Punto 1 -> cubo(3):", cubo(3)); // 27


/* ============================================================
   PUNTO 2: Arrow function con parámetro por defecto
   ============================================================ */

// Arrow function: otra forma más corta de escribir funciones.
// "edad = 18" es un parámetro por defecto: si no le pasan edad, usa 18.
const saludar = (nombre, edad = 18) => {
  return `Hola ${nombre}, tienes ${edad} años`;
};

console.log("Punto 2 ->", saludar("Ana"));       // usa el valor por defecto
console.log("Punto 2 ->", saludar("Juan", 25));  // usa el valor que le pasamos


/* ============================================================
   PUNTO 3: Objeto con propiedades y método
   ============================================================ */

const persona = {
  nombre: "Ana",   // propiedad: un dato
  edad: 30,        // propiedad: un dato
  presentarse: function () {   // método: una función dentro del objeto
    // "this" hace referencia al propio objeto "persona"
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
  }
};

// Propiedad = un valor/dato guardado (nombre, edad).
// Método = una función que vive dentro del objeto y puede USAR esos datos (this.algo).
console.log("Punto 3 ->", persona.presentarse());


/* ============================================================
   PUNTO 4: Desestructuración
   ============================================================ */

// En vez de escribir persona.nombre y persona.edad por separado,
// "desarmamos" el objeto y sacamos ambas propiedades en una sola línea.
const { nombre, edad } = persona;

console.log("Punto 4 -> nombre:", nombre);
console.log("Punto 4 -> edad:", edad);

// Ventaja: menos código repetido, más legible cuando necesitás varias propiedades.


/* ============================================================
   PUNTO 5: Spread y Rest
   ============================================================ */

// SPREAD: "desparrama" los elementos de un array existente para crear uno nuevo.
const numeros = [1, 2, 3];
const masNumeros = [...numeros, 4, 5]; // [1, 2, 3, 4, 5]
console.log("Punto 5 -> spread:", masNumeros);

// REST: junta cualquier cantidad de argumentos sueltos en un array.
function sumarTodo(...nums) {
  let total = 0;
  nums.forEach(function (n) {
    total += n;
  });
  return total;
}
console.log("Punto 5 -> rest (suma):", sumarTodo(1, 2, 3, 4, 5)); // 15

// Diferencia: spread EXPANDE un array ya existente (lo "abre").
// Rest RECOLECTA varios valores sueltos dentro de una función (los "junta" en un array).


/* ============================================================
   PUNTO 6: Manipulación básica del DOM
   ============================================================ */

// Seleccionamos el título por su id
const titulo = document.getElementById("titulo");
titulo.textContent = "Título cambiado por JavaScript"; // le cambiamos el texto

// Seleccionamos la lista para poder agregarle elementos nuevos
const lista = document.getElementById("lista");

// Creamos un elemento <li> nuevo, todavía no está en la página
const item3 = document.createElement("li");
item3.textContent = "Elemento 3 (agregado por JS)";
lista.appendChild(item3); // ahora sí, lo pegamos dentro del <ul>

const item4 = document.createElement("li");
item4.textContent = "Elemento 4 (agregado por JS)";
lista.appendChild(item4);

// Manejo de clases CSS sobre el título
titulo.classList.add("resaltado"); // le agrega la clase "resaltado" (lo pone verde, ver CSS)
// titulo.classList.remove("resaltado"); // así se sacaría la clase
// titulo.classList.toggle("resaltado"); // así se alternaría (agregar si no está, sacar si está)


/* ============================================================
   PUNTO 7: Evento click + agregar a la lista desde un input
   ============================================================ */

const input = document.getElementById("nuevoTexto");
const botonAgregar = document.getElementById("botonAgregar");

// Función reutilizable para agregar un nuevo <li> a la lista con el texto del input
function agregarElementoALista() {
  const texto = input.value.trim(); // sacamos espacios de más
  if (texto !== "") {
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = texto;
    lista.appendChild(nuevoItem);
    input.value = ""; // limpiamos el input después de agregar
  }
}

// Evento "click": se usa porque la acción que dispara el agregado
// es que el usuario aprieta el botón con el mouse (o toque en celular).
botonAgregar.addEventListener("click", agregarElementoALista);


/* ============================================================
   PUNTO 8: Evento submit + preventDefault
   ============================================================ */

const formulario = document.getElementById("miFormulario");
const inputFormulario = document.getElementById("inputFormulario");
const mensajeFormulario = document.getElementById("mensajeFormulario");

formulario.addEventListener("submit", function (evento) {
  // Por defecto, un formulario recarga toda la página al enviarse.
  // preventDefault() cancela ese comportamiento para poder manejarlo nosotros con JS.
  evento.preventDefault();

  const valor = inputFormulario.value.trim();
  if (valor !== "") {
    mensajeFormulario.textContent = "Formulario enviado con el valor: " + valor;
    alert("Enviaste: " + valor);
  }
});


/* ============================================================
   PUNTO 9: keydown (Enter) + change (select)
   ============================================================ */

// Detectar la tecla Enter en el input para agregar un elemento a la lista
input.addEventListener("keydown", function (evento) {
  // "keydown" se dispara con CUALQUIER tecla; acá filtramos para que
  // solo haga algo si la tecla presionada fue especificamente "Enter"
  if (evento.key === "Enter") {
    agregarElementoALista();
  }
});

// Select con evento "change"
const miSelect = document.getElementById("miSelect");
const mensajeSeleccion = document.getElementById("mensajeSeleccion");

miSelect.addEventListener("change", function (evento) {
  // "change" se dispara apenas el usuario elige una opción distinta
  mensajeSeleccion.textContent = "Elegiste: " + evento.target.value;
});

// Diferencia entre los 3 eventos usados en el TP:
// - "input"   -> se dispara en cada tecla, mientras se escribe (tiempo real)
// - "change"  -> se dispara cuando el valor cambia y se "confirma" (ideal para selects)
// - "keydown" -> se dispara con cualquier tecla, sirve para detectar teclas puntuales (ej: Enter)