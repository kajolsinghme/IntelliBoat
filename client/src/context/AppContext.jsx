import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {dummyUserData} from "../assets/assets"

const AppContext = createContext()

export const AppContextProvider = ({children }) => {

    const navigate =  useNavigate()
    const [user, setUser] = useState(null);
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const fetchUser = async() => {
        setUser(dummyUserData)
    }

    useEffect(() => {})

    const value = {}

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)