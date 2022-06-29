import React from 'react';
import {Grid, Typography, Slider} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setPriceRange} from 'api/res';

const PriceRange = () => {
    const dispatch = useDispatch();
    const min = useSelector(state=>state.res.priceRange.min);
    const max = useSelector(state=>state.res.priceRange.max);
    const marks = useSelector(state=>state.res.priceRangeOptions);
    const pMin = useSelector(state=>state.res.monthlyPayment.min);
    const pMax = useSelector(state=>state.res.monthlyPayment.max);
    const handleChange = (event, newValue) => {
        dispatch(setPriceRange(newValue));
    };

    const priceRange = () =>{
        var minRange = marks?.find(m=>m.value===min)?.v;
        var maxRange = marks?.find(m=>m.value===max)?.v;
        return `${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(minRange) || 0}${`   -   `}${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(maxRange) || 0}`
    }

    const changeSlide = () =>{
        if(pMin!==0 || pMax!==36){
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
            >Price Range</Typography>
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
                max={26}
                valueLabelDisplay="on"
                valueLabelFormat={value=>marks?.find(m=>m.value===value)?.label || '$30,000,000'}
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

export default PriceRange;