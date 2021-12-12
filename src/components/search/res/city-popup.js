import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import { TextField, Paper , Divider, Toolbar , MenuItem , Checkbox , ListItemText , AppBar, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setCity} from 'api/res';
const useStyles = makeStyles(listingCss());

const CityPopUp = (props) => { 
    const classes = useStyles();
    const dispatch = useDispatch();
    const city = useSelector(state=>state.res.city);
    const cityOptions = useSelector(state=>state.res.cityOptions);
    const [citySearch, setCitySearch] = useState("")
    const {cdra, setcDra} = props

    const handleCitySearch=(event)=>{
        setCitySearch(event.target.value)
    };


    const handleCityChange=(event)=>{
        var value =[...city];
        if(city.indexOf(event) > -1){
            value = value.filter(v=>v!==event)
        } else {
            value.push(event)
        }
        dispatch(setCity(value))
    };



return ( 
    <React.Fragment>
        <AppBar position="sticky" elevation={0} className={classes.appbar_site}>
            <Toolbar>
                <Typography variant="h6"
                    sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#fff",
                        flexGrow: 1
                    }}
                >City</Typography>
                <Button 
                    variant="contained" 
                    className={[classes.btn_orange, classes.mt10].join(' ')}
                    onClick={()=>{
                        setcDra(false);
                        setCitySearch('')
                    }}
                >Close</Button>
            </Toolbar>
        </AppBar>
        <TextField 
            variant="outlined" 
            type="text" 
            margin="normal" 
            label="Type in the first few letters of the City."
            placeholder="Type in the first few letters of the City."
            name="citySearch" 
            onChange={handleCitySearch}
            value={citySearch || ''} 
            sx={{
                marginLeft: "20px",
                marginRight: "20px",
                minWidth: "400px"
            }}
        />
        <Paper 
            elevation={0}
        >
            {cityOptions.filter(f=>city.indexOf(f) > -1).map((pt, index)=>
                <MenuItem value={pt} key={index}
                onClick={()=>handleCityChange(pt)}
                >
                    <Checkbox checked={city.indexOf(pt) > -1}
                        sx={{
                            color: "#56516b",
                            '&.Mui-checked': {
                            color: "#56516b",
                            },
                        }}
                    />
                    <ListItemText primary={pt} />
                </MenuItem>                  
            )}
            <Divider />
            {cityOptions.filter(f=>f.startsWith(citySearch.toUpperCase()) && city.indexOf(f) === -1).slice(0,10).map((pt, index)=>
                <MenuItem value={pt} key={index}
                onClick={()=>handleCityChange(pt)}
                >
                    <Checkbox checked={city.indexOf(pt) > -1}
                        sx={{
                            color: "#56516b",
                            '&.Mui-checked': {
                            color: "#56516b",
                            },
                        }}
                    />
                    <ListItemText primary={pt} />
                </MenuItem>                  
            )}
        </Paper>
    </React.Fragment>

)}

export default CityPopUp;