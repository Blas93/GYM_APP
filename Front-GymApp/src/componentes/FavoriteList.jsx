import { useContext } from 'react'
import useFavoritesActivities from '../hooks/useFavoritesActivities'
import { AuthContext } from '../context/AuthContext'

export const FavoriteList = () => {
  const {token} = useContext(AuthContext)
  const {favorites, loading, error} = useFavoritesActivities(token)
  console.log(favorites)
  return (
    <div>FavoriteList</div>
  )
}
