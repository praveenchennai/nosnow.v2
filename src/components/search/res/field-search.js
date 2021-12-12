import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {Grid, TextField, Paper, Tooltip, Dialog, Drawer, Divider, Toolbar , MenuItem , Checkbox , ListItemText , AppBar, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setCity, setCommunity, setSubCondo} from 'api/res';
import CityPopUp from './city'
const useStyles = makeStyles(listingCss());

const FieldSearch = () => { 
    const theme = useTheme();
    const classes = useStyles();
    const dispatch = useDispatch();
    const city = useSelector(state=>state.res.city) || [];
    const community = useSelector(state=>state.res.community);
    const communityOptions = useSelector(state=>state.res.communityOptions);
    const subCondo = useSelector(state=>state.res.subCondo);
    const subCondoOptions = useSelector(state=>state.res.subCondoOptions);
    const [cdra, setcDra] = useState(false)
    const [cmdra, setcmDra] = useState(false)
    const [scdra, setscDra] = useState(false)
    const [communitySearch, setCommunitySearch] = useState("")
    const [subCondoSearch, setSubCondoSearch] = useState("")
    
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleCommunitySearch=(event)=>{
        setCommunitySearch(event.target.value)
    };

    const handleSubCondoSearch=(event)=>{
        setSubCondoSearch(event.target.value)
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

    const handleCommunityChange=(event)=>{
        var value =[...community];
        if(community.indexOf(event) > -1){
            value = value.filter(v=>v!==event)
        } else {
            value.push(event)
        }
        dispatch(setCommunity(value))
    };

    const handleSubCondoChange=(event)=>{
        var value =[...subCondo];
        if(subCondo.indexOf(event) > -1){
            value = value.filter(v=>v!==event)
        } else {
            value.push(event)
        }
        dispatch(setSubCondo(value))
    };

return ( 
    <React.Fragment>
        <Grid sm={4} xs={12} item>
            <Button 
                variant="outlined" 
                fullWidth
                onClick={()=>setcDra(true)}
                sx={{
                    height: "100%",
                    color: '#56516b',
                    border: "1px solid"
                }}
            >
                <Tooltip title={city?.join(', ') || ''}>
                <Grid container item display="flex" direction="column">
                    <Typography variant="h6"
                        sx={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#56516b"
                        }}
                    >City</Typography>
                    <Typography 
                        sx={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "#56516b"
                        }}
                    >{city?.length} - Selected</Typography>
                </Grid>
                </Tooltip>
            </Button>
            <Dialog 
                onClose={()=>setcDra(false)} 
                open={cdra}
                fullScreen={fullScreen}
                scroll={"body"}
            >
                <CityPopUp {...{cdra, setcDra}}/>
            </Dialog>
        </Grid>
        <Grid sm={4} xs={12} item>
            <Button 
                variant="outlined" 
                fullWidth
                onClick={()=>setcmDra(true)}
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
                    >Commnity / Development Name</Typography>
                    <Typography 
                        sx={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "#56516b"
                        }}
                    >{community?.length} - Selected</Typography>
                </Grid>
            </Button>
            <Drawer
                anchor={'bottom'}
                open={cmdra}
                onClose={()=>setcmDra(false)}
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
                            >Community Name</Typography>
                            <Button 
                                variant="contained" 
                                className={[classes.btn_orange, classes.mt10].join(' ')}
                                onClick={()=>{
                                    setcmDra(false);
                                    setCommunitySearch('')
                                }}
                            >Close</Button>
                    </Toolbar>
                </AppBar>
                <TextField 
                    variant="outlined" 
                    type="text" 
                    margin="normal" 
                    label="Type in the first few letters of the community."
                    placeholder="Type in the first few letters of the community."
                    name="communitySearch" 
                    onChange={handleCommunitySearch}
                    value={communitySearch || ''} 
                    sx={{
                        marginLeft: "20px"
                    }}
                />
                <Paper 
                    elevation={0}
                    sx={{
                        minHeight: "100vh"
                    }}
                >
                {communityOptions.filter(f=>community.indexOf(f) > -1).map((pt, index)=>
                    <MenuItem value={pt} key={index}
                        onClick={()=>handleCommunityChange(pt)}
                    >
                        <Checkbox checked={community.indexOf(pt) > -1}/>
                        <ListItemText primary={pt} />
                    </MenuItem>                  
                )}
                <Divider />
                {communityOptions.filter(f=>f.startsWith(communitySearch.toUpperCase()) && community.indexOf(f) === -1).slice(0,15).map((pt, index)=>
                    <MenuItem value={pt} key={index}
                    onClick={()=>handleCommunityChange(pt)}
                    >
                        <Checkbox checked={community.indexOf(pt) > -1}/>
                        <ListItemText primary={pt} />
                    </MenuItem>                  
                )}
                </Paper>
            </Drawer>
        </Grid>
        <Grid sm={4} xs={12} item>
            <Button 
                variant="outlined" 
                fullWidth
                onClick={()=>setscDra(true)}
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
                    >Subdivision / Condo</Typography>
                    <Typography 
                        sx={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "#56516b"
                        }}
                    >{subCondo?.length} - Selected</Typography>
                </Grid>
            </Button>
            <Drawer
                anchor={'bottom'}
                open={scdra}
                onClose={()=>setscDra(false)}
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
                            >Subdivision</Typography>
                            <Button 
                                variant="contained" 
                                className={[classes.btn_orange, classes.mt10].join(' ')}
                                onClick={()=>{
                                    setscDra(false);
                                    setSubCondoSearch('')
                                }}
                            >Close</Button>
                    </Toolbar>
                </AppBar>
                <TextField 
                    variant="outlined" 
                    type="text" 
                    margin="normal" 
                    label="Type in the first few letters of the Subdivision."
                    placeholder="Type in the first few letters of the Subdivision."
                    name="subcondo" 
                    onChange={handleSubCondoSearch}
                    value={subCondoSearch || ''} 
                    sx={{
                        marginLeft: "20px"
                    }}
                />
                <Paper 
                    elevation={0}
                    sx={{
                        minHeight: "100vh"
                    }}
                >
                {subCondoOptions.filter(f=>subCondo.indexOf(f) > -1).map((pt, index)=>
                    <MenuItem value={pt} key={index}
                    onClick={()=>handleSubCondoChange(pt)}
                    >
                        <Checkbox checked={subCondo.indexOf(pt) > -1}/>
                        <ListItemText primary={pt} />
                    </MenuItem>                  
                )}
                <Divider />
                {subCondoOptions.filter(f=>f.startsWith(subCondoSearch.toUpperCase()) && subCondo.indexOf(f) === -1).slice(0,15).map((pt, index)=>
                    <MenuItem value={pt} key={index}
                    onClick={()=>handleSubCondoChange(pt)}
                    >
                        <Checkbox checked={subCondo.indexOf(pt) > -1}/>
                        <ListItemText primary={pt} />
                    </MenuItem>                  
                )}
                </Paper>
            </Drawer>
        </Grid>
    </React.Fragment>

)}

export default FieldSearch;