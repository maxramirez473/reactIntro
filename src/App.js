import React, { useState } from 'react';
import './App.css';
import UseStateExamples from './slides/UseStateExamples';
import UseEffectExamples from './slides/UseEffectExamples';
import ReactHookFormExamples from './slides/ReactHookFormExamples';
import UseContextExamples from './slides/UseContextExamples';
import AxiosExamples from './slides/AxiosExamples';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Introducción a React',
      component: () => (
        <div className="text-center">
          <h1 className="display-4 mb-4">🚀 Introducción a React.js</h1>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">¿Qué es React?</h3>
                  <p className="card-text">
                    React es una librería de JavaScript para construir interfaces de usuario.
                    Desarrollada por Facebook, permite crear aplicaciones web interactivas y dinámicas.
                  </p>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <h5>🎯 Características principales:</h5>
                      <ul className="list-unstyled">
                        <li>✅ Componentes reutilizables</li>
                        <li>✅ Virtual DOM</li>
                        <li>✅ Unidirectional data flow</li>
                        <li>✅ Hooks</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>🛠️ Lo que aprenderemos:</h5>
                      <ul className="list-unstyled">
                        <li>📝 JSX</li>
                        <li>🧩 Componentes y Props</li>
                        <li>🎣 Hooks (useState, useEffect, useContext)</li>
                        <li>📋 Formularios y APIs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'JSX - JavaScript XML',
      component: () => (
        <div className="container-fluid h-100 p-4">
          <h1 className="display-4 text-center mb-5">JSX - JavaScript XML</h1>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header bg-primary text-white">
                  <h5>¿Qué es JSX?</h5>
                </div>
                <div className="card-body">
                  <p>JSX es una extensión de sintaxis para JavaScript que permite escribir elementos similares a HTML dentro del código JavaScript.</p>
                  <pre className="bg-light p-3 rounded">
{`// Sin JSX (React.createElement)
React.createElement('h1', null, 'Hola Mundo');

// Con JSX
<h1>Hola Mundo</h1>`}
                  </pre>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header bg-success text-white">
                  <h5>Ejemplo Práctico</h5>
                </div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Saludo({ nombre }) {
  return (
    <div className="saludo">
      <h2>¡Hola, {nombre}!</h2>
      <p>Bienvenido a React</p>
    </div>
  );
}`}
                  </pre>
                  <div className="mt-3 p-3 border rounded">
                    <h4>¡Hola, Estudiante!</h4>
                    <p>Bienvenido a React</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Componentes y Props',
      component: () => (
        <div className="container-fluid h-100 p-4">
          <h1 className="display-4 text-center mb-5">Componentes y Props</h1>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header bg-warning text-dark">
                  <h5>Componente Funcional</h5>
                </div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Tarjeta({ titulo, contenido, color }) {
  return (
    <div className={\`card border-\${color}\`}>
      <div className="card-header">
        <h5>{titulo}</h5>
      </div>
      <div className="card-body">
        <p>{contenido}</p>
      </div>
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header bg-info text-white">
                  <h5>Uso del Componente</h5>
                </div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<Tarjeta 
  titulo="Mi Tarjeta"
  contenido="Este es el contenido"
  color="primary"
/>`}
                  </pre>
                  <div className="mt-3">
                    <div className="card border-primary">
                      <div className="card-header">
                        <h6>Mi Tarjeta</h6>
                      </div>
                      <div className="card-body">
                        <p>Este es el contenido</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Hooks: useState',
      component: UseStateExamples
    },
    {
      title: 'Hooks: useEffect',
      component: UseEffectExamples
    },
    {
      title: 'React Hook Form',
      component: ReactHookFormExamples
    },
    {
      title: 'useContext',
      component: UseContextExamples
    },
    {
      title: 'Axios para APIs',
      component: AxiosExamples
    },
    {
      title: 'Organización de Carpetas',
      component: () => (
        <div className="container-fluid h-100 p-4" style={{ overflowY: 'auto' }}>
                <h1 className="display-4 text-center mb-5">📁 Organización de Carpetas</h1>
                
                <div className="row g-4">
                  {/* Estructura básica */}
                  <div className="col-lg-6">
                    <div className="card h-100">
                      <div className="card-header bg-primary text-white">
                        <h5>🌱 Estructura Básica (Proyecto Pequeño)</h5>
                      </div>
                      <div className="card-body">
                        <pre className="bg-light p-3 rounded" style={{ fontSize: '0.85rem' }}>
      {`my-react-app/
      ├── public/
      │   ├── index.html
      │   ├── favicon.ico
      │   └── manifest.json
      ├── src/
      │   ├── components/
      │   │   ├── Header.js
      │   │   ├── Footer.js
      │   │   └── Button.js
      │   ├── pages/
      │   │   ├── Home.js
      │   │   ├── About.js
      │   │   └── Contact.js
      │   ├── styles/
      │   │   ├── App.css
      │   │   └── index.css
      │   ├── App.js
      │   └── index.js
      ├── package.json
      └── README.md`}
                        </pre>
                        <div className="mt-3">
                          <h6 className="text-primary">📋 Características:</h6>
                          <ul className="small">
                            <li>Simple y directo</li>
                            <li>Fácil de entender</li>
                            <li>Ideal para proyectos pequeños</li>
                            <li>Pocos niveles de anidación</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Estructura avanzada */}
                  <div className="col-lg-6">
                    <div className="card h-100">
                      <div className="card-header bg-success text-white">
                        <h5>🚀 Estructura Avanzada (Proyecto Grande)</h5>
                      </div>
                      <div className="card-body">
                        <pre className="bg-light p-3 rounded" style={{ fontSize: '0.75rem' }}>
      {`my-app/
      ├── public/
      ├── src/
      │   ├── components/
      │   │   ├── UI/
      │   │   │   ├── Button/
      │   │   │   │   ├── Button.jsx
      │   │   │   │   ├── Button.module.css
      │   │   │   │   └── index.js
      │   │   │   └── Modal/
      │   │   └── Layout/
      │   │       ├── Header/
      │   │       ├── Sidebar/
      │   │       └── Footer/
      │   ├── pages/
      │   │   ├── Dashboard/
      │   │   ├── Users/
      │   │   └── Settings/
      │   ├── hooks/
      │   │   ├── useAuth.js
      │   │   ├── useApi.js
      │   │   └── useLocalStorage.js
      │   ├── context/
      │   │   ├── AuthContext.js
      │   │   └── ThemeContext.js
      │   ├── services/
      │   │   ├── api.js
      │   │   ├── auth.service.js
      │   │   └── user.service.js
      │   ├── utils/
      │   │   ├── helpers.js
      │   │   ├── constants.js
      │   │   └── validators.js
      │   ├── assets/
      │   │   ├── images/
      │   │   ├── icons/
      │   │   └── fonts/
      │   └── styles/
      │       ├── globals.css
      │       ├── variables.css
      │       └── mixins.css
      └── tests/
          ├── components/
          ├── pages/
          └── utils/`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Explicación de carpetas */}
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header bg-info text-white">
                        <h5>📂 Explicación de Carpetas Principales</h5>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-4">
                            <h6 className="text-primary">🧩 components/</h6>
                            <p className="small">Componentes reutilizables de la UI. Se organizan por categorías (UI, Layout, etc.) o por funcionalidad.</p>
                            
                            <h6 className="text-success">📄 pages/</h6>
                            <p className="small">Componentes que representan páginas completas. Cada página puede tener su propia carpeta con subcomponentes.</p>
                          </div>
                          
                          <div className="col-md-4">
                            <h6 className="text-warning">🎣 hooks/</h6>
                            <p className="small">Hooks personalizados para lógica reutilizable. Ejemplo: useAuth, useLocalStorage, useApi.</p>
                            
                            <h6 className="text-danger">🌐 context/</h6>
                            <p className="small">Contextos de React para estado global. Ejemplo: AuthContext, ThemeContext.</p>
                          </div>
                          
                          <div className="col-md-4">
                            <h6 className="text-info">⚙️ services/</h6>
                            <p className="small">Servicios para APIs, autenticación, etc. Lógica de negocio separada de los componentes.</p>
                            
                            <h6 className="text-secondary">🛠️ utils/</h6>
                            <p className="small">Funciones utilitarias, constantes, validadores. Código que se usa en múltiples lugares.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Buenas prácticas */}
                  <div className="col-md-6">
                    <div className="card h-100">
                      <div className="card-header bg-success text-white">
                        <h5>✅ Buenas Prácticas</h5>
                      </div>
                      <div className="card-body">
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <strong>📁 Agrupa por funcionalidad:</strong><br/>
                            <small>No por tipo de archivo. Ejemplo: components/UserProfile/ en lugar de components/js/ y components/css/</small>
                          </li>
                          <li className="mb-2">
                            <strong>📝 Nombres descriptivos:</strong><br/>
                            <small>UserProfileCard.jsx es mejor que Card.jsx</small>
                          </li>
                          <li className="mb-2">
                            <strong>📦 Un componente por archivo:</strong><br/>
                            <small>Cada componente en su propio archivo para mejor mantenimiento</small>
                          </li>
                          <li className="mb-2">
                            <strong>🗂️ Usa index.js:</strong><br/>
                            <small>Para simplificar imports: import Button from './Button' en lugar de './Button/Button.jsx'</small>
                          </li>
                          <li className="mb-2">
                            <strong>🎨 Coloca estilos cerca:</strong><br/>
                            <small>CSS Modules o styled-components junto al componente</small>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Malas prácticas */}
                  <div className="col-md-6">
                    <div className="card h-100">
                      <div className="card-header bg-danger text-white">
                        <h5>❌ Evitar</h5>
                      </div>
                      <div className="card-body">
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <strong>📁 Carpetas muy profundas:</strong><br/>
                            <small>Evita más de 3-4 niveles de anidación</small>
                          </li>
                          <li className="mb-2">
                            <strong>📝 Nombres genéricos:</strong><br/>
                            <small>Evita: Component.js, Utils.js, Helper.js</small>
                          </li>
                          <li className="mb-2">
                            <strong>🗃️ Archivos gigantes:</strong><br/>
                            <small>Si un archivo tiene más de 200-300 líneas, probablemente necesita dividirse</small>
                          </li>
                          <li className="mb-2">
                            <strong>🔀 Mezclar responsabilidades:</strong><br/>
                            <small>No pongas lógica de API dentro de componentes UI</small>
                          </li>
                          <li className="mb-2">
                            <strong>📦 Archivos sin organizar:</strong><br/>
                            <small>Todo en src/ sin estructura</small>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Ejemplo de componente organizado */}
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header bg-dark text-white">
                        <h5>📂 Ejemplo: Estructura de un Componente</h5>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6>📁 Estructura de archivos:</h6>
                            <pre className="bg-light p-3 rounded">
      {`components/
      └── UserCard/
          ├── UserCard.jsx
          ├── UserCard.module.css
          ├── UserCard.test.js
          ├── UserCard.stories.js
          └── index.js`}
                            </pre>
                          </div>
                          <div className="col-md-6">
                            <h6>📄 index.js (barrel export):</h6>
                            <pre className="bg-light p-3 rounded">
      {`// index.js
      export { default } from './UserCard';

      // Uso en otros archivos:
      import UserCard from 'components/UserCard';`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Herramientas útiles */}
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header bg-warning text-dark">
                        <h5>🛠️ Herramientas Útiles para Organización</h5>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-3">
                            <h6>📦 Absolute Imports</h6>
                            <pre className="bg-light p-2 rounded small">
      {`// jsconfig.json
      {
        "compilerOptions": {
          "baseUrl": "src"
        }
      }

      // Uso:
      import Button from 'components/Button';`}
                            </pre>
                          </div>
                          <div className="col-md-3">
                            <h6>🎨 CSS Modules</h6>
                            <pre className="bg-light p-2 rounded small">
      {`// Button.module.css
      .button {
        background: blue;
      }

      // Button.jsx
      import styles from './Button.module.css';
      <button className={styles.button}>`}
                            </pre>
                          </div>
                          <div className="col-md-3">
                            <h6>🧪 Testing Structure</h6>
                            <pre className="bg-light p-2 rounded small">
      {`// Opción 1: Junto al componente
      Button/
      ├── Button.jsx
      └── Button.test.js

      // Opción 2: Carpeta tests/
      tests/
      └── components/
          └── Button.test.js`}
                            </pre>
                          </div>
                          <div className="col-md-3">
                            <h6>📚 Storybook</h6>
                            <pre className="bg-light p-2 rounded small">
      {`// Button.stories.js
      export default {
        title: 'UI/Button',
        component: Button,
      };

      export const Primary = {
        args: { variant: 'primary' }
      };`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      {/* Header con navegación */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Presentación React.js - Slide {currentSlide + 1} de {slides.length}
          </span>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="flex-grow-1 d-flex align-items-center justify-content-center bg-light">
        <CurrentComponent />
      </main>

      {/* Footer con controles */}
      <footer className="bg-dark text-white p-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-4">
              <button 
                className="btn btn-outline-light me-2" 
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                ← Anterior
              </button>
              <button 
                className="btn btn-outline-light" 
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
              >
                Siguiente →
              </button>
            </div>
            <div className="col-md-8">
              <div className="d-flex flex-wrap gap-1">
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm ${
                      index === currentSlide ? 'btn-primary' : 'btn-outline-secondary'
                    }`}
                    onClick={() => goToSlide(index)}
                    title={slide.title}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;