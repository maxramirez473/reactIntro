import React, { useState } from 'react';

const UseStateExamples = () => {
  // Ejemplo 1: Contador simple
  const [count, setCount] = useState(0);
  
  // Ejemplo 2: Input controlado
  const [name, setName] = useState('');
  
  // Ejemplo 3: Estado booleano
  const [isVisible, setIsVisible] = useState(false);
  
  // Ejemplo 4: Estado con objeto
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  const updateUser = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };

  return (
    <div className="container-fluid h-100 p-4">
      <h1 className="display-4 text-center mb-5">useState Hook - Ejemplos</h1>
      
      <div className="row g-4">
        {/* Ejemplo 1: Contador */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header bg-primary text-white">
              <h5>1. Contador Simple</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded">
{`const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
};`}
              </pre>
              <div className="text-center mt-3">
                <h3>Contador: {count}</h3>
                <button 
                  className="btn btn-success me-2" 
                  onClick={() => setCount(count + 1)}
                >
                  +1
                </button>
                <button 
                  className="btn btn-danger me-2" 
                  onClick={() => setCount(count - 1)}
                >
                  -1
                </button>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setCount(0)}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo 2: Input controlado */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header bg-success text-white">
              <h5>2. Input Controlado</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded">
{`const [name, setName] = useState('');

<input 
  value={name}
  onChange={(e) => setName(e.target.value)}
/>`}
              </pre>
              <div className="mt-3">
                <input 
                  type="text" 
                  className="form-control mb-2"
                  placeholder="Escribe tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p className="alert alert-info">
                  Hola, {name || 'Anónimo'}!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo 3: Estado booleano */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header bg-warning text-dark">
              <h5>3. Estado Booleano (Toggle)</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded">
{`const [isVisible, setIsVisible] = useState(false);

const toggle = () => {
  setIsVisible(!isVisible);
};`}
              </pre>
              <div className="text-center mt-3">
                <button 
                  className="btn btn-warning mb-3"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? 'Ocultar' : 'Mostrar'} mensaje
                </button>
                {isVisible && (
                  <div className="alert alert-success">
                    ¡Mensaje visible! 🎉
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo 4: Estado con objeto */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header bg-info text-white">
              <h5>4. Estado con Objeto</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded">
{`const [user, setUser] = useState({
  name: '', email: '', age: 0
});

setUser(prev => ({
  ...prev,
  name: 'Nuevo nombre'
}));`}
              </pre>
              <div className="mt-3">
                <input 
                  type="text" 
                  className="form-control mb-2"
                  placeholder="Nombre"
                  value={user.name}
                  onChange={(e) => updateUser('name', e.target.value)}
                />
                <input 
                  type="email" 
                  className="form-control mb-2"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => updateUser('email', e.target.value)}
                />
                <input 
                  type="number" 
                  className="form-control mb-2"
                  placeholder="Edad"
                  value={user.age}
                  onChange={(e) => updateUser('age', parseInt(e.target.value) || 0)}
                />
                <div className="alert alert-light">
                  <strong>Usuario:</strong><br/>
                  Nombre: {user.name || 'N/A'}<br/>
                  Email: {user.email || 'N/A'}<br/>
                  Edad: {user.age} años
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseStateExamples;