import { Link } from "react-router-dom"; 
import { Auth } from "./Auth"; 



<logo />
export const Header = () => {
    return (
        <header>
            
            <div className="logo">
                <a href ="/" className="logo-img">
                    <img src="logo.png" alt="Logo de la aplicación"/>
                </a>  
            <h2 className="logo-nombre">
            <Link to ="/">
                    Gym App
            </Link>
            </h2>
            </div>
           
            
            <nav>
                <Auth/>
            </nav>
        </header>
    )
}