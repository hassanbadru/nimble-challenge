import React, {useState, useContext, createContext} from 'react'
var all_candidates = require('../data/candidates.json')

const CandidateContext = createContext();


const CandidateProvider = props => {
    const [candidates, updateCandidates] = useState([])
    const [open_candidates, updateOpenList] = useState([])

    const loadData = async () => {
        updateCandidates((all_candidates && all_candidates.results) ? all_candidates.results : [])
    }

    const searchCandidate = search_term => {
        let searched_candidates = []
        loadData()
        if (candidates && search_term){
            searched_candidates = candidates.filter(c => c.name.toLowerCase().includes(search_term.toLowerCase()))
            updateCandidates(searched_candidates)
        } else {
            updateCandidates(candidates)
        }

    }

    const addToOpenList = candidate => {
        let new_open_candidates = (open_candidates) ? open_candidates : []
        if (!new_open_candidates.includes(candidate.id)){
            new_open_candidates.push(candidate.id)
        }
        updateOpenList(new_open_candidates)
    }

    const removeFromList = candidate => {
        let new_open_candidates = (open_candidates) ? open_candidates : []
        if (new_open_candidates.includes(candidate.id)){
            const index = new_open_candidates.indexOf(candidate.id);
            if (index > -1) {
              new_open_candidates.splice(index, 1);
            }
        }
        updateOpenList(new_open_candidates)
    }

    let data = {
                candidates,
                open_candidates,
                loadData,
                updateCandidates,
                addToOpenList,
                removeFromList,
                searchCandidate
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
