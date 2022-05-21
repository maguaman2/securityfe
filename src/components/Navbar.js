import './Navbar.css'
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
        <div>
            <h1>Modulo de seguridad</h1>
        <ul>
            <li>
                <NavLink to={"/users"} className="navlink">
                    Usuarios
                </NavLink>

            </li>
      
        </ul>
        </div>

    );

}