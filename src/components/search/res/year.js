import React from 'react';
import {Grid, Typography, TextField} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setYearBuilt } from 'api/res'
import moment from 'moment';


const Year = () => {
    const yearBuilt = useSelector(state=>state.res.yearBuilt);
    const dispatch = useDispatch();
    const handleChangeMin=(event)=>{
        var year = moment().year()
        if(event.target.value<year+1){
            dispatch(setYearBuilt({min: event.target.value, max: yearBuilt.max}))
        }
    };
    const handleChangeMax=(event)=>{
        var year = moment().year()
        if(event.target.value<year+1){
            dispatch(setYearBuilt({min: yearBuilt.min, max: event.target.value}))
        }
    };

return ( 
    <React.Fragment>
        <Grid sm={6} xs={12} container item spacing={1}>
            <Grid xs={12} item>
                <Typography variant="body1" component="h2" >Year built</Typography>
            </Grid>
            <Grid xs={6} item >
                <TextField 
                    variant="outlined" 
                    type="number" fullWidth 
                    margin="normal" 
                    label="Min" 
                    name="min" 
                    onChange={handleChangeMin}
                    value={yearBuilt?.min || ''} 
                />
            </Grid>

            <Grid xs={6} item>
                <TextField 
                    variant="outlined" 
                    type="number" fullWidth 
                    margin="normal" 
                    label="Max" 
                    name="max" 
                    onChange={handleChangeMax}
                    value={yearBuilt?.max || ''} 
                />
            </Grid>
        </Grid>
    </React.Fragment>

)}

export default Year;