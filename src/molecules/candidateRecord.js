import React, { useState, useEffect } from "react";

import { makeStyles, Grid, ListItem } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

import CandidateApps from '../molecules/candidateApps'

const useStyles = makeStyles({
    record: {
        width: '100%',
        color: '#444',
        backgroundColor: "#eee"
    }
})


const CandidateRecord = props => {
    const classes = useStyles()

    let { candidate } = props
    console.log("candidate", candidate)


    return (
          (candidate) ? (
          <>
              <ListItem className={classes.record} >
                    <CheckBoxOutlineBlankIcon /> &nbsp; &nbsp;
                    {candidate.name} &nbsp; &nbsp;
                    {(candidate && candidate.applications) ? candidate.applications[0].new_status.label : "None"} &nbsp; &nbsp;
                    {candidate.applications.length}
               </ListItem>

              <CandidateApps applications={(candidate.applications) ? candidate.applications : []} />
          </>
      ) : null
    )
}

export default CandidateRecord;
