import React from 'react';
import { useSelector } from 'react-redux'
import {FormControlLabel, Switch, Grid} from '@mui/material';




const CheckFields = () => {
    const golfAccess = useSelector(state=>state.lot.golfAccess);
    const waterFrontView = useSelector(state=>state.lot.waterFrontView);

    const handleChange=()=>{};

return ( 
    <React.Fragment>
        <Grid xs={12} container item spacing={1} justifyContent="space-between">
        <FormControlLabel control={<Switch checked={golfAccess} onChange={handleChange} />} label="Gulf Access"  />
        <FormControlLabel control={<Switch checked={waterFrontView} onChange={handleChange} />} label="Water Front"  />
        </Grid>
    </React.Fragment>

)}

export default CheckFields;