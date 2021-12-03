import React from 'react';
import {Grid, Typography, TextField} from '@mui/material';
import { useSelector } from 'react-redux'


const Fee = () => {

    const recurringFee = useSelector(state=>state.res.recurringFee);
    const handleChange=()=>{};

return ( 
    <React.Fragment>
        <Grid sm={3} xs={6} item>
            <Typography variant="body1" component="h2">Recurring Fees</Typography>
            <TextField 
                variant="outlined" 
                type="text" fullWidth 
                margin="normal" 
                label="Min" 
                name="min" 
                onChange={handleChange}
                value={recurringFee?.min?recurringFee.min:''} 
            />
        </Grid>

        <Grid sm={3} xs={6} item>
            <Typography variant="body1" component="h2">Recurring Fees - Max</Typography>
            <TextField 
                variant="outlined" 
                type="text" fullWidth 
                margin="normal" 
                label="Max" 
                name="max" 
                onChange={handleChange}
                value={recurringFee?.max?recurringFee.max:''} 
            />
        </Grid>
    </React.Fragment>

)}

export default Fee;