// Base de datos simulada (nuestros usuarios)
const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Luis" },
  { id: 3, name: "María" }
];


/* ============================================================
   ACTIVIDAD 1: Callback
   ============================================================ */

// getUserById recibe un id y una función "callback".
// Esa función se va a ejecutar recién cuando termine el setTimeout,
// simulando la demora de un servidor real.
function getUserById(id, callback) {
  setTimeout(() => {
    // Buscamos el usuario cuyo id coincida con el que nos pasaron
    const user = users.find((u) => u.id === id);

    if (user) {
      // Por convención: primer parámetro = error (null si no hay error),
      // segundo parámetro = el resultado
      callback(null, user);
    } else {
      callback("Usuario no encontrado", null);
    }
  }, 1500); // simula 1.5 segundos de espera, como una petición real
}

// Uso del callback:
console.log("Actividad 1: pidiendo usuario con id 2...");
getUserById(2, (error, user) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Usuario encontrado:", user);
  }
});

// Probamos también un caso de error (id que no existe)
getUserById(99, (error, user) => {
  if (error) {
    console.error("Error:", error); // este caso sí debería entrar acá
  } else {
    console.log("Usuario encontrado:", user);
  }
});


/* ============================================================
   ACTIVIDAD 2: Promesas
   ============================================================ */

// Esta función ya NO recibe un callback: en cambio, devuelve una Promesa.
// Una promesa es un objeto que representa "un resultado que vamos a tener
// en el futuro", y puede terminar en resolve (éxito) o reject (error).
function getUserByIdPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === id);

      if (user) {
        resolve(user); // "salió bien, acá está el resultado"
      } else {
        reject("Usuario no encontrado"); // "salió mal, este es el motivo"
      }
    }, 1500);
  });
}

// Uso de la promesa con .then() (éxito) y .catch() (error)
console.log("Actividad 2: pidiendo usuario con id 3...");
getUserByIdPromise(3)
  .then((user) => console.log("Usuario encontrado:", user))
  .catch((error) => console.error("Error:", error));

// Probamos también un caso de error
getUserByIdPromise(50)
  .then((user) => console.log("Usuario encontrado:", user))
  .catch((error) => console.error("Error:", error)); // debería entrar acá


/* ============================================================
   ACTIVIDAD 3: Async/Await
   ============================================================ */

// "async" antes de la función le dice a JS que adentro vamos a usar "await".
// Esto permite escribir código asíncrono como si fuera código normal,
// de arriba hacia abajo, sin encadenar .then().
async function fetchUser(id) {
  try {
    // "await" pausa la ejecución de ESTA función hasta que la promesa
    // se resuelva (o rechace). No bloquea el resto de la página, solo
    // esta función espera acá.
    const user = await getUserByIdPromise(id);
    console.log("Usuario encontrado:", user);
  } catch (error) {
    // Como await no tiene su propio .catch(), los errores de la promesa
    // se capturan acá, con try/catch (igual que harías con errores normales)
    console.error("Error:", error);
  }
}

// Uso de la función async
console.log("Actividad 3: pidiendo usuario con id 1...");
fetchUser(1); // debería mostrar el usuario con id 1

// Probamos también un caso de error
fetchUser(100); // debería mostrar el mensaje de error

