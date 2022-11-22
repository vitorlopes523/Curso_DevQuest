import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { Button } from "../button/button"

export const ThemeTogglerButton = () => {
  const { themes } = useContext(ThemeContext)
  console.log('ThemeTogglerButton themes', themes)
  return (
    <div>
        <Button>Clique aqui</Button>
    </div>
  )
}