import React, { useState} from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import {Grid, Typography, Slider} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setBaths} from 'api/res';
const useStyles = makeStyles(listingCss());

const Baths = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const min = useSelector(state=>state.res.baths.min);
    const max = useSelector(state=>state.res.baths.max);

    const handleChange = (event, newValue) => {
      dispatch(setBaths(newValue));
    };

    const marks = [
        {
            value: 0,
            label: 'Any',
        },
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5+',
        },
    ];

return ( 
    <React.Fragment>
        <Grid sm={1} xs={12} item />
        <Grid sm={4} xs={12} item>
            <Typography variant="body1" component="h2">Baths</Typography>
            <Slider
                sx={{
                    color: "#56516b",
                    '& .MuiSlider-thumb': {
                        backgroundColor: '#FE8200'
                    }
                }}
                value={[min, max]}
                onChange={handleChange}
                valueLabelDisplay="auto"
                step={1}
                max={5}
                valueLabelDisplay="off"
                marks={marks}
            />
        </Grid>
        <Grid sm={1} xs={12} item />
    </React.Fragment>

)}

export default Baths;