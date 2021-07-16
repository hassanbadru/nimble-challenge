import React, {useState, useContext, createContext} from 'react'
var all_candidates = require('../data/candidates.json')

const CandidateContext = createContext();


const CandidateProvider = props => {
    const [candidates, updateCandidates] = useState({})
    const [open_candidates, updateOpenList] = useState([])

    const loadData = async () => {
        updateCandidates(all_candidates)
    }

    let data = {
                candidates,
                open_candidates,
                loadData,
                updateCandidates
            }


    return <CandidateContext.Provider value={data} {...props} />
}

const useCandidate = () => {
    const context = useContext(CandidateContext)
    if (context === undefined ){
        throw new Error(`useUsers must be used within UsersProvider`)
    }
    return context
}

export { CandidateProvider, useCandidate }
