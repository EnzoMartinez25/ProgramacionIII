/* ============================================================
   PARTE 2 y 5.1: Interfaces TypeScript
   ============================================================
   Una interfaz describe la "forma" que debe tener un objeto:
   qué propiedades tiene y de qué tipo es cada una.
   TypeScript va a chequear que los datos que usemos cumplan
   con esta forma, avisándonos si algo no coincide.
*/

// Representa un personaje individual de la API
interface SimpsonCharacter {
  id: number;
  age: number | null; // puede venir como null, como vimos en la respuesta real de la API
  birthdate: string | null;
  gender: string;
  name: string;
  occupation: string;
  portrait_path: string;
  phrases: string[]; // array de strings
  status: string;
}

// Representa la respuesta completa que devuelve la API (con paginación)
interface IResponseApi {
  count: number;
  next: string | null;
  prev: string | null;
  pages: number;
  results: SimpsonCharacter[]; // un array de personajes
}


/* ============================================================
   5.2: Constantes y elementos del DOM (con tipado)
   ============================================================
   Le decimos a TypeScript qué TIPO de elemento HTML es cada uno.
   Esto nos da autocompletado y evita errores (por ejemplo, tratar
   de leer ".value" de un elemento que no es un input).

   Usamos "as HTMLxxxElement" porque querySelector/getElementById
   devuelven un tipo genérico (HTMLElement | null) y necesitamos
   decirle a TypeScript el tipo específico que sabemos que es.
*/

const API_URL = "https://thesimpsonsapi.com/api/characters";
const IMG_BASE_URL = "https://cdn.thesimpsonsapi.com/500";

const btnCargar = document.getElementById("btnCargar") as HTMLButtonElement;
const loadingEl = document.getElementById("loading") as HTMLDivElement;
const errorEl = document.getElementById("error") as HTMLDivElement;
const contenedorPersonajes = document.getElementById("contenedorPersonajes") as HTMLDivElement;


/* ============================================================
   5.3: Funciones requeridas
   ============================================================ */

// Muestra el indicador de carga y oculta cualquier error visible
function showLoading(): void {
  loadingEl.classList.remove("oculto");
  errorEl.classList.add("oculto");
}

// Oculta el indicador de carga
function hideLoading(): void {
  loadingEl.classList.add("oculto");
}

// Muestra un mensaje de error, y lo oculta solo después de 5 segundos
function showError(message: string): void {
  errorEl.textContent = message;
  errorEl.classList.remove("oculto");

  setTimeout(() => {
    errorEl.classList.add("oculto");
  }, 5000);
}

// Crea y devuelve el elemento HTML (tarjeta) de UN personaje
function createCharacterCard(character: SimpsonCharacter): HTMLElement {
  const card = document.createElement("div");
  card.classList.add("character-card");

  const img = document.createElement("img");
  img.src = IMG_BASE_URL + character.portrait_path;
  img.alt = character.name;

  const nombre = document.createElement("h3");
  nombre.textContent = character.name;

  const frase = document.createElement("p");
  // Mostramos la primera frase si existe, si no, un texto por defecto
  frase.textContent = character.phrases.length > 0
    ? `"${character.phrases[0]}"`
    : "Sin frases registradas";

  card.appendChild(img);
  card.appendChild(nombre);
  card.appendChild(frase);

  return card;
}

// Recibe un array de personajes, limpia el contenedor y pinta todas las tarjetas
function renderCharacters(characters: SimpsonCharacter[]): void {
  // Removemos las tarjetas anteriores antes de pintar las nuevas
  contenedorPersonajes.innerHTML = "";

  characters.forEach((character) => {
    const card = createCharacterCard(character);
    contenedorPersonajes.appendChild(card);
  });
}

// Función principal: pide los datos a la API y maneja todo el flujo
const fetchCharacters = async (): Promise<void> => {
  showLoading();

  try {
    const response = await fetch(API_URL);

    // response.ok es false si el servidor respondió con un error (404, 500, etc.)
    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    // Le decimos a TypeScript qué forma esperamos que tenga el JSON parseado
    const data: IResponseApi = await response.json();

    renderCharacters(data.results);
  } catch (error) {
    console.error("Error al cargar los personajes:", error);
    showError("Error al cargar los personajes. Por favor, intenta nuevamente.");
  } finally {
    // finally se ejecuta siempre, haya salido bien o mal
    hideLoading();
  }
};


/* ============================================================
   5.4: Event Listeners
   ============================================================ */

btnCargar.addEventListener("click", () => {
  fetchCharacters();
});
