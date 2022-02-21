import React from 'react';
import {Grid, Typography, Slider} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setYearBuilt } from 'api/res'

const Year = () => {
    const dispatch = useDispatch();
    const min = useSelector(state=>state.res.yearBuilt.min);
    const max = useSelector(state=>state.res.yearBuilt.max);
    const marks = useSelector(state=>state.res.yearBuiltOptions);
    const handleChange = (event, newValue) => {
        dispatch(setYearBuilt(newValue));
    };

return ( 
    <React.Fragment>
        <Grid sm={1} xs={12} item />
        <Grid sm={4} xs={12} item>
            <Typography variant="body1" component="h2"
                sx={{
                    marginBottom: "30px"
                }}
            >Year Built</Typography>
            <Slider
                sx={{
                    color: "#56516b",
                    '& .MuiSlider-thumb': {
                        backgroundColor: '#FE8200'
                    }
                }}
                value={[min, max]}
                onChange={handleChange}
                step={1}
                max={23}
                valueLabelDisplay="on"
                valueLabelFormat={value=>marks?.find(m=>m.value===value)?.label || '7500'}
                //marks={marks}
            />
        </Grid>
        <Grid sm={1} xs={12} item />
    </React.Fragment>

)}

export default Year;