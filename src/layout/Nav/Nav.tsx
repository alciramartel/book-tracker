import { NavLink } from "react-router"

function Nav() {
    return (
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/shelf" end>My Shelf</NavLink>
        </nav>
    )
}

export default Nav