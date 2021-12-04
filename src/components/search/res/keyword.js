import React from 'react';
import {Grid, TextField, } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setKeyword} from 'api/res';

const KeywordSearch = () => {
    const dispatch = useDispatch();
    const keyword = useSelector(state=>state.res.keyword);
    const handleChange=(event)=>{
        dispatch(setKeyword(event.target.value))
    };

return ( 
<Grid container display="flex" justify="space-between" spacing={2}>
    <Grid xs={12} item>
        <TextField 
            variant="outlined" 
            type="text" fullWidth 
            margin="normal" 
            label="Enter Address" 
            name="keyword" 
            onChange={handleChange}
            value={keyword?keyword:''} 
        />
    </Grid>
</Grid>
)}

export default KeywordSearch;