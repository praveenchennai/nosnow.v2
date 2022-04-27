import React, {useState} from 'react';
import {Grid, Typography, Slider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setMonthlyPayment} from 'api/res';

const Payment = () => {
    const dispatch = useDispatch();
    const min = useSelector(state=>state.res.monthlyPayment.min);
    const max = useSelector(state=>state.res.monthlyPayment.max);
    const marks = useSelector(state=>state.res.monthlyPaymentOptions);
    const pMin = useSelector(state=>state.res.priceRange.min);
    const pMax = useSelector(state=>state.res.priceRange.max);

    const handleChange = (event, newValue) => {
        dispatch(setMonthlyPayment(newValue));
    };

    const priceRange = () =>{
        var minRange = marks?.find(m=>m.value===min)?.v;
        var maxRange = marks?.find(m=>m.value===max)?.v;
        return `${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(minRange)*296.4863563508763) || 0}${`   -   `}${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(maxRange*296.4863563508763) || 0}`
    }

    const changeSlide = () =>{
        if(pMin!==0 || pMax!==26){
            return true
        } else {
            return false
        }
    }

return ( 
    <React.Fragment>
        <Grid sm={1} xs={12} item />
        <Grid sm={4} xs={12} item>
            <Typography variant="body1" component="h2"
                sx={{
                    marginBottom: "30px"
                }}
            >Monthly Payments</Typography>
            <Slider
                sx={{
                    color: "#56516b",
                    '& .MuiSlider-thumb': {
                        backgroundColor: '#FE8200'
                    }
                }}
                disabled={changeSlide()}
                value={[min, max]}
                onChange={handleChange}
                step={1}
                max={36}
                valueLabelDisplay="on"
                valueLabelFormat={value=>marks?.find(m=>m.value===value)?.label || '$2,000,000'}
                //marks={marks}
            />
            <Typography variant="body1" component="h2"
                sx={{
                    marginBottom: "30px",
                    fontSize: "10px",
                    fontWeight: "600",
                    letterSpacing: "1.5px"
                }}
            >Price Range: {priceRange()}</Typography>
        </Grid>
        <Grid sm={1} xs={12} item />
</React.Fragment>

)}

export default Payment;