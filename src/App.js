import React, { useState, useEffect } from "react";
import CandidatesPage from "./pages/candidatesPage"
import { useCandidate } from './contexts/candidatecontext'


const App = props => {

 let { loadData } = useCandidate()

 useEffect(()=> {
     loadData()
  }, [])

  return <CandidatesPage />
}

export default App;
