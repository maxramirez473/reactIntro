import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ReactHookFormExamples = () => {
  const [submittedData, setSubmittedData] = useState(null);

  // Ejemplo 1: Formulario básico
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 }
  } = useForm();

  // Ejemplo 2: Formulario con validaciones
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    watch: watch2,
    formState: { errors: errors2 }
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      password: '',
      confirmPassword: ''
    }
  });

  // Ejemplo 3: Formulario con watch
  const {
    register: register3,
    handleSubmit: handleSubmit3,
    watch: watch3,
    setValue: setValue3,
    formState: { errors: errors3 }
  } = useForm();

  const watchedValues = watch3(['product', 'quantity', 'price']);

  const onSubmit1 = (data) => {
    console.log('Formulario básico:', data);
    alert('Datos enviados! Revisa la consola.');
  };

  const onSubmit2 = (data) => {
    console.log('Formulario con validaciones:', data);
    setSubmittedData(data);
  };

  const onSubmit3 = (data) => {
    const total = data.quantity * data.price;
    console.log('Formulario con cálculo:', { ...data, total });
    alert(`Total calculado: $${total}`);
  };

  const calculateTotal = () => {
    const quantity = watchedValues[1] || 0;
    const price = watchedValues[2] || 0;
    return quantity * price;
  };

  return (
    <div className="container-fluid h-100 p-4" style={{ overflowY: 'auto' }}>
      <h1 className="display-4 text-center mb-5">React Hook Form - Ejemplos</h1>
      
      <div className="row g-4">
        {/* Ejemplo 1: Formulario básico */}
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-header bg-primary text-white">
              <h5>1. Formulario Básico</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-2 rounded small mb-3">
{`import { useForm } from 'react-hook-form';

const { register, handleSubmit } = useForm();

<input 
  {...register('name')} 
  placeholder="Nombre" 
/>`}
              </pre>
              
              <form onSubmit={handleSubmit1(onSubmit1)}>
                <div className="mb-3">
                  <input
                    {...register1('name')}
                    className="form-control"
                    placeholder="Nombre completo"
                  />
                </div>
                <div className="mb-3">
                  <input
                    {...register1('email')}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    {...register1('message')}
                    className="form-control"
                    placeholder="Mensaje"
                    rows="3"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Ejemplo 2: Con validaciones */}
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-header bg-success text-white">
              <h5>2. Con Validaciones</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-2 rounded small mb-3">
{`<input 
  {...register('email', { 
    required: 'Email requerido',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email inválido'
    }
  })} 
/>`}
              </pre>
              
              <form onSubmit={handleSubmit2(onSubmit2)}>
                <div className="mb-3">
                  <input
                    {...register2('firstName', { 
                      required: 'Nombre es requerido',
                      minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                    })}
                    className={`form-control ${errors2.firstName ? 'is-invalid' : ''}`}
                    placeholder="Nombre"
                  />
                  {errors2.firstName && (
                    <div className="invalid-feedback">
                      {errors2.firstName.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    {...register2('email', {
                      required: 'Email es requerido',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido'
                      }
                    })}
                    type="email"
                    className={`form-control ${errors2.email ? 'is-invalid' : ''}`}
                    placeholder="Email"
                  />
                  {errors2.email && (
                    <div className="invalid-feedback">
                      {errors2.email.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    {...register2('age', {
                      required: 'Edad es requerida',
                      min: { value: 18, message: 'Debe ser mayor de 18' },
                      max: { value: 99, message: 'Edad máxima 99' }
                    })}
                    type="number"
                    className={`form-control ${errors2.age ? 'is-invalid' : ''}`}
                    placeholder="Edad"
                  />
                  {errors2.age && (
                    <div className="invalid-feedback">
                      {errors2.age.message}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Validar y Enviar
                </button>
              </form>

              {submittedData && (
                <div className="mt-3 p-2 bg-light rounded">
                  <strong>Datos válidos:</strong><br/>
                  <small>
                    Nombre: {submittedData.firstName}<br/>
                    Email: {submittedData.email}<br/>
                    Edad: {submittedData.age}
                  </small>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Ejemplo 3: Watch y cálculos */}
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-header bg-warning text-dark">
              <h5>3. Watch y Cálculos</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-2 rounded small mb-3">
{`const watchedValues = watch(['quantity', 'price']);
const total = watchedValues[0] * watchedValues[1];

// Valores en tiempo real
<p>Total: $\{total\}</p>`}
              </pre>
              
              <form onSubmit={handleSubmit3(onSubmit3)}>
                <div className="mb-3">
                  <select
                    {...register3('product', { required: 'Selecciona un producto' })}
                    className={`form-control ${errors3.product ? 'is-invalid' : ''}`}
                  >
                    <option value="">Seleccionar producto</option>
                    <option value="laptop">Laptop</option>
                    <option value="mouse">Mouse</option>
                    <option value="keyboard">Teclado</option>
                  </select>
                  {errors3.product && (
                    <div className="invalid-feedback">
                      {errors3.product.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    {...register3('quantity', { 
                      required: 'Cantidad requerida',
                      min: { value: 1, message: 'Mínimo 1' }
                    })}
                    type="number"
                    className={`form-control ${errors3.quantity ? 'is-invalid' : ''}`}
                    placeholder="Cantidad"
                  />
                  {errors3.quantity && (
                    <div className="invalid-feedback">
                      {errors3.quantity.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    {...register3('price', { 
                      required: 'Precio requerido',
                      min: { value: 0.01, message: 'Precio debe ser mayor a 0' }
                    })}
                    type="number"
                    step="0.01"
                    className={`form-control ${errors3.price ? 'is-invalid' : ''}`}
                    placeholder="Precio unitario"
                  />
                  {errors3.price && (
                    <div className="invalid-feedback">
                      {errors3.price.message}
                    </div>
                  )}
                </div>

                <div className="alert alert-info">
                  <strong>Cálculo en tiempo real:</strong><br/>
                  Producto: {watchedValues[0] || 'Ninguno'}<br/>
                  Cantidad: {watchedValues[1] || 0}<br/>
                  Precio: ${watchedValues[2] || 0}<br/>
                  <strong>Total: ${calculateTotal().toFixed(2)}</strong>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-warning">
                    Calcular y Enviar
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      setValue3('product', 'laptop');
                      setValue3('quantity', 2);
                      setValue3('price', 999.99);
                    }}
                  >
                    Llenar Ejemplo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de características */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-info text-white">
              <h5>🎯 Ventajas de React Hook Form</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <h6>🚀 Performance</h6>
                  <p className="small">Mínimos re-renders, mejor performance que formularios controlados tradicionales.</p>
                </div>
                <div className="col-md-3">
                  <h6>📝 Menos código</h6>
                  <p className="small">Menos boilerplate, validaciones integradas, API simple y clara.</p>
                </div>
                <div className="col-md-3">
                  <h6>🔧 Flexible</h6>
                  <p className="small">Compatible con librerías de validación, fácil integración con UI libraries.</p>
                </div>
                <div className="col-md-3">
                  <h6>🎯 TypeScript</h6>
                  <p className="small">Excelente soporte para TypeScript, tipos automáticos para formularios.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactHookFormExamples;