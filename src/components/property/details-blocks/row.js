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
                    fontWeight: 'bold',
                    flexGrow: 1
                }}
            >    
                {label}
            </Typography>
            <Typography align="right"

                sx={{
                    fontSize: "12px", 
                    textAlign: "justify",
                    lineHeight: "20px",
                    margin: "5px",
                    fontWeight: bold ? 'bold' : '500'
                }}
            >    
                {value}
            </Typography>
        </Grid>
    )
}

export default Row;