import {link} from "react-router-dom";

export const activity = ({ activity}) => {
    return (
        <article>
            <p>{activity.text}</p>

            {activity.image ? (
                <img
                src= {`${process.env.REACT_APP_BACKEND}/uploads/${activity.image}`}
                alt={activity.text}
                />
            ) : null}
            
        </article>
    );
            };