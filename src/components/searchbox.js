import React, { useState, useEffect } from "react";

import { makeStyles, Grid, Input, Typography } from '@material-ui/core'

import Search from '../molecules/search'


const useStyles = makeStyles({
    body: {
        margin: 0
    }
})


const SearchBox = (props) => {
    const classes = useStyles()

    return <Search />
}




export default SearchBox;
