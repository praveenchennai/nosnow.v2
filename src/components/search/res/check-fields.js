import React from 'react';
import {FormControlLabel, Switch, Grid} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {setNewConstruction, setGuestHouse, setWaterFrontView, setGolfAccess} from 'api/res'

const CheckFields = () => {
    const dispatch = useDispatch();
    const golfAccess = useSelector(state=>state.res.golfAccess);
    const waterFrontView = useSelector(state=>state.res.waterFrontView);
    const guestHouse = useSelector(state=>state.res.guestHouse);
    const newConstruction = useSelector(state=>state.res.newConstruction);



return ( 
    <React.Fragment>
        <Grid xs={12} container item spacing={1} justifyContent="space-between">
            <FormControlLabel control={<Switch checked={golfAccess|| false} onChange={()=>dispatch(setGolfAccess(!golfAccess))} />} label="Gulf Access"  />
            <FormControlLabel control={<Switch checked={waterFrontView} onChange={()=>dispatch(setWaterFrontView(!waterFrontView))} />} label="Water Front"  />
            <FormControlLabel control={<Switch checked={guestHouse} onChange={()=>dispatch(setGuestHouse(!guestHouse))} />} label="Guest House"  />
            <FormControlLabel control={<Switch checked={newConstruction} onChange={()=>dispatch(setNewConstruction(!newConstruction))} />} label="New Construction"  />
        </Grid>
    </React.Fragment>

)}

export default CheckFields;