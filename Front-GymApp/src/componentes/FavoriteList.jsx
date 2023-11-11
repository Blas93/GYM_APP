import { useContext } from 'react'
import useFavoritesActivities from '../hooks/useFavoritesActivities'
import { AuthContext } from '../context/AuthContext'
import { Activity } from './Activity'

export const FavoriteList = () => {
  const {token} = useContext(AuthContext)
  const {favorites, loading, error, deleteFavoriteActivity, likeFavoriteActivity} = useFavoritesActivities(token)
  console.log(favorites)
  return (
    <section>
			<h2>Lista de Favoritos</h2>

			{favorites?.length ? (
				<ul>
					{favorites.map((favority) => (
						<li key={favority.id}>
								<Activity activity={favority} deleteActivity={deleteFavoriteActivity} likeActivity={likeFavoriteActivity} />
						</li>
					))}
				</ul>
			) : (
				<p>No hay ninguna actividad todavía</p>
			)}
		</section>
  )
}
