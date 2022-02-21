import React, {useState} from 'react';
import {Grid, TextField, } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setKeyword, setMls} from 'api/res';

const KeywordSearch = () => {
    const [label, setLabel] = useState('Enter MLS# or Address')
    const dispatch = useDispatch();
    const keyword = useSelector(state=>state.res.keyword);
    const mls = useSelector(state=>state.res.mls);
    const handleKeywordChange=(event)=>{
        dispatch(setKeyword(event.target.value))
    };
    const handleFocus = ()=>{
        setLabel('Keyword Search')
    }

return ( 
<Grid container display="flex" justify="space-between" spacing={2}>
    <Grid xs={12} item>
        <TextField 
            variant="outlined" 
            type="text" fullWidth 
            margin="normal" 
            label={label}
            placeholder = "Enter MLS# or Address"
            name="mls" 
            onChange={handleKeywordChange}
            onFocus={handleFocus}
            value={keyword || ''} 
        />
    </Grid>
</Grid>
)}

export default KeywordSearch;