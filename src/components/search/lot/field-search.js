import React, { useContext} from 'react';
import {Grid, TextField} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'

const FieldSearch = () => {
    const dispatch = useDispatch();
    const city = useSelector(state=>state.res.city);
    const cityOptions = useSelector(state=>state.res.cityOptions);
    const community = useSelector(state=>state.res.community);

return ( 
    <React.Fragment>
        <Grid container item sm={4} xs={12} item>
            <TextField 
                variant="outlined" 
                type="text" fullWidth 
                margin="normal" 
                label="City Search" 
                name="searchLot.keyword" 
                value={city} 
            />
        </Grid>
        <Grid container item  sm={4} xs={12} item>
            <TextField 
                variant="outlined" 
                type="text" fullWidth 
                margin="normal" 
                label="Community Search" 
                name="searchLot.keyword" 
                value={community} 
            />
        </Grid>
        <Grid container item  sm={4} xs={12} item>
            <TextField 
                variant="outlined" 
                type="text" fullWidth 
                margin="normal" 
                label="Sub Condo Search" 
                name="searchLot.keyword" 
                value={cityOptions} 
            />
        </Grid>
    </React.Fragment>

)}

export default FieldSearch;