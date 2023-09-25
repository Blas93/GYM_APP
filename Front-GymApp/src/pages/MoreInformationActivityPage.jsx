import {useParams} from "react-router-dom";
import {ErrorMessage} from "../components/ErrorMessage";
import activityDefinition from "../hooks/activityDefinition";

export const MoreInformationActivityPage = () => {
    const {id} = useParams();
    const {activity, loadin, error } = activityDefinition(id);
    
    if (loading) return <p> se está cargando la página</p>;
    if (error) return <ErrorMessage message={error} />; 

    return (
    <section> 
    <h1> Añadir una actividad </h1>
        <activity activity ={activity}/>    
    </section>
    );
};