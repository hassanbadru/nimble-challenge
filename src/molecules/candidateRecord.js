import React, { useState, useEffect } from "react";
import moment from 'moment'
import { makeStyles, Grid, ListItem } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import LabelIcon from '@material-ui/icons/Label';

import CandidateApps from './candidateApps'
import {colorMapping} from '../utils/enums'
import { useCandidate } from '../contexts/candidatecontext'

const useStyles = makeStyles({
    record: {
        width: '100%',
        color: '#444',
        backgroundColor: "#eee"
    }
})


const CandidateRecord = props => {
    const classes = useStyles()
    const [is_open, openCheck] = useState(false)
    let { open_candidates, addToOpenList, removeFromList } = useCandidate()
    let { candidate, openAppModal } = props

    const updateOpenView = (candidate) => {
        addToOpenList(candidate)
        openCheck(open_candidates.includes(candidate.id))
    }

    const updateCloseView = candidate => {
        removeFromList(candidate)
        openCheck(open_candidates.includes(candidate.id))
    }

    var status_color = (candidate && candidate.applications) ? colorMapping[String(candidate.applications[0].role.active_status)] : colorMapping["2"]


    return (
          (candidate) ? (
          <>
              <ListItem className={classes.record} >
                    <CheckBoxOutlineBlankIcon style={{cursor: 'pointer'}} /> &nbsp; &nbsp;
                    {candidate.name} &nbsp; &nbsp;
                    <LabelIcon style={{color: status_color}} /> &nbsp;
                    {(candidate && candidate.applications) ? candidate.applications[0].new_status.label : "None"} &nbsp; &nbsp;
                    {candidate.applications.length} &nbsp; &nbsp;
                    {(candidate && candidate.applications) ? moment(candidate.applications[0].updated).fromNow() : null } &nbsp; &nbsp;
                    {(candidate && candidate.applications && is_open) ? <RemoveCircleIcon style={{cursor: 'pointer', color: "#ccc"}} onClick={() => updateCloseView(candidate)} /> : <AddCircleIcon style={{cursor: 'pointer', color: "#ccc"}} onClick={() => updateOpenView(candidate)} />}
               </ListItem>

              {(candidate && candidate.applications && is_open) ? <CandidateApps applications={(candidate.applications) ? candidate.applications : []} openAppModal={openAppModal} /> : null }
          </>
      ) : null
    )
}

export default CandidateRecord;
