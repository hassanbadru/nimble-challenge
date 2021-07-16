import React, { useState, useEffect } from "react";

import { makeStyles, Grid, List, ListItem } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    apps: {
        width: '100%',
        color: '#444'
    }
})


const CandidateApps = props => {
    const classes = useStyles()

    let { applications } = props

    return (
      <Grid className={classes.apps} >
        <List>
            {
                (applications) ? (
                    applications.map((application, i) => {
                        return (
                            <ListItem key={i}>
                                &nbsp; &nbsp; {application.role.title} &nbsp; &nbsp;
                                &nbsp; &nbsp; {application.new_status.label}
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
