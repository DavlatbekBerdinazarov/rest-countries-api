import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [ darkMode, setDarkMode ] = useState(true)

    return (
        <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
};

export const useDarkMode = () => {
    return useContext(DarkModeContext)
}
