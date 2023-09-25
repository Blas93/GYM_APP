export const EditInformationActivityPage = () => {
    return (
    <section> 
    <h1> Editar contenido </h1>
    <p> Se mostrará los campos de la actividad en formato editable </p> 
    </section>
    );
    };

    import React, { useState } from 'react';
    import 'Css/EditInformationActivityPage.css'

function App() {
  const [publicaciones, setPublicaciones] = useState([
    
  ]);
  const [idEditar, setIdEditar] = useState('');
  const [nuevoContenido, setNuevoContenido] = useState('');

  const editarPublicacion = () => {
    if (idEditar === '' || nuevoContenido.trim() === '') {
      return;
    }

    const nuevasPublicaciones = publicaciones.map((publicacion) => {
      if (publicacion.id === idEditar) {
        return { ...publicacion, contenido: nuevoContenido };
      }
      return publicacion;
    });

    setPublicaciones(nuevasPublicaciones);
    setIdEditar('');
    setNuevoContenido('');
  };

  return (
    <div>
      <h1>Editar Publicaciones</h1>
      <ul>
        {publicaciones.map((publicacion) => (
          <li key={publicacion.id}>
            {publicacion.id === idEditar ? (
              <div>
                <input
                  type="text"
                  value={nuevoContenido}
                  onChange={(e) => setNuevoContenido(e.target.value)}
                />
                <button onClick={editarPublicacion}>Guardar</button>
              </div>
            ) : (
              <div>
                {publicacion.contenido}
                <button onClick={() => setIdEditar(publicacion.id)}>Editar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
