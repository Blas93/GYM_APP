import React, { useContext } from 'react';
import { Activity } from './Activity';
import { AddActivity } from '../pages/AddActivity';
// import { DeleteInformationActivityPage } from '../pages/DeleteInformationActivityPage';
// import { EditInformationActivityPage } from '../pages/EditInformationActivityPage';
import { AuthContext } from '../context/AuthContext';

export const ActivitiesList = ({ activities, addActivity }) => {
	const { user } = useContext(AuthContext); //Necesitamos que el usuario tenga role
	console.log('activities', activities);
	return (
		<section>
			<h2>Lista de Actividades</h2>
			{/* Desactivar cuando el user del contexto tenga role */}
			{user && user.role === 'administrator' && (
				<AddActivity addActivity={addActivity} />
			)} 
			
			{/* <EditInformationActivityPage
				EditInformationActivityPage={EditInformationActivityPage}
			/> */}

			{activities.length ? (
				<ul>
					{activities.map((activity) => (
						<li key={activity.id}>
							<Activity activity={activity} />
						</li>
					))}
				</ul>
			) : (
				<p>No hay ninguna actividad todavía</p>
			)}
		</section>
	);
};

