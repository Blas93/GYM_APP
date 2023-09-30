import { useEffect, useState } from 'react';
import '../Css/AddActivity.css';

export const AddActivity = () => {
  const [actividades, setActividades] = useState([]);
  const [nuevaActividad, setNuevaActividad] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipologia, setTipologia] = useState('');
  const [grupoMuscular, setGrupoMuscular] = useState('');
  
  
  const agregarActividad = () => {
    if (nuevaActividad.trim() === '') {
      return;
    }

    setActividades([...actividades, nuevaActividad,]);
    setNuevaActividad('');
    setNombre('');
    setDescripcion('');
    setTipologia('');
    setGrupoMuscular('');
  };

  useEffect(() => {
    fetch('http://localhost3000/db/activities.js')
    .then((response) => response.json())
    .then((data) => {
      setActividades(data);
    })
    .catch((error) => {
      console.error('Error al obtener datos:', error);
    });
  },
  );
  

  return (
    <div>
      <h1>Ejercicio a Añadir </h1>
      <button id = "agregar"  onClick={agregarActividad}>Agregar</button>
      
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tipología"
        value={tipologia}
        onChange={(e) => setTipologia(e.target.value)}
      />
      <input
        type="text"
        placeholder="Grupo Muscular"
        value={grupoMuscular}
        onChange={(e) => setGrupoMuscular(e.target.value)}
      />
     
      
      <ul>
        {actividades.map((actividad, index) => (
          <li key={index}>{actividad}</li>
        ))}
      </ul>
    </div>
  );
}
