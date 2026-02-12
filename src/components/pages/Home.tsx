import { useTheme } from "../useContext/ThemeContext"


export default function Home() {
  const { toggleTheme, theme} = useTheme()   
               

  return (
    <div>
      <h1>Hello</h1>
      <p>This is a home page of application</p>

      <br /><br />
      <button onClick={toggleTheme}>
        Toggle Theme ({theme})
      </button>
    </div>
  )
}

