import React from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import {Grid, TextField, Autocomplete } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setCity, setCommunity, setSubCondo, fetchCity} from 'api/res';
const useStyles = makeStyles(listingCss());

const FieldSearch = () => { 
    const classes = useStyles();
    const dispatch = useDispatch();
    const city = useSelector(state=>state.res.city);
    const cityOptions = useSelector(state=>state.res.cityOptions);
    const community = useSelector(state=>state.res.community);
    const subCondo = useSelector(state=>state.res.subCondo);

    // useEffect(()=>{
    //     if(city.length>3){
    //         dispatch(fetchCity(city))
    //         .then(result=>{
    //             console.log(result)
    //         })
    //     }
    // }, [city])

    const handleCityChange=(event)=>{
        console.log(event)

        if(city.length>3){
            dispatch(fetchCity(city))
            .then(result=>{
                console.log(result)
            })
        }
    };

    const handleCityInputChange=(event)=>{
        dispatch(setCity(event))
        if(city.length>3){
            dispatch(fetchCity(city))
            .then(result=>{
                console.log(result)
            })
        }
    };

    const handleCommunityChange=(event)=>{
        dispatch(setCommunity(event.target.value))
    };

    const handleSubCondoChange=(event)=>{
        dispatch(setSubCondo(event.target.value))
    };

return ( 
    <React.Fragment>
        <Grid sm={4} xs={12} item>
            <Autocomplete
                disabled
                fullWidth autoComplete className={classes.mt10}
                options={cityOptions}
                onChange={(option, value) => handleCityChange(value)}
                inputValue={city || ''}
                onInputChange={(event, newInputValue) => handleCityInputChange(newInputValue)}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} value={city||''} label="City" variant="outlined" autoComplete="off" />}
            />
        </Grid>
        <Grid sm={4} xs={12} item>
            <TextField 
            disabled
                variant="outlined" 
                type="text" fullWidth 
                margin="normal" 
                label="Community Search"
                name="community" 
                onChange={handleCommunityChange}
                value={community || ''} 
            />
        </Grid>
        <Grid sm={4} xs={12} item>
            <TextField 
            disabled
                variant="outlined" 
                type="text" fullWidth 
                margin="normal" 
                label="Sub Condo Search" 
                name="subCondo" 
                onChange={handleSubCondoChange}
                value={subCondo || ''} 
            />
        </Grid>
    </React.Fragment>

)}

export default FieldSearch;