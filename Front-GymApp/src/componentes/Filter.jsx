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
        <form className="Filtro" method="get" >
        <label htmlFor="grupoMuscular">Grupo Muscular:</label>
        <select name="grupoMuscular" id="grupoMuscular">
            <option id="1" value="">Todos</option>
            <option id="1" value="piernas">Piernas</option>
            <option id="1" value="brazos">Brazos</option>
        </select>
    
        <label htmlFor="tipologia">Tipología:</label>
        <select name="tipologia" id="tipologia">
            <option id="2" value="">Todas</option>
            <option id="2"value="cardio">Cardio</option>
            <option id="2"value="pesas">Pesas</option>
        </select>
    
        <button id="buscar" onClick={handleFilter} >Filtrar</button>
        
        
 
    </form>  
    )
    };
    
    export default Filter;