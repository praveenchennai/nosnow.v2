import React from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from '../../../common/style/style';
import {Grid, Typography, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import { useSelector } from 'react-redux'

const useStyles = makeStyles(listingCss());

const Fee = () => {
    const classes = useStyles();
    const fmin = useSelector(state=>state.lot.totalFee.min);
    const fmax = useSelector(state=>state.lot.totalFee.max);

    const handleChange=()=>{};

return ( 
    <React.Fragment>
        <Grid sm={6} xs={12} container item spacing={1}>
            <Grid xs={12} item>
                <Typography variant="h4" component="h2" >Total Annual Recurring Fees</Typography>
            </Grid>
            <Grid xs={6} item >
                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel >Min</InputLabel>
                    <Select
                    value={fmin}
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

            <Grid xs={6} item>
                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel>Max</InputLabel>
                    <Select
                    value={fmax}
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
        </Grid>
    </React.Fragment>

)}

export default Fee;