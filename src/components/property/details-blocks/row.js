import React, {useEffect, useState} from 'react';
import {Grid, Typography} from '@mui/material';

const Row = (props) =>{
    const {label, value, bold} = props.value;
    return (
        <Grid container item md={12} alignItems="center" justifyContent="space-between"
            sx={{
                padding: "5px"
            }}
        > 
            <Typography noWrap
                sx={{
                    fontSize: "12px", 
                    fontWeight: bold ? 'bold' : '500',
                    flexGrow: 1
                }}
            >    
                {label}
            </Typography>
            <Typography noWrap align="right"
                sx={{
                    fontSize: "12px", 
                    flexGrow: 1,
                    fontWeight: bold ? 'bold' : '500'
                }}
            >    
                {value}
            </Typography>
        </Grid>
    )
}

export default Row;