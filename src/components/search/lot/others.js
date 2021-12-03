import React, { useContext} from 'react';
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux'
import { listingCss } from '../../../common/style/style';
import {Grid, Typography, FormControl, InputLabel, Select, MenuItem} from '@mui/material';

const useStyles = makeStyles(listingCss());

const Others = () => {
    const lotType = useSelector(state=>state.lot.lotType);
    const waterFront = useSelector(state=>state.lot.waterFront);
    const classes = useStyles();
    const handleChange=()=>{};

return ( 
    <React.Fragment>
        <Grid sm={6} xs={12} container item spacing={1}>
            <Grid  container item xs={12} item>
                <Typography variant="h4" component="h2">Others</Typography>
            </Grid>
            <Grid xs={6} item >
                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel >Lot Types</InputLabel>
                    <Select
                        value={lotType}
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

            <Grid  container item  xs={6}>
                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel>Water Front</InputLabel>
                    <Select
                        value={waterFront}
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

export default Others;