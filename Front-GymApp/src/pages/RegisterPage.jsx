export const RegisterPage = () => {
    return (
    <section> 
    <h1> Registre </h1>
    <p> Se mostrará el formulario de registro para nuevos usuarios </p> 
    </section>
    );
    };


    import 'Css/RegisterPage.css'
    import React, { useState } from 'react';

function RegistroUsuario() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    direccion: '',
    correoElectronico: '',
    telefono: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar el codigo para enviar los datos del usuario al servidor
    // o realizar cualquier otra acción que necesites.
    console.log('Usuario registrado:', usuario);
    // Luego, puedes reiniciar el estado para borrar los campos del formulario.
    setUsuario({
      nombre: '',
      direccion: '',
      correoElectronico: '',
      telefono: '',
    });
  };

  return (
    <div>
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={usuario.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={usuario.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="correoElectronico">Correo Electrónico:</label>
          <input
            type="email"
            id="correoElectronico"
            name="correoElectronico"
            value={usuario.correoElectronico}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="telefono">Número de Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={usuario.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrar Usuario</button>
      </form>
    </div>
  );
}

export default RegistroUsuario;
