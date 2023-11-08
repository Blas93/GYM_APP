import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export const Activity = ({ activity, deleteActivity }) => {
	const {token} = useContext(AuthContext)

	
	return (
		<article>
			<Link to={`/activity/${activity.id}`}>
				<p id="name">{activity.activity_name}</p>
				<p id="description">{activity.description}</p>
				<p id="musculargroup">{activity.muscle_group}</p>
				<p id="typology">{activity.typology}</p>

				{activity.image && (
					<img
						src={`${import.meta.env.VITE_APP_BACKEND}/uploads/${activity.image}`}
						alt={activity.text}
					/>
				)}
			</Link>
			<button onClick={() => deleteActivity(activity.id, token)} >Delete</button>
		</article>
	);
};

/*export const ActivityList = ({ activities}) => {
	const reverseActivities = [...activities].reverse();

	return(
		<div>
			{reverseActivities.map((activity, index) => (<activity key={index}activity={activity}/>))}
		</div>
	);
};*/
