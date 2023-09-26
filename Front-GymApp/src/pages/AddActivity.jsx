import { useState } from 'react';
import '../Css/AddActivity.css';

export const AddActivity = () => {
  const [actividades, setActividades] = useState([]);
  const [nuevaActividad, setNuevaActividad] = useState('');

  const agregarActividad = () => {
    if (nuevaActividad.trim() === '') {
      return;
    }

    setActividades([...actividades, nuevaActividad]);
    setNuevaActividad('');
  };

  return (
    <div>
      <h1>Ejercicio a Añadir </h1>
      <input
        type="text"
        placeholder="Agregar actividad"
        value={nuevaActividad}
        onChange={(e) => setNuevaActividad(e.target.value)}
      />
      <button onClick={agregarActividad}>Agregar</button>
      <ul>
        {actividades.map((actividad, index) => (
          <li key={index}>{actividad}</li>
        ))}
      </ul>
    </div>
  );
}
