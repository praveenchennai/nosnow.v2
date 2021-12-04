import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import {Grid, AppBar, FormControl, Select,Toolbar, MenuItem, Checkbox, ListItemText, Typography, Button, Drawer } from '@mui/material';
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
        var value =[...PropertySubType];
        if(PropertySubType.indexOf(event) > -1){
            value = value.filter(v=>v!==event)
        } else {
            value.push(event)
        }
        dispatch(setPropertySubType(value))
    };
    const handleCommunityChange=(event)=>{
        var value =[...CommunityFeatures];
        if(CommunityFeatures.indexOf(event) > -1){
            value = value.filter(v=>v!==event)
        } else {
            value.push(event)
        }
        dispatch(setCommunityFeatures(value))
    };

    const [pdra, setpDra] = useState(false)
    const [cdra, setcDra] = useState(false)

return ( 
    <React.Fragment>
        <Grid md={3} sm={6} xs={12} item>
            <Button 
                variant="outlined" 
                fullWidth
                onClick={()=>setpDra(true)}
                sx={{
                    height: "100%"
                }}
            >
                <Grid container item display="flex" direction="column">
                    <Typography variant="h6"
                        sx={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#56516b"
                        }}
                    >Property Type</Typography>
                    <Typography 
                        sx={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "#56516b"
                        }}
                    >{PropertySubType?.length} - Selected</Typography>
                </Grid>
            </Button>
        </Grid>
        <Grid md={3} sm={6} xs={12} item>
            <Button 
                variant="outlined" 
                fullWidth
                onClick={()=>setcDra(true)}
                sx={{
                    height: "100%"
                }}
            >
                <Grid container item display="flex" direction="column">
                    <Typography variant="h6"
                        sx={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#56516b"
                        }}
                    >Community Types</Typography>
                    <Typography 
                        sx={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "#56516b"
                        }}
                    >{CommunityFeatures.length} - Selected</Typography>
                </Grid>
            </Button>
        </Grid>

        <Drawer
            anchor={'bottom'}
            open={pdra}
            onClose={()=>setpDra(false)}
        >
            <AppBar position="sticky" elevation={0} className={classes.appbar_site}>
                <Toolbar>
                        <Typography variant="h6"
                            sx={{
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#fff",
                                flexGrow: 1
                            }}
                        >Property Types</Typography>
                        <Button 
                            variant="contained" 
                            className={[classes.btn_orange, classes.mt10].join(' ')}
                            onClick={()=>setpDra(false)}
                        >Close</Button>
                </Toolbar>
            </AppBar>
            {PropertySubTypeOptions.map(pt=>
                <MenuItem value={pt.id} key={pt.id}
                 onClick={()=>handlePropertyChange(pt.id)}
                >
                    <Checkbox checked={PropertySubType.indexOf(pt.id) > -1}/>
                    <ListItemText primary={pt.value} />
                </MenuItem>                  
            )}
        </Drawer>
        <Drawer
            anchor={'bottom'}
            open={cdra}
            onClose={()=>setcDra(false)}
        >
            <AppBar position="sticky" elevation={0} className={classes.appbar_site}>
                <Toolbar>
                        <Typography variant="h6"
                            sx={{
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#fff",
                                flexGrow: 1
                            }}
                        >Community Types</Typography>
                        <Button 
                            variant="contained" 
                            className={[classes.btn_orange, classes.mt10].join(' ')}
                            onClick={()=>setcDra(false)}
                        >Close</Button>
                </Toolbar>
            </AppBar>
            {CommunityFeaturesOptions.map(pt=>

                <MenuItem value={pt.id} key={pt.id}
                    onClick={()=>handleCommunityChange(pt.id)}
                >
                    <Checkbox checked={CommunityFeatures.indexOf(pt.id) > -1} />
                    <ListItemText primary={pt.value} />
                </MenuItem>
            )}
        </Drawer>
    </React.Fragment>

)}

export default TypeSearch;