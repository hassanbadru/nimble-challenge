import React, { useState, useEffect } from "react";

import { makeStyles, Grid, Card, Input, TextField, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import { useCandidate } from '../contexts/candidatecontext'

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
    let { searchCandidate, loadData} = useCandidate()
    const handleSearch = e => {
        (e.target.value) ? searchCandidate(e.target.value) : loadData()
    }

    let placeholder = 'Search'

    return (
      <Grid item className={classes.search}>
         <Input placeholder={placeholder} className={classes.searchfield} disableUnderline autoFocus onChange={handleSearch}  variant="outlined" />
         <IconButton color="primary" style={{backgroundColor: 'green', color: "#eee", borderRadius: "10%"}}>
             <SearchIcon />
         </IconButton>
      </Grid>
    )
}

export default Search;
