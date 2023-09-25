export const HomePage = () => {
    return (
    <section> 
    <h1> Bienvenido a tu área personal </h1>
    <p> Se mostrará el listado con todas las actividades </p> 
    </section>
    );
    };

    import React, { useState } from 'react';
    import 'Css/HomePage.css'

<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html"></a></li>
                <li><a href="tabla.html">Tabla Ejercicios</a></li>
                <li></li>
            </ul>
        </nav>
    </header>
    <form method="get" >
        <label for="grupoMuscular">Grupo Muscular:</label>
        <select name="grupoMuscular" id="grupoMuscular">
            <option value="">Todos</option>
            <option value="piernas">Piernas</option>
            <option value="brazos">Brazos</option>
            
        </select>
    
        <label for="tipologia">Tipología:</label>
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
    

</body>
