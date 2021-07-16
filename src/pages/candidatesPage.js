import React, { useState, useEffect } from "react";
import { makeStyles, Grid, Dialog } from '@material-ui/core'

import { useCandidate } from '../contexts/candidatecontext'

const useStyles = makeStyles(theme => ({
        body: {
            marginTop: '2%',
            padding: '4%',
        }
    })
)

const CandidatesPage = props => {
  const classes = useStyles()
  const [view_application, toggleApplication] = useState(false)
  let { candidates, open_candidates, loadData, updateCandidates } = useCandidate()


  useEffect(()=> {
      document.title = 'Nimble | Candidates Page'
   }, [])

   console.log("candidates", candidates.results)


  return (
      <>
        <Grid className={classes.body}>
            {(candidates && candidates.results) ? (candidates.results.length) : "None"}
        </Grid>

        <ApplicationModal view_application={view_application} toggleApplication={toggleApplication} />

     </>
  )
}


const ApplicationModal = props => {

    let { view_application, toggleApplication } = props

    return (
        <Dialog fullWidth open={view_application} onClose={() => toggleApplication(false)}>
          <Grid style={{margin: '2%'}}>
          </Grid>
        </Dialog>
    )
}

export default CandidatesPage;
