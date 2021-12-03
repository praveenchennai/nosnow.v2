import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import {Grid, Typography, FormControl, InputLabel, Select, ListItemText, MenuItem} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setBeds} from 'api/res';
const useStyles = makeStyles(listingCss());

const Beds = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const min = useSelector(state=>state.res.beds.min);
    const max = useSelector(state=>state.res.beds.max);
    const dropDownOptions = useSelector(state=>state.res.bbOptions);

    const [minOptions, setMinOptions] = useState(dropDownOptions);
    const [maxOptions, setMaxOptions] = useState(dropDownOptions);

    const handleMinChange=(event)=>{
        var params = {key: 'min', value: event.target.value};
        dispatch(setBeds(params));
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
        dispatch(setBeds(params));
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
            <Typography variant="body1" component="h2">Beds</Typography>
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                {/* <InputLabel >Min</InputLabel> */}
                <Select
                value={min}
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
            <Typography variant="body1" component="h2">Beds</Typography>
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                {/* <InputLabel>Max</InputLabel> */}
                <Select
                value={max}
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

export default Beds;