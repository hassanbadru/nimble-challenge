import React, { useState, useEffect } from "react";
import { makeStyles, Grid, List, ListItem, Typography } from '@material-ui/core'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

import CandidateRecord from '../molecules/candidateRecord'

import { useCandidate } from '../contexts/candidatecontext'


const useStyles = makeStyles({
    body: {
        margin: 0
    }
})


const CandidateList = (props) => {
    let el = null
    const classes = useStyles()
    let { candidates, loadData, updateCandidates } = useCandidate()
    let {openAppModal} = props

    return (
        <List>
            <ListItem style={{backgroundColor: '#eee', fontWeight: "bold"}}>
                  <CheckBoxOutlineBlankIcon /> &nbsp; &nbsp;
                  Candidate Name &nbsp; &nbsp;
                  Status &nbsp; &nbsp;
                  # Apps &nbsp; &nbsp;
                  Last Action
             </ListItem>
            {(candidates) ? candidates.map((candidate, i) => <CandidateRecord key={i} candidate={candidate} openAppModal={openAppModal} />) : "None"}
        </List>
    )
}




export default CandidateList;
