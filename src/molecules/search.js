import React, { useState, useEffect } from "react";

import { makeStyles, Grid, Card, Input, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    search: {
        margin: '1%',
    },
    searchfield: {
        width: '50%',
    }
})


const Search = props => {
    const classes = useStyles()

    let placeholder = 'Search'

    return (
      <Grid item className={classes.search}>
         <Input placeholder={placeholder} className={classes.searchfield} disableUnderline autoFocus />
         <IconButton color="primary" style={{backgroundColor: 'green', color: "#eee", borderRadius: "10%"}}>
             <SearchIcon />
         </IconButton>
      </Grid>
    )
}

export default Search;
