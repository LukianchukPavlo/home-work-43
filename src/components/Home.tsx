import { NavLink } from "react-router"
import { navStyle } from "./navStyle"

export default function Home() {
    return (
        <>
            <NavLink to="/" style={navStyle}>Home</NavLink> {" || "}
            <NavLink to="/User/1" style={navStyle}>User 1</NavLink> {" || "}
            <NavLink to="/User/2" style={navStyle}>User 2</NavLink> {" || "}
            <NavLink to="/User/3" style={navStyle}>User 3</NavLink>
            <h1> Hello </h1>
            <p> This is a home page of application </p>
            
        </>
    )
}

