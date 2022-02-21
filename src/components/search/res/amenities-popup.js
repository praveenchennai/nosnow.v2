import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import { TextField, Paper , Divider, Toolbar , MenuItem , Checkbox , ListItemText , AppBar, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setAmenitiesFeatures} from 'api/res';
const useStyles = makeStyles(listingCss());


const AmenitiesPopUp = (props) => { 
    const classes = useStyles();
    const dispatch = useDispatch();
    const Amenities = useSelector(state=>state.res.Amenities);
    const AmenitiesOptions = useSelector(state=>state.res.AmenitiesOptions);
    const [AmenitiesSearch, setAmenitiesSearch] = useState("")
    const {adra, setaDra} = props

    const handleAmenitiesSearch=(event)=>{
        setAmenitiesSearch(event.target.value)
    };


    const handleAmenitiesChange=(event)=>{
        var value =[...Amenities];
        if(Amenities.indexOf(event) > -1){
            value = value.filter(v=>v!==event)
        } else {
            value.push(event)
        }
        dispatch(setAmenitiesFeatures(value))
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
                >Amenities</Typography>
                <Button 
                    variant="contained" 
                    className={[classes.btn_orange, classes.mt10].join(' ')}
                    onClick={()=>{
                        setaDra(false);
                        setAmenitiesSearch('')
                    }}
                >Close</Button>
            </Toolbar>
        </AppBar>
        <TextField 
            variant="outlined" 
            type="text" 
            margin="normal" 
            label="Type in the first few letters of the Amenities."
            placeholder="Type in the first few letters of the Amenities."
            name="AmenitiesSearch" 
            onChange={handleAmenitiesSearch}
            value={AmenitiesSearch || ''} 
            sx={{
                marginLeft: "20px",
                marginRight: "20px",
                minWidth: "400px"
            }}
        />
        <Paper 
            elevation={0}
        >
            {AmenitiesOptions.filter(f=>Amenities.indexOf(f) > -1).map((pt, index)=>
                <MenuItem value={pt} key={index}
                    onClick={()=>handleAmenitiesChange(pt)}
                >
                    <Checkbox checked={Amenities.indexOf(pt) > -1}
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
            {AmenitiesOptions.filter(f=>f.startsWith(AmenitiesSearch.toUpperCase()) && Amenities.indexOf(f) === -1).slice(0,70).map((pt, index)=>
                <MenuItem value={pt} key={index}
                    onClick={()=>handleAmenitiesChange(pt)}
                >
                    <Checkbox checked={Amenities.indexOf(pt) > -1}
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

export default AmenitiesPopUp;