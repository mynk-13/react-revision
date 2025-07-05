import React, { useContext } from 'react'
import ThemeContext from './theme-context'

const ThemeSwitcher = () => {

   const {isDarkMode, toggleTheme} = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>Switch to {isDarkMode ? "Light" : "Dark"} mode </button>
  )
}

export default ThemeSwitcher