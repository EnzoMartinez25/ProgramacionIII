# TP: Consumo de The Simpsons API con TypeScript

## Respuestas a las consignas teóricas

### 1.2 — `npm init -y`
Este comando inicializa un proyecto de Node.js, generando el archivo `package.json`,
que funciona como la "ficha técnica" del proyecto: nombre, versión, dependencias y
scripts disponibles. El flag `-y` responde automáticamente "sí" a todas las preguntas
que normalmente haría `npm init`, usando valores por defecto.

### 1.3 — `npm install typescript --save-dev`
Se instala como dependencia de desarrollo (`devDependency`) porque TypeScript es una
herramienta que se usa solo **mientras se programa** (para escribir y compilar el
código). El resultado final que corre en el navegador es JavaScript puro, generado
por el compilador de TypeScript — por lo tanto, TypeScript no es necesario en
producción, y no debe instalarse como dependencia normal.

### 1.4 — Opciones de `tsconfig.json`
- **`target`**: indica a qué versión de JavaScript se traduce el código TypeScript.
  Define qué tan "moderno" puede ser el JS de salida según los navegadores que se
  quieran soportar.
- **`outDir`**: carpeta donde se guardan los archivos `.js` ya compilados, separados
  de los archivos fuente `.ts`.
- **`strict`**: activa todas las validaciones más rigurosas de TypeScript de una vez
  (chequeo de null/undefined, tipos implícitos, etc.), ayudando a prevenir errores
  antes de ejecutar el código.

### 1.5 — Scripts de `package.json`
- **`npm run build`**: ejecuta `tsc` una vez, compilando todos los `.ts` a `.js`.
  Se usa cuando ya se terminó de programar y se quiere generar la versión final.
- **`npm run watch`**: ejecuta `tsc --watch`, que queda corriendo y recompila
  automáticamente cada vez que se guarda un cambio. Se usa mientras se está
  programando activamente.

---

## Cómo correr el proyecto

```bash
npm install          # instala TypeScript como dependencia de desarrollo
npm run build        # compila src/main.ts -> dist/main.js
```

Luego, abrir `index.html` con una extensión de servidor local (por ejemplo,
"Live Server" en VS Code), ya que `fetch` a una API externa puede fallar si
se abre el archivo directamente con doble clic (protocolo `file://`).

Para desarrollo activo (recompila solo al guardar):
```bash
npm run watch
```

## Estructura del proyecto

```
simpsons-api-project/
├── src/
│   ├── styles.css
│   └── main.ts
├── dist/            <- se genera automáticamente al compilar
│   └── main.js
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```
