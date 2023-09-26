import '../Css/DeleteInformationActivityPage.css';
import { useState } from 'react';

export const DeleteInformationActivityPage = () => {
  const [publicaciones, setPublicaciones] = useState([
    
  ]);
  const [idEliminar, setIdEliminar] = useState('');

  const eliminarPublicacion = () => {
    if (idEliminar === '') {
      return;
    }

    const nuevasPublicaciones = publicaciones.filter(
      (publicacion) => publicacion.id !== idEliminar
    );
    setPublicaciones(nuevasPublicaciones);
    setIdEliminar('');
  };

  return (
    <div>
      <h1>Eliminar Publicaciones</h1>
      <ul>
        {publicaciones.map((publicacion) => (
          <li key={publicacion.id}>
            {publicacion.contenido}
            <button onClick={() => setIdEliminar(publicacion.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>
        <label>Id de publicación a eliminar: </label>
        <input
          type="text"
          value={idEliminar}
          onChange={(e) => setIdEliminar(e.target.value)}
        />
        <button onClick={eliminarPublicacion}>Eliminar</button>
      </div>
    </div>
  );
}
