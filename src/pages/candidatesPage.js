import React, { useState, useEffect } from "react";
import { makeStyles, Grid, Dialog, List } from '@material-ui/core'

import { useCandidate } from '../contexts/candidatecontext'
import SearchBox from '../components/searchbox'
import CandidateList from '../components/candidatelist'

const useStyles = makeStyles(theme => ({
        body: {
            padding: '1%'
        }
    })
)

const CandidatesPage = props => {
  const classes = useStyles()
  const [view_application, toggleApplication] = useState(false)
  let { candidates, loadData, updateCandidates } = useCandidate()

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


const ApplicationModal = props => {

    let { view_application, closeAppModal } = props

    return (
        <Dialog fullWidth open={(view_application) ? true : false} onClose={() => closeAppModal()}>
          {
              (view_application) ? ( <Grid style={{margin: '2%'}}>
                {view_application.id} &nbsp; &nbsp;
                {view_application.role.id} &nbsp; &nbsp;
                {view_application.role.title} &nbsp; &nbsp;
                {view_application.role.jobboard_title} &nbsp; &nbsp;
                {view_application.new_status.label} &nbsp; &nbsp;
              </Grid> ) : null
          }
        </Dialog>
    )
}

export default CandidatesPage;
