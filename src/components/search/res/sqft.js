import React from 'react';
import { Grid, Typography, Slider, } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setSqft } from 'api/res'

const Sqft = () => {
    const dispatch = useDispatch();
    const min = useSelector(state=>state.res.sqft.min);
    const max = useSelector(state=>state.res.sqft.max);
    const marks = useSelector(state=>state.res.sqftOptions);
    const handleChange = (event, newValue) => {
        dispatch(setSqft(newValue));
    };

return ( 
    <React.Fragment>
        <Grid sm={1} xs={12} item />
        <Grid sm={4} xs={12} item>
            <Typography variant="body1" component="h2"
                sx={{
                    marginBottom: "30px"
                }}
            >Sqft</Typography>
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
                max={15}
                valueLabelDisplay="on"
                valueLabelFormat={value=>marks?.find(m=>m.value===value)?.label || '7500'}
                //marks={marks}
            />
        </Grid>
        <Grid sm={1} xs={12} item />
    </React.Fragment>
)}

export default Sqft;