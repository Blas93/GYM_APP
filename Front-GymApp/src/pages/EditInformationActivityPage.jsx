import { useState } from 'react';
import '../Css/EditInformationActivityPage.css'

export const EditInformationActivityPage = () => {
  const [publicaciones, setPublicaciones] = useState([
    { id: '1', contenido: 'Publicación 1'},
    { id: '2', contenido: 'Publicación 2'},
    { id: '3', contenido: 'Publicación 3'},
    { id: '4', contenido: 'Publicación 4'},
    { id: '5', contenido: 'Publicación 5'},
    { id: '6', contenido: 'Publicación 6'},
    { id: '7', contenido: 'Publicación 7'},
    { id: '8', contenido: 'Publicación 8'},
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
