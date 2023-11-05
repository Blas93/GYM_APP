import { useEffect, useState } from "react";
import { editActivityService, getSigleActivityService } from "../services";
import { useSearchParams } from "react-router-dom";


const useActivity = ()=> {
const [activity, setActivity] = useState (null);
const [loading, setLoading] = useState (true);
//const [error, setError] = useState("");
const [searchParams] =useSearchParams();

useEffect(() => {
const loadactivity =async () => {
    try {
        const res = await fetch(
            `http://localhost:3000/filterActivities?${searchParams.toString()}`
        );
        const body = await res.json();

        setActivity(body.data);

        //setLoading(true);

        //const data = await getSigleActivityService (id);
        //setActivity (data);
    } catch (error) {
        //setError(error.message);
        console.log(error);
    } 
    
    finally {
        setLoading(false);

    }
}
loadactivity();
}, );

const editActivity = async (id, data, token) => {
    await editActivityService(id, data, token);
    const newActivity = await getSigleActivityService (id);
    setActivity(newActivity);
}

return {activity, loading, /*error,*/ editActivity };
};


export default useActivity;

