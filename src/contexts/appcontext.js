import React, { useContext, createContext} from 'react'

const AppContext = createContext();


const AppProvider = props => {

    let data = {}
    return <AppContext.Provider value={data} {...props} />
}

const useApp = () => {
    const context = useContext(AppContext)
    if (context === undefined ){
        throw new Error(`useApp must be used within AppProvider`)
    }
    return context
}

export {AppProvider, useApp }
