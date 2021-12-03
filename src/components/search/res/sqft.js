import React from 'react';
import {Grid, Typography, TextField} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setSqft } from 'api/res'

const Sqft = () => {
    const dispatch = useDispatch();
    const sqft = useSelector(state=>state.res.sqft);
    const handleChangeMin=(event)=>{
        dispatch(setSqft({min: event.target.value, max: sqft.max}))
    };
    const handleChangeMax=(event)=>{
        dispatch(setSqft({min: sqft.min, max: event.target.value}))
    };

return ( 
    <React.Fragment>
        <Grid sm={3} xs={6} item>
            <Typography variant="body1" component="h2">Sq. Ft - Min</Typography>
            <TextField 
                variant="outlined" 
                type="number" fullWidth 
                margin="normal" 
                label="Min" 
                name="min" 
                onChange={handleChangeMin}
                value={sqft?.min || ''} 
            />
        </Grid>
        <Grid sm={3} xs={6} item>
            <Typography variant="body1" component="h2">Sq. Ft - Max</Typography>
            <TextField 
                variant="outlined" 
                type="number" fullWidth 
                margin="normal" 
                label="Max" 
                name="max" 
                onChange={handleChangeMax}
                value={sqft?.max || ''} 
            />
        </Grid>
    </React.Fragment>
)}

export default Sqft;