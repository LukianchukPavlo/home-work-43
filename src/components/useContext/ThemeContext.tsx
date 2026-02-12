import { createContext, useContext, useState, type ReactNode } from "react"
import { useEffect } from "react"

const colors = {
    light: {
        backgroundColor: "#fff",
        textColor: "#000"
    },
    dark: {
        backgroundColor: "#444",
        textColor: "#fff"
    }
}
type Theme = "light" | "dark"

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
  colors: { backgroundColor: string; textColor: string}
  
}

const themeValue: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {},
  colors: colors.light
}

const ThemeContext = createContext<ThemeContextType >(themeValue)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light")

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  useEffect(() => {
  document.body.classList.remove("light", "dark")
  document.body.classList.add(theme)
}, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: colors[theme] }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)