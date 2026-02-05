import { NavLink } from "react-router"

export default function Home() {
    return (
        <>
            <NavLink to="/"
            style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: isActive ? "underline" : "none",
            fontWeight: isActive ? "bold" : "normal"
            })}
            >Home</NavLink>
            { "||" } 
            <NavLink to="/User1"
            style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: isActive ? "underline" : "none",
            fontWeight: isActive ? "bold" : "normal"
            })}
            >User 1</NavLink>
            { "||" } 
            <NavLink to="/User2"
            style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: isActive ? "underline" : "none",
            fontWeight: isActive ? "bold" : "normal"
            })}
            >User 2</NavLink>
            { "||" } 
            <NavLink to="/User3"
            style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: isActive ? "underline" : "none",
            fontWeight: isActive ? "bold" : "normal"
            })}
            >User 3</NavLink>
            <h1> Hello </h1>
            <p> This is a home page of application </p>
            
        </>
    )
}

