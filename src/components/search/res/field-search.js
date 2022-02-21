import React, {useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {Grid, Tooltip, Dialog, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import CityPopUp from './city-popup';
import CommunityPopUp from './community-popup';
import SubCondoPopUp from './condo-popup';

const FieldSearch = () => { 
    const theme = useTheme();
    const city = useSelector(state=>state.res.city) || [];
    const community = useSelector(state=>state.res.community) || [];
    const subCondo = useSelector(state=>state.res.subCondo) || [];
    const [cdra, setcDra] = useState(false);
    const [cmdra, setcmDra] = useState(false);
    const [scdra, setscDra] = useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

return ( 
    <React.Fragment>
        <Grid md={4} sm={6} xs={12} item>
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
        <Grid md={4} sm={6} xs={12} item>
            <Button 
                variant="outlined" 
                fullWidth
                onClick={()=>setcmDra(true)}
                sx={{
                    height: "100%",
                    color: '#56516b',
                    border: "1px solid"
                }}
            >
                <Tooltip title={community?.join(', ') || ''}>
                    <Grid container item display="flex" direction="column">
                        <Typography variant="h6"
                            sx={{
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#56516b"
                            }}
                        >Community / Development Name</Typography>
                        <Typography 
                            sx={{
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "#56516b"
                            }}
                        >{community?.length} - Selected</Typography>
                    </Grid>
                </Tooltip>
            </Button>
            <Dialog 
                onClose={()=>setcmDra(false)} 
                open={cmdra}
                fullScreen={fullScreen}
                scroll={"body"}
            >
                <CommunityPopUp {...{cmdra, setcmDra}}/>
            </Dialog>
        </Grid>
        <Grid md={4} sm={6} xs={12} item>
            <Button 
                variant="outlined" 
                fullWidth
                onClick={()=>setscDra(true)}
                sx={{
                    height: "100%",
                    color: '#56516b',
                    border: "1px solid"
                }}
            >
                <Tooltip title={subCondo?.join(', ') || ''}>
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
                </Tooltip>
            </Button>
            <Dialog 
                onClose={()=>setscDra(false)} 
                open={scdra}
                fullScreen={fullScreen}
                scroll={"body"}
            >
                <SubCondoPopUp {...{scdra, setscDra}}/>
            </Dialog>
        </Grid>
    </React.Fragment>

)}

export default FieldSearch;