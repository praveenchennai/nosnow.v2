import React from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import {Grid, FormControl,  Select, MenuItem, Typography, ListItemText} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setAttachedGarageYN, setGarageSpaces} from 'api/res';

const useStyles = makeStyles(listingCss());

const Garage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const AttachedGarageYNOptions = useSelector(state=>state.res.AttachedGarageYNOptions);
    const AttachedGarageYN = useSelector(state=>state.res.AttachedGarageYN);
    const GarageSpaces = useSelector(state=>state.res.GarageSpaces);
    const GarageSpacesOptions = useSelector(state=>state.res.GarageSpacesOptions);

    const handleGarageChange=(event)=>{
        console.log(event.target)
        dispatch(setAttachedGarageYN(event.target.value))
    };

    const handleGarageSpacesChange=(event)=>{
        dispatch(setGarageSpaces(event.target.value))
    };

return ( 
    <React.Fragment>
        <Grid md={3} sm={6} xs={12} item>
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <Typography >Garage</Typography>
                <Select
                    value={AttachedGarageYN}
                    renderValue={(AttachedGarageYN)=>(<Typography >{AttachedGarageYN}</Typography>)}
                    onChange={handleGarageChange}
                >
                    {AttachedGarageYNOptions.map(pt=>
                        <MenuItem value={pt.id} key={pt.id}>
                            <ListItemText primary={pt.value} />
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </Grid>

        <Grid md={3} sm={6} xs={12} item>
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <Typography ># of Garage</Typography>
                <Select
                    value={GarageSpaces}
                    renderValue={(GarageSpaces)=>(<Typography>{GarageSpacesOptions.find(g=>g.id===GarageSpaces)?.value || ''}</Typography>)}
                    onChange={handleGarageSpacesChange}
                >
                   {GarageSpacesOptions.map(pt=>
                        <MenuItem value={pt.id} key={pt.id}>
                            <ListItemText primary={pt.value} />
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </Grid>
    </React.Fragment>
)}

export default Garage;