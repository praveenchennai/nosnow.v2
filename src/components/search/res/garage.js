import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { listingCss } from 'common/style/style';
import { useTheme } from '@mui/material/styles';
import {Grid, Slider, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Dialog, Button, AppBar, Toolbar, Checkbox, MenuItem, Typography, ListItemText} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setAttachedGarageYN, setGarageSpaces} from 'api/res';

const useStyles = makeStyles(listingCss());

const Garage = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [gdra, setgDra] = useState(false)
    const dispatch = useDispatch();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const AttachedGarageYNOptions = useSelector(state=>state.res.AttachedGarageYNOptions);
    const AttachedGarageYN = useSelector(state=>state.res.AttachedGarageYN);
    const GarageSpaces = useSelector(state=>state.res.GarageSpaces);
    const GarageSpacesOptions = useSelector(state=>state.res.GarageSpacesOptions);

    const handleRadioChange=(event)=>{
        console.log(event.target.value)
        dispatch(setAttachedGarageYN(event.target.value))
    };

    const handleSliderChange = (event, newValue) => {
        dispatch(setGarageSpaces(newValue));
    };

    const garageValue = () => {
        if(AttachedGarageYN===undefined){
            return 'Any'
        }
        if(AttachedGarageYN){
            return 'Attached'
        }
        if(AttachedGarageYN===false){
            return 'Detached'
        }
    };

    const garageSpaceSelection = () =>{
        var res = '';
        if(AttachedGarageYN!=="Any"){
            res = `${AttachedGarageYN}` 
        } 
        if(GarageSpaces>0){
            res = res + ` ${GarageSpaces}+  Garages Selected`;
        } else {
            res = res + ``
        }
        return res
    }

return ( 
    <React.Fragment>

        <Grid md={4} sm={6} xs={12} item>
            <Button 
                variant="outlined" 
                fullWidth
                onClick={()=>setgDra(true)}
                sx={{
                    height: "100%",
                    color: '#56516b',
                    border: "1px solid"
                }}
            >
                <Grid container item display="flex" direction="column">
                    <Typography variant="h6"
                        sx={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#56516b"
                        }}
                    >Garage Types & Spaces</Typography>
                    <Typography 
                        sx={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "#56516b"
                        }}
                    >{garageSpaceSelection()}</Typography>
                </Grid>
            </Button>
            <Dialog 
                onClose={()=>setgDra(false)} 
                open={gdra}
                fullScreen={fullScreen}
                scroll={"body"}
                sx={{
                    minHeight:"400px"
                }}
                
            >
            <AppBar position="sticky" elevation={0} className={classes.appbar_site}
                sx={{
                    minWidth: {
                        xs: "90%",
                        sm: "600px"
                    },
                    mb: 2
                }}
            >
                <Toolbar>
                        <Typography variant="h6"
                            sx={{
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#fff",
                                flexGrow: 1
                            }}
                        >Garage Types</Typography>
                        <Button 
                            variant="contained" 
                            className={[classes.btn_orange, classes.mt10].join(' ')}
                            onClick={()=>setgDra(false)}
                        >Close</Button>
                </Toolbar>
            </AppBar>
            <Grid sm={2} xs={12} item sx={{ml:3}} />
            <Grid sm={8} xs={12} item sx={{m:4}}>
                <FormControl component="fieldset" >
                    <Typography variant="body1" component="h2"
                    sx={{
                        fontWeight: "600"
                    }}
                    >Garage Type</Typography>
                    <RadioGroup defaultValue={"Any"} value={AttachedGarageYN} name="radio-buttons-group" onChange={handleRadioChange}>
                        <FormControlLabel value="Any" control={<Radio />} label="Any" />
                        <FormControlLabel value="Attached" control={<Radio />} label="Attached" />
                        <FormControlLabel value="Detached" control={<Radio />} label="Detached" />
                    </RadioGroup>
                </FormControl>
                <Typography variant="body1" component="h2"
                    sx={{
                        mt: 3,
                        mb: 4,
                        fontWeight: "600"
                    }}
                >Garage Spaces</Typography>
                <Slider
                    value={GarageSpaces}
                    onChange={handleSliderChange}
                    step={1}
                    max={6}
                    valueLabelDisplay="on"
                    valueLabelFormat={value=>GarageSpacesOptions?.find(m=>m.value===value)?.label || 'Any'}
                    sx={{
                        color: "#56516b",
                        '& .MuiSlider-thumb': {
                            backgroundColor: '#FE8200'
                        }
                    }}
                />
            </Grid>
        </Dialog>
        </Grid>
    </React.Fragment>
)}

export default Garage;