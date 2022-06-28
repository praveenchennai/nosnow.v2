import React from 'react';
import { Grid, Typography, Slider, } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { setFee } from 'api/res';

const Fee = () => {
    const dispatch = useDispatch();
    const min = useSelector(state=>state.res.fee.min);
    const max = useSelector(state=>state.res.fee.max);
    const marks = useSelector(state=>state.res.feeOptions);
    const handleChange = (event, newValue) => {
        dispatch(setFee(newValue));
    };
return ( 
<React.Fragment>
        <Grid sm={1} xs={12} item />
        <Grid sm={4} xs={12} item>
            <Typography variant="body1" component="h2"
                sx={{
                    marginBottom: "30px"
                }}
            >Recurring Fees</Typography>
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
                max={12}
                valueLabelDisplay="on"
                valueLabelFormat={value=>marks?.find(m=>m.value===value)?.label || '$1,000'}
                //marks={marks}
            />
        </Grid>
        <Grid sm={1} xs={12} item />
    </React.Fragment>

)}

export default Fee;