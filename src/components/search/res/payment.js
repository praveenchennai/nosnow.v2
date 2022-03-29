import React, {useState} from 'react';
import {Grid, Typography, Slider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setMonthlyPayment} from 'api/res';


const Payment = () => {
    const dispatch = useDispatch();
    const min = useSelector(state=>state.res.monthlyPayment.min);
    const max = useSelector(state=>state.res.monthlyPayment.max);
    const marks = useSelector(state=>state.res.monthlyPaymentOptions);

    const handleChange = (event, newValue) => {
        console.log(event, newValue)
        dispatch(setMonthlyPayment(newValue));
    };

return ( 
    <React.Fragment>
        <Grid sm={1} xs={12} item />
        <Grid sm={4} xs={12} item>
            <Typography variant="body1" component="h2"
                sx={{
                    marginBottom: "30px"
                }}
            >Monthly Payment</Typography>
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
                max={8}
                valueLabelDisplay="on"
                valueLabelFormat={value=>marks?.find(m=>m.value===value)?.label || '$2,000,000'}
                //marks={marks}
            />
        </Grid>
        <Grid sm={1} xs={12} item />
</React.Fragment>

)}

export default Payment;