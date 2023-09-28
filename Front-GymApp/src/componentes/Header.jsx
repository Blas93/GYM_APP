import { Link } from "react-router-dom"; 
import { Auth } from "./Auth"; 
import logo from '../logo/GymApp.png'
export const Header = () => {
    return (
        <header>
            <h1>
                <Link to ="/">
                    <img src={logo} alt="Logo" className="logo"/>
                    Gym App
                </Link>
            
            </h1>

            <nav>
                <Auth/>
            </nav>
        </header>
    )
}