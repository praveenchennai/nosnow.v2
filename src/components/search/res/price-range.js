import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import {Grid, Typography, FormControl,  Select, ListItemText, MenuItem} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setPriceRange} from 'api/res';

const useStyles = makeStyles(listingCss());

const PriceRange = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const dropDownOptions = useSelector(state=>state.res.priceRangeOptions);

    const [minOptions, setMinOptions] = useState(dropDownOptions);
    const [maxOptions, setMaxOptions] = useState(dropDownOptions);


    const handleMinChange=(event)=>{
        var params = {key: 'min', value: event.target.value};
        dispatch(setPriceRange(params));
        if(event.target.value!==0){
            var newValues = dropDownOptions.filter(f=>f.id>event.target.value);
            if(!newValues.find(n=>n.id===0)){
                newValues.push({id: 0, value: "Any"});
            }
            setMaxOptions(newValues);
        } else {
            setMaxOptions(dropDownOptions);
        }
    };

    const handleMaxChange=(event)=>{
        var params = {key: 'max', value: event.target.value};
        dispatch(setPriceRange(params));
        if(event.target.value!==0){
            var newValues = dropDownOptions.filter(f=>f.id<event.target.value);
            if(!newValues.find(n=>n.id===0)){
                newValues.push({id: 0, value: "Any"})
            }
            setMinOptions(newValues);
        } else {
            setMaxOptions(dropDownOptions);
        }
    };

return ( 
    <React.Fragment>
        <Grid sm={3} xs={6} item>
            <Typography variant="body1" component="h2">Price Range - Min</Typography>
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <Select
                    renderValue={(min)=>(<Typography>{min}</Typography>)}
                    onChange={handleMinChange}
                >
                    {minOptions.map(pt=>
                        <MenuItem value={pt.id} key={pt.id}>
                            <ListItemText primary={pt.value} />
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </Grid>
        <Grid sm={3} xs={6} item>
        <Typography variant="body1" component="h2">Price Range - Max</Typography>
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <Select
                renderValue={(max)=>(<Typography >{max}</Typography>)}
                onChange={handleMaxChange}
                >
                    {maxOptions.map(pt=>
                        <MenuItem value={pt.id} key={pt.id}>
                            <ListItemText primary={pt.value} />
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </Grid>
    </React.Fragment>

)}

export default PriceRange;