
import '../Css/HomePagePublic.css'

export const HomePagePublic = () => {
  return(
<section className='HomePublic'>
    <h1 className='titulo-principal'>¿Quieres saber más sobre GymApp?</h1>
    <p className='eslogan'> GymApp es una aplicación para organizar tus ejercicios, así de forma fácil y sencilla puedes organizar el plan de entrenamiento que más te convenga, según tu tiempo, la zona de tu cuerpo en la que te quieras focalizar</p>  
    <p className='eslogan'>Podrás organizar tu plan de entrenamiento de forma personalizada y completamente</p>
    <p className='gratuito'>GRATUITO</p>

    

  
    <fieldset id='label-cuando'>
    <h3>
    <span className='text-white'>Cuando</span> 
    <span className='text-white-outliner'>Tú quieras</span>
   
    </h3>
  
    <h4>
      nada más empezar el día, al finalizar, entre horas...¡tú decides!
    </h4>
  
    </fieldset>
    <fieldset id='label-donde'>
    <h3>
    <span className='text-white'> Dónde</span>
    <span className='text-white-outliner'>Tú quieras</span>
    </h3>
    
    <h4>
    desde casa, en el parque o en el gym 
      </h4>
    
    </fieldset>
  
    <fieldset id='label-como'>
    <h3>
    <span className='text-white'> Cómo</span>
    <span className='text-white-outliner'>Tú quieras</span>
    </h3>
    
    <h4>
    entrena cómo más cómodo te sientas
      </h4>
    </fieldset>
    

  </section>
  
  );
};
