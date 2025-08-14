import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("usuario");

        if (savedToken) {
            setToken(savedToken);
        }
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    return (
        <AppContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </AppContext.Provider>
    );

};


export const useAppContext = () => useContext(AppContext);