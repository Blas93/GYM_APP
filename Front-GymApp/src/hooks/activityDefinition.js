import { useEffect, useState } from "react";
import { editActivityService, getSigleActivityService } from "../services";

const useActivity = (id)=> {
const [activity, setActivity] = useState (null);
const [loading, setLoading] = useState (true);
const [error, setError] = useState("");

useEffect(() => {
const loadactivity =async () => {
    try {
        setLoading(true);

        const data = await getSigleActivityService (id);
        setActivity (data);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);

    }
}
loadactivity();
}, [id]);

const editActivity = async (id, data, token) => {
    await editActivityService(id, data, token);
    const newActivity = await getSigleActivityService (id);
    setActivity(newActivity);
}

return {activity, loading, error, editActivity };
};


export default useActivity;

