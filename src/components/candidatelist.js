import React, { useState, useEffect } from "react";
import { makeStyles, Grid, List, ListItem, Typography } from '@material-ui/core'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import CandidateRecord from '../molecules/candidateRecord'

import { useCandidate } from '../contexts/candidatecontext'


const useStyles = makeStyles({
    body: {
        margin: 0
    },
    item: {
        width: '30%',
    }
})


const CandidateList = (props) => {
    let el = null
    const classes = useStyles()
    const [allselected, updateAllSelected] = useState(false)
    let { candidates, loadData, updateCandidates } = useCandidate()
    let {openAppModal} = props

    return (
        <List>
            <ListItem style={{backgroundColor: '#ccc', fontWeight: "bold"}}>
                  <Grid style={{width: '20%'}}>
                    {(allselected) ? <CheckBoxIcon style={{cursor: 'pointer'}} onClick={()=> updateAllSelected(false)} /> :  <CheckBoxOutlineBlankIcon style={{cursor: 'pointer'}} onClick={()=> updateAllSelected(true)} />}
                    &nbsp; <KeyboardArrowDownIcon style={{fontSize: 15}} />
                  </Grid>
                  <Grid className={classes.item}>
                    Candidate Name &nbsp; <KeyboardArrowDownIcon style={{fontSize: 15}} />
                  </Grid>
                  <Grid className={classes.item}>
                    Status
                  </Grid>
                  <Grid className={classes.item}>
                    # Apps &nbsp; <KeyboardArrowDownIcon style={{fontSize: 15}} />
                  </Grid>
                  <Grid className={classes.item}>
                    Last Action &nbsp; <KeyboardArrowDownIcon style={{fontSize: 15}} />
                  </Grid>
             </ListItem>
            {(candidates) ? candidates.map((candidate, i) => <CandidateRecord key={i} candidate={candidate} openAppModal={openAppModal} allselected={allselected} updateAllSelected={updateAllSelected} />) : "None"}
        </List>
    )
}




export default CandidateList;
