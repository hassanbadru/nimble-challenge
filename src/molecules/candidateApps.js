import React, { useState, useEffect } from "react";

import { makeStyles, Grid, List, ListItem, Badge } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import LabelIcon from '@material-ui/icons/Label';
import {colorMapping} from '../utils/enums'

const useStyles = makeStyles({
    apps: {
        width: '100%',
        color: '#444'
    },
    appitem: {
        width: '30%'
    }
})


const CandidateApps = props => {
    const classes = useStyles()

    var { applications, openAppModal } = props

    return (
      <Grid className={classes.apps} >
        <List>
            <ListItem style={{fontWeight: "bold"}}>
                <Grid className={classes.appitem}>
                  Role Title
                </Grid>
                <Grid className={classes.appitem}>
                  Status
                </Grid>
             </ListItem>
            {
                (applications) ? (
                    applications.map((application, i) => {
                        return (
                            <ListItem key={i} onClick={() => openAppModal(application)} style={{cursor: 'pointer'}}>
                                <Grid className={classes.appitem}>
                                    {application.role.title}
                                </Grid>
                                <Grid className={classes.appitem}>
                                    <LabelIcon style={{color: (application && application.role) ? colorMapping[application.role.active_status] : colorMapping["2"]}} /> &nbsp; {application.new_status.label}
                                </Grid>
                            </ListItem>
                        )
                    })
                ) : null
            }
        </List>
      </Grid>
    )
}

export default CandidateApps;
