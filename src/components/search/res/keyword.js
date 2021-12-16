import React from 'react';
import {Grid, TextField, } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setKeyword, setMls} from 'api/res';

const KeywordSearch = () => {
    const dispatch = useDispatch();
    const keyword = useSelector(state=>state.res.keyword);
    const mls = useSelector(state=>state.res.mls);
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
            name="mls" 
            onChange={handleMlsChange}
            value={mls?mls:''} 
        />
    </Grid>
    <Grid xs={6} item>
        <TextField 
            variant="outlined" 
            type="text" fullWidth 
            margin="normal" 
            label="Enter Address" 
            name="keyword" 
            onChange={handleKeywordChange}
            value={keyword?keyword:''} 
        />
    </Grid>
</Grid>
)}

export default KeywordSearch;