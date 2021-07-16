import React, { useState, useEffect } from "react";
import { makeStyles, Grid } from '@material-ui/core'

import { useCandidate } from '../contexts/candidatecontext'
import SearchBox from '../components/searchbox'
import CandidateList from '../components/candidatelist'
import ApplicationModal from '../components/appModal'

const useStyles = makeStyles(theme => ({
        body: {
            padding: '1%'
        }
    })
)

const CandidatesPage = props => {
  const classes = useStyles()
  const [view_application, toggleApplication] = useState(false)
  let { candidates } = useCandidate()

  const openAppModal = application => {
      toggleApplication(application)
  }

  const closeAppModal = () => {
      toggleApplication(false)
  }


  useEffect(()=> {
      document.title = 'Nimble | Candidates Page'
   }, [])

  return (
      <>
        <Grid container direction="column" className={classes.body}>
            <Grid item style={{color: '#888'}}>
                {(candidates && candidates.length) ? (candidates.length) : "0"} Candidates
            </Grid>
            <Grid item>
            <SearchBox/>
            <CandidateList openAppModal={openAppModal} />
            </Grid>
        </Grid>

        <ApplicationModal view_application={view_application} closeAppModal={closeAppModal} />

     </>
  )
}

export default CandidatesPage;
