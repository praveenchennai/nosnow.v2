import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { listingCss } from 'common/style/style';
import {Grid, Typography, FormControl, Dialog, InputLabel, Select, MenuItem, ListItemText, Button, Tooltip } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import WaterFrontPopUp from './water-front-popup'
import AmenitiesPopUp from './amenities-popup'
//import WaterFrontPopUp from './water-front-popup'

import { setWaterfrontFeatures, setNABOR_PetsLimitMaxNumber} from 'api/res';


const useStyles = makeStyles(listingCss());

const Others = () => {
    const theme = useTheme();
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const NABOR_PetsLimitMaxNumber = useSelector(state=>state.res.NABOR_PetsLimitMaxNumber);
    const NABOR_PetsLimitMaxNumberOptions = useSelector(state=>state.res.NABOR_PetsLimitMaxNumberOptions);

    const WaterfrontFeatures = useSelector(state=>state.res.WaterfrontFeatures);
    const WaterfrontFeaturesOptions = useSelector(state=>state.res.WaterfrontFeaturesOptions);

    const Amenities = useSelector(state=>state.res.Amenities);
    const AmenitiesOptions = useSelector(state=>state.res.AmenitiesOptions);

    const [wdra, setwDra] = useState(false);
    const [pdra, setpDra] = useState(false);
    const [adra, setaDra] = useState(false);

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChangePets=(event)=>{
        dispatch(setNABOR_PetsLimitMaxNumber(event.target.value));
    };

return ( 
    <React.Fragment>
        <Grid xs={12} container item spacing={1}>
            <Grid md={4} sm={6} xs={12} item>
                <Button 
                    variant="outlined" 
                    fullWidth
                    onClick={()=>setwDra(true)}
                    sx={{
                        height: "100%",
                        color: '#56516b',
                        border: "1px solid"
                    }}
                >
                    <Tooltip title={WaterfrontFeatures?.join(', ') || ''}>
                    <Grid container item display="flex" direction="column">
                        <Typography variant="h6"
                            sx={{
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#56516b"
                            }}
                        >Water Front Features</Typography>
                        <Typography 
                            sx={{
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "#56516b"
                            }}
                        >{WaterfrontFeatures?.length} - Selected</Typography>
                    </Grid>
                    </Tooltip>
                </Button>
                <Dialog 
                    onClose={()=>setwDra(false)} 
                    open={wdra}
                    fullScreen={fullScreen}
                    scroll={"body"}
                >
                    <WaterFrontPopUp {...{wdra, setwDra}}/>
                </Dialog>
            </Grid>
            <Grid md={4} sm={6} xs={12} item>
                <Button 
                    variant="outlined" 
                    fullWidth
                    onClick={()=>setaDra(true)}
                    sx={{
                        height: "100%",
                        color: '#56516b',
                        border: "1px solid"
                    }}
                >
                    <Tooltip title={Amenities?.join(', ') || ''}>
                    <Grid container item display="flex" direction="column">
                        <Typography variant="h6"
                            sx={{
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#56516b"
                            }}
                        >Amenities</Typography>
                        <Typography 
                            sx={{
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "#56516b"
                            }}
                        >{Amenities?.length} - Selected</Typography>
                    </Grid>
                    </Tooltip>
                </Button>
                <Dialog 
                    onClose={()=>setaDra(false)} 
                    open={adra}
                    fullScreen={fullScreen}
                    scroll={"body"}
                >
                    <AmenitiesPopUp {...{adra, setaDra}}/>
                </Dialog>
            </Grid>

            <Grid xs={4} item>
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