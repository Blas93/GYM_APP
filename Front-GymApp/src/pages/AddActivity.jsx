export const AddActivity = () => {
    return (
    <section> 
    <h1> Añadir una actividad </h1>
    <p> Se mostrará los campos de registro de una activiad vacíos para poder completarla </p> 
    </section>
    );
    };

    import React, { useState } from 'react';
    import 'Css/AddActivity.css';

function App() {
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

export default App;
