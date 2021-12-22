import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import { TextField, Paper , Divider, Toolbar , MenuItem , Checkbox , ListItemText , AppBar, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setWaterfrontFeatures} from 'api/res';
const useStyles = makeStyles(listingCss());

const WaterFrontPopUp = (props) => { 
    const classes = useStyles();
    const dispatch = useDispatch();
    const waterfrontFeatures = useSelector(state=>state.res.WaterfrontFeatures);
    const waterfrontFeaturesOptions = useSelector(state=>state.res.WaterfrontFeaturesOptions);
    const [waterFrontSearch, setWaterFrontSearch] = useState("")
    const {wdra, setwDra} = props

    const handleWaterFrontSearch=(event)=>{
        setWaterFrontSearch(event.target.value)
    };


    const handleWaterFrontChange=(event)=>{
        var value =[...waterfrontFeatures];
        if(waterfrontFeatures.indexOf(event) > -1){
            value = value.filter(v=>v!==event)
        } else {
            value.push(event)
        }
        dispatch(setWaterfrontFeatures(value))
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
                >Water Front Features</Typography>
                <Button 
                    variant="contained" 
                    className={[classes.btn_orange, classes.mt10].join(' ')}
                    onClick={()=>{
                        setwDra(false);
                        setWaterFrontSearch('')
                    }}
                >Close</Button>
            </Toolbar>
        </AppBar>
        <TextField 
            variant="outlined" 
            type="text" 
            margin="normal" 
            label="Type in the first few letters of the Water Front Feature."
            placeholder="Type in the first few letters of the Water Front Feature."
            name="waterFrontSearch" 
            onChange={handleWaterFrontSearch}
            value={waterFrontSearch || ''} 
            sx={{
                marginLeft: "20px",
                marginRight: "20px",
                minWidth: "400px"
            }}
        />
        <Paper 
            elevation={0}
        >
            {waterfrontFeaturesOptions.filter(f=>waterfrontFeatures.indexOf(f) > -1).map((pt, index)=>
                <MenuItem value={pt} key={index}
                    onClick={()=>handleWaterFrontChange(pt)}
                >
                    <Checkbox checked={waterfrontFeatures.indexOf(pt) > -1}
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
            {waterfrontFeaturesOptions.filter(f=>f.startsWith(waterFrontSearch.toUpperCase()) && waterfrontFeatures.indexOf(f) === -1).slice(0,10).map((pt, index)=>
                <MenuItem value={pt} key={index}
                    onClick={()=>handleWaterFrontChange(pt)}
                >
                    <Checkbox checked={waterfrontFeatures.indexOf(pt) > -1}
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

export default WaterFrontPopUp;