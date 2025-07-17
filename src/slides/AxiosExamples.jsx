import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosExamples = () => {
  // Estados para diferentes ejemplos
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Estados para formulario de nuevo post
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [createLoading, setCreateLoading] = useState(false);
  
  // Estados para actualizar post
  const [updatePost, setUpdatePost] = useState({ id: 1, title: '', body: '' });
  const [updateLoading, setUpdateLoading] = useState(false);

  // Ejemplo 1: GET - Obtener datos
  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
      setPosts(response.data);
    } catch (err) {
      setError('Error al obtener posts: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Ejemplo 2: GET con parámetros
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
        params: {
          _limit: 3
        }
      });
      setUsers(response.data);
    } catch (err) {
      setError('Error al obtener usuarios: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Ejemplo 3: POST - Crear nuevo post
  const createPost = async () => {
    if (!newPost.title || !newPost.body) {
      alert('Por favor completa todos los campos');
      return;
    }

    setCreateLoading(true);
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: newPost.title,
        body: newPost.body,
        userId: 1
      });
      
      // Agregar el nuevo post al inicio de la lista
      setPosts(prev => [response.data, ...prev.slice(0, 4)]);
      setNewPost({ title: '', body: '' });
      alert(`Post creado exitosamente! ID: ${response.data.id}`);
    } catch (err) {
      setError('Error al crear post: ' + err.message);
    } finally {
      setCreateLoading(false);
    }
  };

  // Ejemplo 4: PUT - Actualizar post
  const updatePostData = async () => {
    if (!updatePost.title || !updatePost.body) {
      alert('Por favor completa todos los campos');
      return;
    }

    setUpdateLoading(true);
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${updatePost.id}`,
        {
          id: updatePost.id,
          title: updatePost.title,
          body: updatePost.body,
          userId: 1
        }
      );
      
      // Actualizar el post en la lista local
      setPosts(prev => prev.map(post => 
        post.id === updatePost.id ? response.data : post
      ));
      alert('Post actualizado exitosamente!');
    } catch (err) {
      setError('Error al actualizar post: ' + err.message);
    } finally {
      setUpdateLoading(false);
    }
  };

  // Ejemplo 5: DELETE - Eliminar post
  const deletePost = async (postId) => {
    if (!window.confirm('¿Estás seguro de eliminar este post?')) return;

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      setPosts(prev => prev.filter(post => post.id !== postId));
      alert('Post eliminado exitosamente!');
    } catch (err) {
      setError('Error al eliminar post: ' + err.message);
    }
  };

  return (
    <div className="container-fluid h-100 p-4" style={{ overflowY: 'auto' }}>
      <h1 className="display-4 text-center mb-5">🌐 Axios para APIs</h1>
      
      {/* Mostrar errores */}
      {error && (
        <div className="alert alert-danger alert-dismissible" role="alert">
          {error}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setError(null)}
          ></button>
        </div>
      )}
      
      <div className="row g-4">
        {/* Instalación y configuración */}
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5>📦 Instalación y Configuración</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Instalación:</h6>
                  <pre className="bg-light p-3 rounded">
{`npm install axios

# o con yarn
yarn add axios`}
                  </pre>
                </div>
                <div className="col-md-6">
                  <h6>Importación:</h6>
                  <pre className="bg-light p-3 rounded">
{`import axios from 'axios';

// Uso básico
const response = await axios.get('/api/data');
console.log(response.data);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GET - Obtener datos */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-success text-white">
              <h5>📥 GET - Obtener Datos</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded small mb-3">
{`const fetchPosts = async () => {
  try {
    const response = await axios.get(
      'https://api.example.com/posts?_limit=5'
    );
    setPosts(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};`}
              </pre>
              
              <button 
                className="btn btn-success mb-3"
                onClick={fetchPosts}
                disabled={loading}
              >
                {loading ? 'Cargando...' : 'Obtener Posts'}
              </button>
              
              <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {posts.map(post => (
                  <div key={post.id} className="border-bottom pb-2 mb-2">
                    <h6 className="mb-1">{post.title}</h6>
                    <small className="text-muted">ID: {post.id}</small>
                    <button 
                      className="btn btn-outline-danger btn-sm ms-2"
                      onClick={() => deletePost(post.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GET con parámetros */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-info text-white">
              <h5>🔍 GET con Parámetros</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded small mb-3">
{`const fetchUsers = async () => {
  try {
    const response = await axios.get('/api/users', {
      params: {
        _limit: 3,
        _sort: 'name'
      }
    });
    setUsers(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};`}
              </pre>
              
              <button 
                className="btn btn-info mb-3"
                onClick={fetchUsers}
                disabled={loading}
              >
                {loading ? 'Cargando...' : 'Obtener Usuarios'}
              </button>
              
              <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {users.map(user => (
                  <div key={user.id} className="border-bottom pb-2 mb-2">
                    <h6 className="mb-1">{user.name}</h6>
                    <small className="text-muted">{user.email}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* POST - Crear datos */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-warning text-dark">
              <h5>📤 POST - Crear Datos</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded small mb-3">
{`const createPost = async (postData) => {
  try {
    const response = await axios.post('/api/posts', {
      title: postData.title,
      body: postData.body,
      userId: 1
    });
    console.log('Post creado:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};`}
              </pre>
              
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Título del post"
                  value={newPost.title}
                  onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))}
                />
                <textarea
                  className="form-control mb-2"
                  placeholder="Contenido del post"
                  rows="3"
                  value={newPost.body}
                  onChange={(e) => setNewPost(prev => ({ ...prev, body: e.target.value }))}
                />
                <button 
                  className="btn btn-warning w-100"
                  onClick={createPost}
                  disabled={createLoading}
                >
                  {createLoading ? 'Creando...' : 'Crear Post'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PUT - Actualizar datos */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-secondary text-white">
              <h5>✏️ PUT - Actualizar Datos</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded small mb-3">
{`const updatePost = async (id, postData) => {
  try {
    const response = await axios.put(\`/api/posts/\${id}\`, {
      id: id,
      title: postData.title,
      body: postData.body,
      userId: 1
    });
    console.log('Post actualizado:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};`}
              </pre>
              
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="ID del post"
                  value={updatePost.id}
                  onChange={(e) => setUpdatePost(prev => ({ ...prev, id: parseInt(e.target.value) || 1 }))}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Nuevo título"
                  value={updatePost.title}
                  onChange={(e) => setUpdatePost(prev => ({ ...prev, title: e.target.value }))}
                />
                <textarea
                  className="form-control mb-2"
                  placeholder="Nuevo contenido"
                  rows="2"
                  value={updatePost.body}
                  onChange={(e) => setUpdatePost(prev => ({ ...prev, body: e.target.value }))}
                />
                <button 
                  className="btn btn-secondary w-100"
                  onClick={updatePostData}
                  disabled={updateLoading}
                >
                  {updateLoading ? 'Actualizando...' : 'Actualizar Post'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Métodos HTTP */}
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h5>🔧 Métodos HTTP Disponibles</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <h6 className="text-success">GET</h6>
                  <pre className="bg-light p-2 rounded small">
{`// Obtener datos
axios.get('/api/posts')
axios.get('/api/posts/1')
axios.get('/api/posts', {
  params: { page: 1 }
})`}
                  </pre>
                </div>
                <div className="col-md-3">
                  <h6 className="text-warning">POST</h6>
                  <pre className="bg-light p-2 rounded small">
{`// Crear datos
axios.post('/api/posts', {
  title: 'Nuevo post',
  body: 'Contenido...'
})`}
                  </pre>
                </div>
                <div className="col-md-3">
                  <h6 className="text-info">PUT</h6>
                  <pre className="bg-light p-2 rounded small">
{`// Actualizar completamente
axios.put('/api/posts/1', {
  id: 1,
  title: 'Título actualizado',
  body: 'Nuevo contenido'
})`}
                  </pre>
                </div>
                <div className="col-md-3">
                  <h6 className="text-danger">DELETE</h6>
                  <pre className="bg-light p-2 rounded small">
{`// Eliminar datos
axios.delete('/api/posts/1')`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manejo de errores */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header bg-danger text-white">
              <h5>⚠️ Manejo de Errores</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded small">
{`try {
  const response = await axios.get('/api/data');
  setData(response.data);
} catch (error) {
  if (error.response) {
    // Error del servidor (4xx, 5xx)
    console.log('Error status:', error.response.status);
    console.log('Error data:', error.response.data);
  } else if (error.request) {
    // No se recibió respuesta
    console.log('No response:', error.request);
  } else {
    // Error en la configuración
    console.log('Error:', error.message);
  }
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Interceptors */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header bg-primary text-white">
              <h5>🔄 Interceptors</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded small">
{`// Request interceptor
axios.interceptors.request.use(
  (config) => {
    // Agregar token de autorización
    config.headers.Authorization = \`Bearer \${token}\`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirigir a login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);`}
              </pre>
            </div>
          </div>
        </div>

        {/* Configuración personalizada */}
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-info text-white">
              <h5>⚙️ Configuración Personalizada</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <h6>Instancia personalizada:</h6>
                  <pre className="bg-light p-2 rounded small">
{`const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  }
});

// Uso
const response = await apiClient.get('/posts');`}
                  </pre>
                </div>
                <div className="col-md-4">
                  <h6>Cancelación de requests:</h6>
                  <pre className="bg-light p-2 rounded small">
{`const controller = new AbortController();

axios.get('/api/data', {
  signal: controller.signal
});

// Cancelar después de 5 segundos
setTimeout(() => {
  controller.abort();
}, 5000);`}
                  </pre>
                </div>
                <div className="col-md-4">
                  <h6>Headers personalizados:</h6>
                  <pre className="bg-light p-2 rounded small">
{`const config = {
  headers: {
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json',
    'X-Custom-Header': 'value'
  }
};

axios.post('/api/data', data, config);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiosExamples;