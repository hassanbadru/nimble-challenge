import React, { useState, useEffect } from "react";
import { makeStyles, Grid, List, ListItem, Typography } from '@material-ui/core'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

import CandidateRecord from '../molecules/candidateRecord'

import { useCandidate } from '../contexts/candidatecontext'


const useStyles = makeStyles({
    body: {
        margin: 0
    },
    item: {
        width: '30%'
    }
})


const CandidateList = (props) => {
    let el = null
    const classes = useStyles()
    let { candidates, loadData, updateCandidates } = useCandidate()
    let {openAppModal} = props

    return (
        <List>
            <ListItem style={{backgroundColor: '#ccc', fontWeight: "bold"}}>
                  <Grid className={classes.item}>
                    <CheckBoxOutlineBlankIcon />
                  </Grid>
                  <Grid className={classes.item}>
                    Candidate Name
                  </Grid>
                  <Grid className={classes.item}>
                    Status
                  </Grid>
                  <Grid className={classes.item}>
                    # Apps
                  </Grid>
                  <Grid className={classes.item}>
                    Last Action
                  </Grid>
             </ListItem>
            {(candidates) ? candidates.map((candidate, i) => <CandidateRecord key={i} candidate={candidate} openAppModal={openAppModal} />) : "None"}
        </List>
    )
}




export default CandidateList;
