export const Activity = ({ activity }) => {
	return (
		<article>
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
		</article>
	);
};
