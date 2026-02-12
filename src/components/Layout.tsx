import { Outlet, NavLink } from "react-router-dom"
import { useNavStyle } from "./navStyle"

export default function Layout() {
  const navStyle = useNavStyle()    
  return (
    <div>
      <header>
      <NavLink to="/" style={navStyle}>Home</NavLink> {" || "}
      <NavLink to="/user/1" style={navStyle}>User 1</NavLink> {" || "}
      <NavLink to="/user/2" style={navStyle}>User 2</NavLink> {" || "}
      <NavLink to="/user/3" style={navStyle}>User 3</NavLink>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}