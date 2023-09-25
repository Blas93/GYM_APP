
import 'Css/ValidationOk.css'
import 'ValidateEmailPage.jsx'
import React from 'react';

function AprobacionValidacion() {
  const correoValidado = true; // Cambia esto según el resultado de tu validación

  return (
    <div>
      {correoValidado ? (
        <div>
          <h1>Correo Electrónico Validado</h1>
          <p>Tu correo electrónico ha sido validado con éxito. ¡Enhorabuena!</p>
        </div>
      ) : (
        <div>
          <h1>Validación de Correo Electrónico Fallida</h1>
          <p>Lo sentimos, no hemos podido validar tu correo electrónico.</p>
        </div>
      )}
    </div>
  );
}

export default AprobacionValidacion;
