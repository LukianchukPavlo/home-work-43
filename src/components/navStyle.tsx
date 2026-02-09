import type { NavLinkProps } from "react-router-dom"
import { useTheme } from "./ThemeContext"

export const useNavStyle = (): NavLinkProps["style"] => {
  const { theme } = useTheme()

  return ({ isActive }) => ({
    color: isActive
      ? theme === "light"
        ? "red"
        : "orange"
      : theme === "light"
      ? "blue"
      : "lightblue",
    backgroundColor: isActive
      ? theme === "light"
        ? "#eee"
        : "#444"
        : "transparent",
    textDecoration: isActive ? "underline" : "none",
    fontWeight: isActive ? "bold" : "normal",
    
  })
}