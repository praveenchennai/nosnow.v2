import React, { useContext} from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from '../../../common/style/style';
import { useSelector, useDispatch } from 'react-redux'
import {Grid, Typography, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import {searchFields} from '../main';

const useStyles = makeStyles(listingCss());

const Acres = () => {
    const classes = useStyles();
    const amin = useSelector(state=>state.lot.acres.min);
    const amax = useSelector(state=>state.lot.acres.max);

    const handleChange=()=>{};

return ( 
    <React.Fragment>
        <Grid container item sm={3} xs={6} item>
            <Typography variant="body1" component="h2">Acres</Typography>
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <InputLabel >Min</InputLabel>
                <Select
                value={amin}
                onChange={handleChange}
                label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Grid>

        <Grid container item sm={3} xs={6} item>
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <InputLabel>Max</InputLabel>
                <Select
                value={amax}
                onChange={handleChange}
                label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Grid>  
    </React.Fragment>

)}

export default Acres;