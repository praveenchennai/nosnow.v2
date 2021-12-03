import React from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import {Grid, Typography, FormControl, InputLabel, Select, MenuItem, ListItemText, Checkbox } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { setWaterfrontFeatures, setNABOR_PetsLimitMaxNumber} from 'api/res';

const useStyles = makeStyles(listingCss());

const Others = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const NABOR_PetsLimitMaxNumberOptions = useSelector(state=>state.res.NABOR_PetsLimitMaxNumberOptions);
    const NABOR_PetsLimitMaxNumber = useSelector(state=>state.res.NABOR_PetsLimitMaxNumber);
    const WaterfrontFeatures = useSelector(state=>state.res.WaterfrontFeatures);
    const WaterfrontFeaturesOptions = useSelector(state=>state.res.WaterfrontFeaturesOptions);
    const handleChangePets=(event)=>{
        dispatch(setNABOR_PetsLimitMaxNumber(event.target.value));
    };
    const handleChangeWaterfrontFeatures=(event)=>{
        dispatch(setWaterfrontFeatures(event.target.value))
    };

return ( 
    <React.Fragment>
        <Grid sm={6} xs={12} container item spacing={1}>
            <Grid xs={12} item>
                <Typography variant="body1" component="h2">Others</Typography>
            </Grid>
            <Grid xs={6} item >
                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel >Water Front</InputLabel>
                    <Select
                        multiple
                        value={WaterfrontFeatures}
                        onChange={handleChangeWaterfrontFeatures}
                        renderValue={(WaterfrontFeatures)=>(<Typography >{WaterfrontFeatures.length} - Selected</Typography>)}
                        label="Water Front"
                    >
                        {WaterfrontFeaturesOptions.map(pt=>
                            <MenuItem value={pt.id} key={pt.id}>
                                <Checkbox checked={WaterfrontFeatures.indexOf(pt.id) > -1} />
                                <ListItemText primary={pt.value} />
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Grid>

            <Grid xs={6} item>
                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel>Pets</InputLabel>
                    <Select
                    value={NABOR_PetsLimitMaxNumber}
                    onChange={handleChangePets}
                    label="pets"
                    >
                        {NABOR_PetsLimitMaxNumberOptions.map(pt=>
                            <MenuItem value={pt.id} key={pt.id}>
                                <ListItemText primary={pt.value} />
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>   
    </React.Fragment>

)}

export default Others;