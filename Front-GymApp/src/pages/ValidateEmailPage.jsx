import '../Css/ValidateEmailPage.css'
export const ValidateEmailPage = () => {
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

