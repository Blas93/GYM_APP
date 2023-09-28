import { useNavigate } from 'react-router-dom';
import '../Css/RegisterPage.css'
import { useState } from 'react';
import { registerUserService } from '../services';
export const RegisterPage = () => {
  const [usuario, setUsuario] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes agregar el codigo para enviar los datos del usuario al servidor
    try{
      await registerUserService(usuario)
      navigate('/login')
    } catch (error){
      setError(error.message)
    } finally {
      // o realizar cualquier otra acción que necesites.
      console.log('Usuario registrado:', usuario);
      // Luego, puedes reiniciar el estado para borrar los campos del formulario.
      setUsuario({
        name: '',
        email: '',
        password: '',
      });
    }
  };
  return (
    <div>
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            id="name"
            name="name"
            value={usuario.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Correo Electrónico:
          <input
            type="email"
            id="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            id="password"
            name="password"
            value={usuario.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Registrar Usuario</button>
      </form>
      {error && <p>{error}</p> }
    </div>
  );
}