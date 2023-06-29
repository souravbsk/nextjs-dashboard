"use client"
import React, { createContext, useState } from 'react';
export const  ToggleContext = createContext(null)
const ToggleProvider = ({children}) => {

const [isShow,setShow] = useState(false)
const toggleValue = {
    isShow,setShow
}
    return (
        <ToggleContext.Provider value={toggleValue}>
            {children}
        </ToggleContext.Provider>
    );
};

export default ToggleProvider;