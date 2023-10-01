import { Link } from "react-router-dom"; 
import { Auth } from "./Auth"; 
import logo from '../logo/GymApp.png'
export const Header = () => {
    return (
        <header>
            
            <h1>
            <div className="logo">
                <a href ="/">
                    <img id="logo-img"src={logo} alt="Logo"/>
                </a>
            </div> 
            </h1>
            <div>
            <Link to ="/">
                    Gym App
                </Link>
            </div>
            
            <nav>
                <Auth/>
            </nav>
        </header>
    )
}