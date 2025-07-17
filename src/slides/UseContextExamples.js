import React, { useState } from 'react';
import { PresentationProvider, usePresentationContext } from '../context/usePresentationContext';

// Componente hijo que consume el contexto
const ThemeCard = () => {
  const { theme, toggleTheme } = usePresentationContext();
  
  return (
    <div className={`card ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light'}`}>
      <div className="card-header">
        <h6>Componente ThemeCard</h6>
      </div>
      <div className="card-body">
        <p>Tema actual: <strong>{theme}</strong></p>
        <button 
          className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'}`}
          onClick={toggleTheme}
        >
          Cambiar a {theme === 'dark' ? 'claro' : 'oscuro'}
        </button>
      </div>
    </div>
  );
};

// Componente para mostrar info del usuario
const UserInfo = () => {
  const { user, updateUser, incrementProgress } = usePresentationContext();
  
  return (
    <div className="card">
      <div className="card-header bg-info text-white">
        <h6>Información del Usuario</h6>
      </div>
      <div className="card-body">
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Nivel:</strong> {user.level}</p>
        <div className="mb-3">
          <label className="form-label">Progreso: {user.progress}%</label>
          <div className="progress">
            <div 
              className="progress-bar" 
              style={{ width: `${user.progress}%` }}
            ></div>
          </div>
        </div>
        <div className="d-grid gap-2">
          <button 
            className="btn btn-success btn-sm"
            onClick={incrementProgress}
          >
            +10% Progreso
          </button>
          <button 
            className="btn btn-warning btn-sm"
            onClick={() => updateUser({ 
              name: 'React Developer',
              level: 'Avanzado' 
            })}
          >
            Actualizar Usuario
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente para configuraciones
const SettingsPanel = () => {
  const { settings, updateSettings } = usePresentationContext();
  
  return (
    <div className="card">
      <div className="card-header bg-warning text-dark">
        <h6>Configuraciones</h6>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Tamaño de fuente:</label>
          <select 
            className="form-select form-select-sm"
            value={settings.fontSize}
            onChange={(e) => updateSettings({ fontSize: e.target.value })}
          >
            <option value="small">Pequeño</option>
            <option value="medium">Mediano</option>
            <option value="large">Grande</option>
          </select>
        </div>
        
        <div className="form-check mb-2">
          <input 
            className="form-check-input"
            type="checkbox" 
            id="animations"
            checked={settings.animations}
            onChange={(e) => updateSettings({ animations: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="animations">
            Animaciones
          </label>
        </div>
        
        <div className="form-check">
          <input 
            className="form-check-input"
            type="checkbox" 
            id="notifications"
            checked={settings.notifications}
            onChange={(e) => updateSettings({ notifications: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="notifications">
            Notificaciones
          </label>
        </div>
      </div>
    </div>
  );
};

// Componente principal que muestra todo
const ContextDemo = () => {
  const { theme, user, settings } = usePresentationContext();
  
  return (
    <div className="container-fluid h-100 p-4" style={{ overflowY: 'auto' }}>
      <h1 className="display-4 text-center mb-5">useContext Hook - Ejemplos</h1>
      
      <div className="row g-4">
        {/* Explicación del código */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-primary text-white">
              <h5>1. Crear el Context</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded small">
{`// 1. Crear el contexto
const AppContext = createContext();

// 2. Provider
export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// 3. Hook personalizado
export const useApp = () => {
  return useContext(AppContext);
};`}
              </pre>
            </div>
          </div>
        </div>

        {/* Uso del contexto */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-success text-white">
              <h5>2. Usar el Context</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded small">
{`// En cualquier componente hijo
function ComponenteHijo() {
  const { theme, toggleTheme } = useApp();
  
  return (
    <div className={theme}>
      <p>Tema: {theme}</p>
      <button onClick={toggleTheme}>
        Cambiar tema
      </button>
    </div>
  );
}`}
              </pre>
              <div className="mt-3">
                <p className="text-success">
                  <strong>✅ Ventaja:</strong> No necesitas pasar props a través de múltiples niveles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Componentes que usan el contexto */}
        <div className="col-lg-4">
          <ThemeCard />
        </div>
        
        <div className="col-lg-4">
          <UserInfo />
        </div>
        
        <div className="col-lg-4">
          <SettingsPanel />
        </div>

        {/* Estado global actual */}
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h5>Estado Global Actual (Compartido entre todos los componentes)</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <h6>🎨 Tema</h6>
                  <pre className="bg-light p-2 rounded small">
{JSON.stringify({ theme }, null, 2)}
                  </pre>
                </div>
                <div className="col-md-4">
                  <h6>👤 Usuario</h6>
                  <pre className="bg-light p-2 rounded small">
{JSON.stringify(user, null, 2)}
                  </pre>
                </div>
                <div className="col-md-4">
                  <h6>⚙️ Configuraciones</h6>
                  <pre className="bg-light p-2 rounded small">
{JSON.stringify(settings, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cuándo usar useContext */}
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-info text-white">
              <h5>🤔 ¿Cuándo usar useContext?</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="text-success">✅ Úsalo para:</h6>
                  <ul>
                    <li>Temas (dark/light mode)</li>
                    <li>Información del usuario autenticado</li>
                    <li>Configuraciones de la aplicación</li>
                    <li>Idioma/internacionalización</li>
                    <li>Estado que necesitan muchos componentes</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className="text-danger">❌ No lo uses para:</h6>
                  <ul>
                    <li>Estado local de componentes</li>
                    <li>Estado que cambia muy frecuentemente</li>
                    <li>Optimizaciones de performance críticas</li>
                    <li>Reemplazar todas las props</li>
                    <li>Gestión de estado compleja (usa Redux/Zustand)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente wrapper que incluye el Provider
const UseContextExamples = () => {
  return (
    <PresentationProvider>
      <ContextDemo />
    </PresentationProvider>
  );
};

export default UseContextExamples;