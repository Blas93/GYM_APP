import react, { useState } from 'react';

export const Filter = () => {
    
    const [respuesta, setRespuesta] = useState('');

    const handleFilter = async () => {
        const grupoMuscular = document.getElementById('grupoMuscular').value;
        const tipologia = document.getElementById('tipologia').value;

        try{
             response = await fetch(`/api/filtrar?grupoMuscular=${grupoMuscular}&tipologia=${tipologia}`);
        const data = await response.json();
        setRespuesta(data.resultado);
    } catch (error) {
        console.error('Error al enviar la solicitud:', error );
    }
};
    return(
        <form method="get" >
        <label htmlFor="grupoMuscular">Grupo Muscular:</label>
        <select name="grupoMuscular" id="grupoMuscular">
            <option value="">Todos</option>
            <option value="piernas">Piernas</option>
            <option value="brazos">Brazos</option>
        </select>
    
        <label htmlFor="tipologia">Tipología:</label>
        <select name="tipologia" id="tipologia">
            <option value="">Todas</option>
            <option value="cardio">Cardio</option>
            <option value="pesas">Pesas</option>
        </select>
    
        <button id="buscar" onClick={handleFilter} >Filtrar</button>
        
        <div id="respuesta">{respuesta}

        </div>
 
    </form>  
    )
    };
    
    export default Filter;