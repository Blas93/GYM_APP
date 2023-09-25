export const ValidateEmailPage = () => {
    return (
    <section> 
    <h1> Página de validacion de Email </h1>
    <p>Para comprobar tu Email y registrarlo, dale click al botón situado debajo</p> 
    </section>
    );
    };

    import 'Css/ValidateEmailPage'
    import React from 'react';

function ValidarEmailButton() {
  const handleValidationClick = () => {
    // Aquí puedes agregar la lógica para enviar un correo de validación
    // o redirigir al usuario a una página de validación de correo.
    // Por ejemplo, puedes usar la función window.location.href para redirigir.
    // window.location.href = 'URL de validación';
  };

  return (
    <div>
      <p>¡Gracias por registrarte! Por favor, valida tu correo electrónico.</p>
      <button onClick={handleValidationClick}>Validar Correo</button>
    </div>
  );
}

export default ValidarEmailButton;
