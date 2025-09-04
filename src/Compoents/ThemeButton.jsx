import React from 'react'
import {Button} from "react-bootstrap"
const ThemeButton = ({theme, toggleTheme}) => {
  return (
      <Button
      className="themeBtn"
      variant={theme === "light" ? "dark" : "light"}
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </Button>
  )
}

export default ThemeButton
