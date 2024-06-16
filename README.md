# Proyecto: Unergy Frontend Test

Este proyecto es una prueba técnica para desarrolladores frontend que involucra la creación de una aplicación web para mostrar información relevante acerca de proyectos consumida desde una API externa.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Sass**: Preprocesador CSS que ofrece variables, anidamiento y otras funcionalidades.
- **Axios**: Cliente HTTP basado en Promesas para hacer peticiones a la API.
- **create-react-app**: Herramienta para crear rápidamente aplicaciones React preconfiguradas, incluyendo un entorno de desarrollo optimizado. Incluye la configuracion de Webpack, Babel, entre otros.
- **Webpack**: Empaquetador de módulos para JavaScript y assets.
- **Babel**: Transpilador de JavaScript para asegurar la compatibilidad con versiones anteriores de navegadores.

## Requisitos del Sistema

- Node.js (v14.x o superior)
- npm (v6.x o superior)
- Conexión a Internet para acceder a la API de Unergy

## Instalación

1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/valengg11/unergy-frontend-test.git
   cd unergy-frontend-test
2. **Instalar Dependencias**
   ```bash
   npm install
## Ejecución

Para ejecutar la aplicación en modo de desarrollo:   
```bash
npm start
```
Esto iniciará la aplicación en `http://localhost:3000` y se abrirá automáticamente en tu navegador predeterminado.

## Uso

- Al abrir la aplicación, verás una lista de proyectos cargados desde la API de Unergy.
- Puedes aplicar filtros utilizando los botones proporcionados (Todos, Con Financiación, Sin Financiación) para filtrar los proyectos según su financiación.

## Estructura de Archivos

- **`src/`**: Contiene todos los archivos de código fuente.
- **`components/`**: Componentes de React, como ProjectCard, Filter y InvestButton(este no tiene ninguna funcionalidad).
- **`styles/`**: Archivos de estilos en Sass.
- **`App.js`**: Componente principal de la aplicación.
- **`index.js`**: Punto de entrada de la aplicación React.
- **`public/`**: Archivos estáticos y HTML base.

## Créditos

- Desarrollado por Valentina Gómez Giraldo.
- Basado en la prueba técnica proporcionada por Unergy