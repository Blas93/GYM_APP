import { useEffect, useState } from 'react';
import '../Css/AddActivity.css';
//import { useNavigate } from "react-router-dom";

export const AddActivity = () => {
  const [actividades, setActividades] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipologia, setTipologia] = useState('');
  const [grupoMuscular, setGrupoMuscular] = useState('');
 
  const agregarActividad = () => {
    if (nombre.trim() === '' || descripcion.trim() === '' || tipologia.trim() === '' || grupoMuscular.trim() === '' ) {
      return;
    }

   const nuevaActividad ={
    nombre,
    descripcion,
    tipologia,
    grupoMuscular,
   };

   setActividades([...actividades, nuevaActividad,]);
   setNombre('');
  setDescripcion('');
  setTipologia('');
  setGrupoMuscular('');
  
  };

  useEffect(() => {
    fetch('http://localhost3000/db/activities.js')
    //si le añado los dos puntos al local host da pantalla en blanco, ¿porque sucede????
    .then((response) => response.json())
    .then((data) => {
      setActividades(data);
    })
    .catch((error) => {
      console.error('Error al obtener datos:', error);
    });
  }
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
