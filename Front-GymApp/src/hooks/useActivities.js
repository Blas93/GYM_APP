import { useEffect, useState } from "react";
import { getAllActivitiesServices } from "../services";

export const useActivities = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadActivities = async () => {
            try{
                const data = await getAllActivitiesServices()
                setActivities(data)
            } catch(error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }
        loadActivities()
    }, [])
    /*const addActivity = async (activity, token) => {
        await addActivityService(activity, token)
        const allNewActivities = await getAllActivitiesServices()
        setActivities(allNewActivities)
    }
    const deleteActivity = async (id, token) => {
        await deleteActivityService(id, token)
        const allNewActivities = await getAllActivitiesServices()
        setActivities(allNewActivities)
    }
    const editActivity = async (id, activity, token) => {
        await editActivityService(id, activity, token)
        const allNewActivities = await getAllActivitiesServices()
        setActivities(allNewActivities)
    }*/
    // Añadir addActivity, deleteActivity, editActivity al return cuando esten bien
    return {activities, loading, error }
}