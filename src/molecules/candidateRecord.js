import React, { useState } from "react";
import moment from 'moment'
import { makeStyles, Grid, ListItem } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import CandidateApps from './candidateApps'
import {colorMapping} from '../utils/enums'
import { useCandidate } from '../contexts/candidatecontext'

const useStyles = makeStyles({
    record: {
        width: '100%',
        color: '#444',
        backgroundColor: "#eee"
    },
    item: {
        width: '30%'
    }
})


const CandidateRecord = props => {
    const classes = useStyles()
    const [is_open, openCheck] = useState(false)
    const [selected, updateSelect] = useState(false)
    let { open_candidates, addToOpenList, removeFromList } = useCandidate()
    let { candidate, openAppModal, allselected, updateAllSelected } = props

    const updateOpenView = (candidate) => {
        addToOpenList(candidate)
        openCheck(open_candidates.includes(candidate.id))
    }

    const updateCloseView = candidate => {
        removeFromList(candidate)
        openCheck(open_candidates.includes(candidate.id))
    }

    var status_color = (candidate && candidate.applications) ? colorMapping[String(candidate.applications[0].new_status.color)] : colorMapping["2"]


    return (
          (candidate) ? (
          <>
              <ListItem className={classes.record} >
                    <Grid style={{width: '10%'}}>
                        {
                            (selected || allselected) ? (
                                <CheckBoxIcon style={{cursor: 'pointer'}} onClick={()=> {
                                updateSelect(false)
                                updateAllSelected(false)}} />
                            ) :  (
                                <CheckBoxOutlineBlankIcon style={{cursor: 'pointer'}} onClick={()=> updateSelect(true)} />
                            )
                        }
                    </Grid >
                    <Grid className={classes.item}>
                        {candidate.name}
                    </Grid>
                    <Grid className={classes.item}>
                        <FiberManualRecordIcon style={{color: status_color, fontSize: 10}} /> &nbsp;
                        {(candidate && candidate.applications) ? candidate.applications[0].new_status.label : "None"}
                    </Grid>
                    <Grid className={classes.item}>
                        {candidate.applications.length}
                    </Grid>
                    <Grid className={classes.item}>
                        {(candidate && candidate.applications) ? moment(candidate.applications[0].updated).fromNow() : null }
                    </Grid>

                    {(candidate && candidate.applications && is_open) ? <RemoveCircleIcon style={{cursor: 'pointer', color: "#ccc"}} onClick={() => updateCloseView(candidate)} /> : <AddCircleIcon style={{cursor: 'pointer', color: "#ccc"}} onClick={() => updateOpenView(candidate)} />}
               </ListItem>

              {(candidate && candidate.applications && is_open) ? <CandidateApps applications={(candidate.applications) ? candidate.applications : []} openAppModal={openAppModal} /> : null }
          </>
      ) : null
    )
}

export default CandidateRecord;
