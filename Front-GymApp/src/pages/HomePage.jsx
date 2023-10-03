import '../Css/HomePage.css'
import { ActivitiesList } from '../componentes/ActivitiesList'
import { Filter } from '../componentes/filter'
import { useActivities } from '../hooks/useActivities'


export const HomePage = () => {
    const {activities, loading, error} = useActivities();
    return ( 
        <>
            <Filter />
            <ActivitiesList activities={activities} />
        </>
    )
}
