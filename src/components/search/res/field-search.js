import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import {Grid, TextField, Paper , Drawer, Divider, Toolbar , MenuItem , Checkbox , ListItemText , AppBar, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setCity, setCommunity, setSubCondo} from 'api/res';
const useStyles = makeStyles(listingCss());

const FieldSearch = () => { 
    const classes = useStyles();
    const dispatch = useDispatch();
    const city = useSelector(state=>state.res.city);
    const cityOptions = useSelector(state=>state.res.cityOptions);
    const community = useSelector(state=>state.res.community);
    const communityOptions = useSelector(state=>state.res.communityOptions);
    const subCondo = useSelector(state=>state.res.subCondo);
    const subCondoOptions = useSelector(state=>state.res.subCondoOptions);
    const [cdra, setcDra] = useState(false)
    const [cmdra, setcmDra] = useState(false)
    const [scdra, setscDra] = useState(false)
    const [citySearch, setCitySearch] = useState("")
    const [communitySearch, setCommunitySearch] = useState("")
    const [subCondoSearch, setSubCondoSearch] = useState("")

    const handleCitySearch=(event)=>{
        setCitySearch(event.target.value)
    };

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
                    >City</Typography>
                    <Typography 
                        sx={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "#56516b"
                        }}
                    >{city?.length} - Selected</Typography>
                </Grid>
            </Button>
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
                        marginLeft: "20px"
                    }}
                />
                <Paper sx={{
                    minHeight: "100vh"
                }}>
                {cityOptions.filter(f=>city.indexOf(f) > -1).map((pt, index)=>
                    <MenuItem value={pt} key={index}
                    onClick={()=>handleCityChange(pt)}
                    >
                        <Checkbox checked={city.indexOf(pt) > -1}/>
                        <ListItemText primary={pt} />
                    </MenuItem>                  
                )}
                <Divider />
                {cityOptions.filter(f=>f.startsWith(citySearch.toUpperCase()) && city.indexOf(f) === -1).slice(0,15).map((pt, index)=>
                    <MenuItem value={pt} key={index}
                    onClick={()=>handleCityChange(pt)}
                    >
                        <Checkbox checked={city.indexOf(pt) > -1}/>
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