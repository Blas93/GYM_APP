//import {useParams} from "react-router-dom";
//import {useActivity} from "../hooks/activityDefinition";
//import {ErrorMessage} from "../componentes/ErrorMessage";

import { useState } from "react";


//export const ActivityPage = () => {
  //  const {id} = useParams();
    //const {activity, loading, error } = useActivity(id);
    
    //if (loading) return <p> se está cargando la página</p>;
    //if (error) return <ErrorMessage message={error} />; 

    //return (
    //<section> 
    //<h1> Descripción de la Actividad </h1>
      //  <activity Activity ={activity}/>    
    //</section>
    //);
//}; 

//incorporar el like a las card de cada actividad
export function ActivityCard({post}){
  const[likes, setLikes]= useState(post.likes);

  const onLikeClick = () => {
  if(likes===post.likes){
    setLikes((likes)=> likes + 1);
  }else {setLikes((likes)=> likes - 1);
    }

};

return (
   
)
}