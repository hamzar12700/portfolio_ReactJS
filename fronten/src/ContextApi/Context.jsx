import { createContext, useState } from "react";



export const GlobalContext = createContext();



export function GlobalProvider({ children }) {
    const [theme, setTheme] = useState(false)
    return <GlobalContext.Provider value={{ theme, setTheme }}>
        {children}
    </GlobalContext.Provider>
}