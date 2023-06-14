import React, { createContext, useState, useEffect } from 'react'

export const InfoContext = createContext(null);

export const InfoContextProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [editName, setEditName] = useState([]);
    const [editFecha, setEditFecha] = useState([]);
    
    return (
    <InfoContext.Provider value ={[users, setUsers, tasks, setTasks, editName, setEditName, editFecha, setEditFecha]}>
        {children}
    </InfoContext.Provider>
)
}