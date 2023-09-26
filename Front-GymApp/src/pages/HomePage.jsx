import '../Css/HomePage.css'
export const HomePage = () => {
    //El formulario meterlo en un componente Filter.jsx
    return (
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
            
                <button id="buscar">Filtrar</button>
                
                <div id="respuesta">

                </div>
            
                <script src="http://localhost:3000//"></script>

            </form>
            

        </>
    )
}