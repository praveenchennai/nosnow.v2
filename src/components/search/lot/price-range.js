import React, {useContext} from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from '../../../common/style/style';
import { useSelector, useDispatch } from 'react-redux'
import {Grid, Typography, FormControl, InputLabel, Select, MenuItem} from '@mui/material';

const useStyles = makeStyles(listingCss());

const PriceRange = () => {
    const classes = useStyles();
    const pmin = useSelector(state=>state.lot.priceRange.min);
    const pmax = useSelector(state=>state.lot.priceRange.max);

    const handleChange=()=>{};

return ( 
    <React.Fragment>
        <Grid sm={3} xs={6} item>
            <Typography variant="body1" component="h2">Price Range - Min</Typography>
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <InputLabel >Min Range</InputLabel>
                <Select
                value={pmin}
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

        <Grid sm={3} xs={6} item>
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <InputLabel>Max Range</InputLabel>
                <Select
                value={pmax}
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

export default PriceRange;