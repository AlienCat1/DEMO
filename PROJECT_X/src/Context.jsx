import React, { useContext, useReducer } from "react"
import reducer from "./reducer"

const AppContext = React.createContext()

const initialState = {
    top:'',
    bottom: '',
    image: '',
}

const AppProvider = ({children}) => {
    const[state, dispatch] = useReducer(reducer, initialState)

    const updateHome = () => {
        return dispatch({
            type: 'UPDATE_HOME',
        payload: {
            top:'A NEW BEGINNING',
            bottom: 'With React, Developing is super fun',
            image: './images/homepage.png'
        }
        })
    }
    const updateAbout = () => {
        return dispatch({
            type: 'UPDATE_ABOUT',
            payload: {
                top:'THIS IS A DEMO PROJECT',
                bottom: 'Designed to get a hands-on experience of React',
                image: './images/aboutpage.jpg'
            }
        })
    }

    return (
        <AppContext.Provider value = {{...state, updateHome, updateAbout}}>{children}</AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}