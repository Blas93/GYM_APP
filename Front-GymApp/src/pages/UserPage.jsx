import { useContext } from 'react'
import { FavoriteList } from '../componentes/FavoriteList'
import { UserInfo } from '../componentes/UserInfo'
import { AuthContext } from '../context/AuthContext'

export const UserPage = () => {
  const {user} = useContext(AuthContext)
  
  return (
    <section>
        <h2>UserPage</h2>
        <UserInfo user={user} />
        <FavoriteList />
    </section>
  )
}
