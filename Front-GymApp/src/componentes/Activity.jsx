export const Activity = ({ activity }) => {
	return (
		<article>
			<p>{activity.activity_name}</p>
			<p>{activity.description}</p>
			<p>{activity.muscle_group}</p>
			<p>{activity.typology}</p>

			{activity.image && (
				<img
					src={`${import.meta.env.VITE_APP_BACKEND}/uploads/${activity.image}`}
					alt={activity.text}
				/>
			)}
		</article>
	);
};
