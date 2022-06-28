import React from 'react';
import {Grid, TextField} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setKeyword, setMls} from 'api/lot';

const KeywordSearch = () => {
    console.log('reached')
    const lkeyword = useSelector(state=>state.lot.lkeyword);
    const dispatch = useDispatch();

    const handleMlsChange=(event)=>{
        dispatch(setKeyword(event.target.value))
    };

return ( 
<Grid container display="flex" justify="space-between" spacing={2}>
    <Grid xs={12} item>
        <TextField 
            variant="outlined" 
            type="text" fullWidth 
            margin="normal" 
            label="Enter MLS# or Address" 
            name="lkeyword" 
            onChange={handleMlsChange}
            value={lkeyword || ''} 
        />
    </Grid>
</Grid>
)}

export default KeywordSearch;