import type { NavLinkProps } from "react-router-dom"

export const navStyle: NavLinkProps["style"] = ({ isActive }) => ({
  color: isActive ? "red" : "blue",
  textDecoration: isActive ? "underline" : "none",
  fontWeight: isActive ? "bold" : "normal",
})