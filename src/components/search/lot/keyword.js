import React, { useContext} from 'react';
import {Grid, TextField} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'

const KeywordSearch = () => {
    const keyword = useSelector(state=>state.res.keyword);

return ( 
<Grid container display="flex" justify="space-between" spacing={2}>
    <Grid  container item  xs={12} item>
        <TextField 
            variant="outlined" 
            type="text" fullWidth 
            margin="normal" 
            label="Keyword Search" 
            name="searchLot.keyword" 
            value={keyword} 
        />
    </Grid>
</Grid>
)}

export default KeywordSearch;