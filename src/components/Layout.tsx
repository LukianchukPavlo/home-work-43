import { Outlet, NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import type { RootState } from "../redux/store"
import { toggleTheme } from "../redux/slices/themeSlice"
import { useNavStyle } from "./navStyle"

export default function Layout() {
  const navStyle = useNavStyle() 
  
  const theme = useSelector((state: RootState) => state.theme.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#444"
    document.body.style.color = theme === "light" ? "#000" : "#fff"
  }, [theme])
  
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
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle theme({theme})
      </button>
    </div>
  )
}