import React, { useState, useEffect } from 'react';

const UseEffectExamples = () => {
  // Estados para los ejemplos
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Ejemplo 1: useEffect sin dependencias (componentDidMount + componentDidUpdate)
  useEffect(() => {
    document.title = `Contador: ${count}`;
    console.log('useEffect ejecutado - Contador:', count);
  });

  // Ejemplo 2: useEffect con array vacío (solo componentDidMount)
  useEffect(() => {
    console.log('Componente montado por primera vez');
    const savedCount = localStorage.getItem('count');
    if (savedCount) {
      setCount(parseInt(savedCount));
    }
  }, []); // Array vacío = solo se ejecuta una vez

  // Ejemplo 3: useEffect con dependencias específicas
  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]); // Solo se ejecuta cuando 'count' cambia

  // Ejemplo 4: useEffect con cleanup (suscripción/desuscripción)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Ejemplo 5: Timer con useEffect
  useEffect(() => {
    let interval = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    } else if (!isRunning && timer !== 0) {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  // Ejemplo 6: Fetch de datos
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid h-100 p-4" style={{ overflowY: 'auto' }}>
      <h1 className="display-4 text-center mb-5">useEffect Hook - Ejemplos</h1>
      
      <div className="row g-4">
        {/* Ejemplo 1: Sin dependencias */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-primary text-white">
              <h5>1. Sin Dependencias (Cada Render)</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded small">
{`useEffect(() => {
  document.title = \`Contador: \${count}\`;
  console.log('Effect ejecutado');
}); // Sin array de dependencias`}
              </pre>
              <div className="text-center mt-3">
                <h4>Contador: {count}</h4>
                <p className="text-muted">Revisa el título de la página</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setCount(count + 1)}
                >
                  Incrementar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo 2: Array vacío */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-success text-white">
              <h5>2. Array Vacío (Solo al Montar)</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded small">
{`useEffect(() => {
  console.log('Solo una vez al montar');
  const saved = localStorage.getItem('count');
  if (saved) setCount(parseInt(saved));
}, []); // Array vacío`}
              </pre>
              <div className="mt-3">
                <p className="alert alert-success">
                  Este efecto se ejecutó solo una vez al montar el componente.
                  Revisa la consola del navegador.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo 3: Con dependencias */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-warning text-dark">
              <h5>3. Con Dependencias Específicas</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded small">
{`useEffect(() => {
  localStorage.setItem('count', count.toString());
}, [count]); // Solo cuando 'count' cambia`}
              </pre>
              <div className="mt-3">
                <p className="alert alert-warning">
                  Este efecto guarda el contador en localStorage cada vez que cambia.
                  Valor actual guardado: {localStorage.getItem('count') || '0'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo 4: Con cleanup */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-info text-white">
              <h5>4. Con Cleanup (Event Listeners)</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded small">
{`useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);`}
              </pre>
              <div className="mt-3">
                <p className="alert alert-info">
                  Ancho de ventana: <strong>{windowWidth}px</strong><br/>
                  <small>Redimensiona la ventana para ver el cambio</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo 5: Timer */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-secondary text-white">
              <h5>5. Timer con Cleanup</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded small">
{`useEffect(() => {
  let interval = null;
  if (isRunning) {
    interval = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  }
  return () => clearInterval(interval);
}, [isRunning, timer]);`}
              </pre>
              <div className="text-center mt-3">
                <h4>Timer: {timer}s</h4>
                <button 
                  className={`btn ${isRunning ? 'btn-danger' : 'btn-success'} me-2`}
                  onClick={() => setIsRunning(!isRunning)}
                >
                  {isRunning ? 'Pausar' : 'Iniciar'}
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    setTimer(0);
                    setIsRunning(false);
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo 6: Fetch datos */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-dark text-white">
              <h5>6. Fetch de Datos</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded small">
{`const fetchPosts = async () => {
  setLoading(true);
  const response = await fetch('/api/posts');
  const data = await response.json();
  setPosts(data);
  setLoading(false);
};`}
              </pre>
              <div className="mt-3">
                <button 
                  className="btn btn-dark mb-3"
                  onClick={fetchPosts}
                  disabled={loading}
                >
                  {loading ? 'Cargando...' : 'Cargar Posts'}
                </button>
                
                {posts.length > 0 && (
                  <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {posts.map(post => (
                      <div key={post.id} className="border-bottom pb-2 mb-2">
                        <h6 className="mb-1">{post.title}</h6>
                        <small className="text-muted">ID: {post.id}</small>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseEffectExamples;