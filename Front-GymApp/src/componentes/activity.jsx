export const Activity = ({ activity}) => {
    return (
        <article>
            <p>{activity.text}</p>

            {activity.image ? (
                <img
                src= {`${import.meta.env.VITE_APP_BACKEND}/uploads/${activity.image}`}
                alt={activity.text}
                />
            ) : null}
            
        </article>
    );
};