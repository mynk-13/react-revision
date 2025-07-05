import { createContext, useEffect, useState } from "react";


const ThemeContext = createContext();

export const ThemeProvider=({children})=>{

    const [isDarkMode, setIsDarkMode]=useState(false);
    console.log("Darkmode" , isDarkMode);
    const  toggleTheme=()=> setIsDarkMode((prev)=>!prev);

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", 
            isDarkMode ?  "dark" :"light"
        );
    },[isDarkMode]);

    return <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContext;