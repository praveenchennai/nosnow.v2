import React from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import {Grid, FormControl, Select, MenuItem, Checkbox, ListItemText, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setPropertySubType, setCommunityFeatures} from 'api/res';

const useStyles = makeStyles(listingCss());

const TypeSearch = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const PropertySubTypeOptions = useSelector(state=>state.res.PropertySubTypeOptions);
    const PropertySubType = useSelector(state=>state.res.PropertySubType);
    const CommunityFeatures = useSelector(state=>state.res.CommunityFeatures);
    const CommunityFeaturesOptions = useSelector(state=>state.res.CommunityFeaturesOptions);
    const handlePropertyChange=(event)=>{
        dispatch(setPropertySubType(event.target.value))
    };
    const handleCommunityChange=(event)=>{
        dispatch(setCommunityFeatures(event.target.value))
    };

return ( 
    <React.Fragment>
        <Grid md={3} sm={6} xs={12} item>
            <FormControl variant="outlined" className={classes.formControl} fullWidth> 
                <Typography >Property Type</Typography>
                <Select 
                    multiple 
                    value={PropertySubType} 
                    renderValue={(PropertySubType)=>(<Typography >{PropertySubType.length} - Selected</Typography>)}
                    onChange={handlePropertyChange} 
                >
                    {PropertySubTypeOptions.map(pt=>
                        <MenuItem value={pt.id} key={pt.id}>
                            <Checkbox checked={PropertySubType.indexOf(pt.id) > -1} />
                            <ListItemText primary={pt.value} />
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </Grid>

        <Grid md={3} sm={6} xs={12} item>
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <Typography>Community Types</Typography>
                <Select
                    multiple
                    value={CommunityFeatures}
                    onChange={handleCommunityChange}
                    renderValue={(CommunityFeatures)=>(<Typography >{CommunityFeatures.length} - Selected</Typography>)}
                >
                    {CommunityFeaturesOptions.map(pt=>
                        <MenuItem value={pt.id} key={pt.id}>
                            <Checkbox checked={CommunityFeatures.indexOf(pt.id) > -1} />
                            <ListItemText primary={pt.value} />
                        </MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
    </React.Fragment>

)}

export default TypeSearch;