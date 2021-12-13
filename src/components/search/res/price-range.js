import React from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import {Grid, Typography, Slider} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setPriceRange} from 'api/res';

const useStyles = makeStyles(listingCss());

const PriceRange = () => {
    const dispatch = useDispatch();
    const min = useSelector(state=>state.res.priceRange.min);
    const max = useSelector(state=>state.res.priceRange.max);
    const marks = useSelector(state=>state.res.priceRangeOptions);
    const handleChange = (event, newValue) => {
        dispatch(setPriceRange(newValue));
    };

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
                value={[min, max]}
                onChange={handleChange}
                step={1}
                max={17}
                valueLabelDisplay="on"
                valueLabelFormat={value=>marks?.find(m=>m.value===value)?.label || '$2,000,000'}
                //marks={marks}
            />
        </Grid>
        <Grid sm={1} xs={12} item />
    </React.Fragment>

)}

export default PriceRange;