import { useContext, useEffect, useState } from "react";
import { editActivityService, getSigleActivityService, getUserFavoritesActivitiesService } from "../services";
import { AuthContext } from "../context/AuthContext";
//import { useSearchParams } from "react-router-dom";


const useFavoritesActivities = (token)=> {
const [favorites, setFavorites] = useState (null);
const [loading, setLoading] = useState (true);
const [error, setError] = useState("");
//const [searchParams] =useSearchParams();

useEffect(() => {
const loadactivity =async () => {
    try {
        setLoading(true);
        /*const res = await fetch(
            `http://localhost:3000/filterActivities?${searchParams.toString()}`
        );
        const body = await res.json();

        setActivity(body.data);*/

        

        const data = await getUserFavoritesActivitiesService(token);
        setFavorites (data);
    } catch (error) {
        setError(error.message);
        console.log(error);
    } finally {
        setLoading(false);
    }
}
loadactivity();
}, [token]);

return {favorites, loading, error };
};


export default useFavoritesActivities;

