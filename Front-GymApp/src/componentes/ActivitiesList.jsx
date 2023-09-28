import React from 'react'
import { Activity } from './Activity'

export const ActivitiesList = ({activities}) => {
  return (
    <section>
      <h2>Lista de Actividades</h2>
      {activities.length ? (
          <ul>
            {activities.map((activity) => {
              <li key={activity.id}>
                <Activity activity={activity} />
              </li>
            })}
          </ul>
        ) : (
          <p>No hay ninguna actividad todavía</p>
        )}
    </section>
  )
}

//import { Activity } from "./Activity";

//export const ActivityList = ({Activity}) => {
  //  <ul>
      //  {Activity.map{(Activity)}} =>(
          //  <li key={Activity.id}>
                //<Activity activity={activity} />
          //  </li>
       // )}
    //</ul>
  //  ) : (
     //   <p>No hay ninguna actividad todavía</p>
    //);
//};
