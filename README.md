# 🚀 Introducción a React.js - Presentación Interactiva

Una presentación interactiva desarrollada en React.js que enseña los conceptos fundamentales del framework de manera práctica y visual.

## 📋 Descripción

Esta aplicación es una presentación completa de React.js que incluye ejemplos prácticos y componentes interactivos para aprender:

- **JSX** - Sintaxis de JavaScript XML
- **Componentes y Props** - Elementos reutilizables
- **Hooks** - useState, useEffect, useContext
- **React Hook Form** - Manejo de formularios
- **Axios** - Comunicación con APIs
- **Organización de proyectos** - Estructura de carpetas

## 🎯 Características

- ✅ Presentación interactiva con navegación
- ✅ Ejemplos de código en vivo
- ✅ Formularios funcionales
- ✅ Llamadas a APIs reales
- ✅ Diseño responsive con Bootstrap
- ✅ Componentes organizados y reutilizables

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **React Hook Form** - Manejo de formularios
- **Axios** - Cliente HTTP para APIs
- **Bootstrap 5** - Estilos y componentes UI
- **JSONPlaceholder** - API de prueba para ejemplos

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd intro
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Instala las dependencias adicionales:**
   ```bash
   npm install react-hook-form axios
   ```

## 🚀 Comandos Disponibles

### `npm start`

Ejecuta la aplicación en modo de desarrollo.
- Abre [http://localhost:3000](http://localhost:3000) en tu navegador
- La página se recarga automáticamente cuando haces cambios
- Verás errores de lint en la consola

```bash
npm start
```

### `npm test`

Ejecuta las pruebas en modo interactivo.

```bash
npm test
```

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.

```bash
npm run build
```

**¿Qué hace el build?**
- 📦 **Minifica** el código JavaScript y CSS para reducir el tamaño
- 🗜️ **Comprime** las imágenes y optimiza recursos
- 🔗 **Bundlea** todos los archivos en chunks optimizados
- 🚀 **Optimiza** el rendimiento para carga rápida
- 📁 **Genera** archivos estáticos listos para servidor web

**Estructura del build:**
```
build/
├── static/
│   ├── css/
│   │   └── main.[hash].css     # Estilos minificados
│   ├── js/
│   │   ├── main.[hash].js      # Código principal
│   │   └── [chunk].[hash].js   # Chunks de código
│   └── media/                  # Imágenes optimizadas
├── index.html                  # HTML principal
└── manifest.json              # Configuración PWA
```

**Deployment:**
Después del build, puedes desplegar la carpeta `build` en:
- **Netlify:** Arrastra la carpeta build a netlify.com
- **Vercel:** `vercel --prod` (instala vercel CLI)
- **GitHub Pages:** Usa gh-pages package
- **Apache/Nginx:** Copia build/ al directorio web

```bash
# Ejemplo con servidor local
npx serve -s build -l 3000
```

### `npm run eject`

⚠️ **Nota:** Esta es una operación irreversible.

```bash
npm run eject
```

Si no estás satisfecho con las herramientas de build, puedes "eject" para tener control total sobre la configuración de webpack, Babel, ESLint, etc.

## 🎮 Cómo Usar la Aplicación

1. **Navegación:**
   - Usa los botones "Anterior" y "Siguiente" para navegar entre slides
   - El indicador de progreso muestra tu posición actual

2. **Slides Interactivos:**
   - **useState:** Interactúa con contadores, formularios y listas
   - **useEffect:** Ve ejemplos de efectos secundarios en tiempo real
   - **React Hook Form:** Completa formularios con validaciones
   - **useContext:** Cambia temas y configuraciones globales
   - **Axios:** Prueba llamadas a APIs reales

3. **Ejemplos Prácticos:**
   - Todos los ejemplos son funcionales
   - Puedes modificar valores y ver resultados inmediatos
   - Los formularios envían datos reales a APIs de prueba

## 📁 Estructura del Proyecto

```
intro/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── slides/              # Componentes de cada slide
│   │   ├── UseStateExamples.js
│   │   ├── UseEffectExamples.js
│   │   ├── ReactHookFormExamples.js
│   │   ├── UseContextExamples.js
│   │   └── AxiosExamples.js
│   ├── context/             # Contextos de React
│   │   └── PresentationContext.js
│   ├── App.js              # Componente principal
│   ├── App.css             # Estilos principales
│   └── index.js            # Punto de entrada
├── package.json
└── README.md
```

## 🔧 Configuración Adicional

### Bootstrap CDN

La aplicación usa Bootstrap 5 via CDN. Si prefieres instalarlo localmente:

```bash
npm install bootstrap
```

Y luego importa en `src/index.js`:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Variables de Entorno

Para configurar APIs personalizadas, crea un archivo `.env`:

```env
REACT_APP_API_BASE_URL=https://tu-api.com
```

## 🌐 APIs Utilizadas

- **JSONPlaceholder** - API de prueba gratuita
  - Posts: `https://jsonplaceholder.typicode.com/posts`
  - Users: `https://jsonplaceholder.typicode.com/users`

## 📚 Recursos de Aprendizaje

- [Documentación oficial de React](https://reactjs.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Axios Documentation](https://axios-http.com/)
- [Bootstrap Documentation](https://getbootstrap.com/)

## 🤝 Contribuir

proyecto: https://github.com/maxramirez473/reactIntro.git
