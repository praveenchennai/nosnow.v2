import React from 'react';
import { Grid, Typography, Slider } from '@mui/material';
import { useSelector } from 'react-redux'

const Fee = () => {
    const min = useSelector(state=>state.lot.totalFee.min);
    const max = useSelector(state=>state.lot.totalFee.max);
    const marks = useSelector(state=>state.lot.totalFeeOptions);
    const handleChange=()=>{};

return ( 
    <React.Fragment>
        <Grid sm={1} xs={12} item />
        <Grid sm={4} xs={12} item>
            <Typography variant="body1" component="h2"
                sx={{
                    marginBottom: "30px"
                }}
            >Total Annual Fees</Typography>
            <Slider
                // sx={{
                //     color: "#56516b",
                //     '& .MuiSlider-thumb': {
                //         backgroundColor: '#FE8200'
                //     }
                // }}
                disabled
                value={[min, max]}
                onChange={handleChange}
                step={1}
                max={8}
                valueLabelDisplay="off"
                valueLabelFormat={value=>marks?.find(m=>m.value===value)?.label || '$2,000,000'}
                //marks={marks}
            />
        </Grid>
        <Grid sm={1} xs={12} item />
    </React.Fragment>

)}

export default Fee;