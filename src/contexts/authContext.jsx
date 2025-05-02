import { createContext, useState } from "react";

const authContext = createContext();
export default authContext;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    return (
        <authContext.Provider value={{ user, setUser }}>
            {children}
        </authContext.Provider>
    )
}