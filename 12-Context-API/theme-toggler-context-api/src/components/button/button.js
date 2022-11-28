import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

export const Button = (props) => {

  const { theme } = useContext(ThemeContext)
  console.log(theme)

  return (
    <button {...props} style={{ color: theme.color, background: theme.background }}/>
  )
}
