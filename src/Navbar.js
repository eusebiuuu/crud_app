import {NavLink} from "react-router-dom"

export default function Navbar() {
    return(<nav className="navbar">
        <div><img src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg" /></div>
        <div>
            <NavLink to="/cocktails">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    </nav>)
}