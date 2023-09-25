import { getSigleActivityService } from "../services";

const activityDefinition = (id)=> {
const [activity, setActivity] = useState (null);
const [loading, setLoading] = useState (true);
const [error, setError] = useState ("");

useEffect (() => {
const loadactivity =async () => {
    try {
        setloading(true);

        
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


return {activity, loading, error};
};


export default activityDefinition;