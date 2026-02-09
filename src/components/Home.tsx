import { NavLink } from "react-router"
import { useTheme } from "./ThemeContext"
import { useNavStyle } from "./navStyle"

export default function Home() {
  const { toggleTheme, theme, colors } = useTheme()   
  const navStyle = useNavStyle()              

  return (
    <body style={{ backgroundColor: colors.backgroundColor, color: colors.textColor, padding: "20px" }}>
      <NavLink to="/" style={navStyle}>Home</NavLink> {" || "}
      <NavLink to="/user/1" style={navStyle}>User 1</NavLink> {" || "}
      <NavLink to="/user/2" style={navStyle}>User 2</NavLink> {" || "}
      <NavLink to="/user/3" style={navStyle}>User 3</NavLink>
      
      <h1>Hello</h1>
      <p>This is a home page of application</p>

      <br /><br />
      <button onClick={toggleTheme}>
        Toggle Theme ({theme})
      </button>
    </body>
  )
}

