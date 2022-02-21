import React from 'react';
import {Grid, TextField} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setKeyword, setMls} from 'api/lot';

const KeywordSearch = () => {
    const lkeyword = useSelector(state=>state.lot.lkeyword);
    const lmls = useSelector(state=>state.lot.lmls);
    const dispatch = useDispatch();

    const handleKeywordChange=(event)=>{
        dispatch(setKeyword(event.target.value))
    };
    const handleMlsChange=(event)=>{
        dispatch(setMls(event.target.value))
    };

return ( 
<Grid container display="flex" justify="space-between" spacing={2}>
    <Grid xs={6} item>
        <TextField 
            variant="outlined" 
            type="text" fullWidth 
            margin="normal" 
            label="Enter MLS#" 
            name="lmls" 
            onChange={handleMlsChange}
            value={lmls || ''} 
        />
    </Grid>
    <Grid xs={6} item>
        <TextField 
            variant="outlined" 
            type="text" fullWidth 
            margin="normal" 
            label="Enter Address" 
            name="lkeyword" 
            onChange={handleKeywordChange}
            value={lkeyword || ''} 
        />
    </Grid>
</Grid>
)}

export default KeywordSearch;