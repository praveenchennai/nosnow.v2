import React from 'react';
import { Paper,  Button, Link, Grid, Typography} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { useHistory, useParams } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';

const Box1 = () => {
    const navi = useHistory();
    const onSearch = () =>{
        navi.push('/search')
    }
    const theme = useTheme();
    const belowmd = useMediaQuery(theme.breakpoints.down('md'));
    console.log(belowmd)
    return (
        <React.Fragment>
            <Paper elevation={4} 
                sx={{
                    //display: { xs: 'none', md: 'block' },
                    width:{
                        xs: "400px",
                        sm: "650px",
                        md: "850px"
                    },
                    backgroundColor: "#56516b",
                    opacity: ".9"
                }}
            >
                <Grid container item
                    direction="column" 
                    justifyContent="center" 
                    alignItems="center" 
                    sx={{
                        backgroundColor: "#ff5722",
                        color: "#fff"
                    }}
                >
                    <Typography 
                        component={'span'}
                        sx={{
                            color:"#fff",
                            fontWeight: "500",
                            fontSize: {
                                xs: "12px",
                                sm: "20px"
                            },

                            padding: "10px"
                        }}

                    >
                        Ditch the apps and get serious about your next home search!
                    </Typography>
                </Grid>
                
                <Grid container item
                    display="flex"
                    direction="column" 
                    justifyContent="center" 
                    alignItems="center" 
                    sx={{
                        color: "#fff",
                        marginBottom: "20px",
                    }}
                >
                    <Typography 
                    component={'span'}
                        sx={{
                            color:"#fff",
                            fontWeight: "500",
                            fontSize: {
                                sx:"16px",
                                md:"38px"
                            },
                            paddingBottom: "2px!important",
                            padding: "10px",
                        }}
                    >
                        A Better way to find your Naples Home
                    </Typography>
                    <Typography 
                    component={'span'}
                        sx={{
                            color:"#fff",
                            fontWeight: "500",
                            fontSize: {
                                sx:"10px",
                                md:"18px"
                            },
                            padding: "2px"
                        }}
                    >
                        Use our Advanced MLS Search Tool for free now!
                    </Typography>
                </Grid>

                <Grid container item
                    md={12}
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                    sx={{display: { xs: 'none', md: 'flex' },}}
                >
                    <Grid container item
                        md={3}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <SearchIcon 
                            sx={{
                                fontSize: "50px",
                                color: "#fff"
                            }}
                        />
                        <Typography
                        component={'span'}
                            sx={{
                                color:"#fff",
                                fontSize: "12px",
                                textAlign: "justify",
                                padding: "2px"
                            }}
                        >
                            Find the exact home you want with our detailed and more granular search.
                        </Typography>
                    </Grid>
                    <Grid container item 
                        md={3}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <FormatListNumberedIcon 
                            sx={{
                                fontSize: "50px",
                                color: "#fff"
                            }}
                        />
                        <Typography
                        component={'span'}
                            sx={{
                                color:"#fff",
                                fontSize: "12px",
                                textAlign: "justify",
                                padding: "2px"
                            }}
                        >
                            Get all the details before anyone else does with more up-to-date listings.
                        </Typography>
                    </Grid>
                    <Grid container item 
                        md={3}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <OpenInBrowserIcon 
                            sx={{
                                fontSize: "50px",
                                color: "#fff"
                            }}
                        />
                        <Typography
                        component={'span'}
                            sx={{
                                color:"#fff",
                                fontSize: "12px",
                                textAlign: "justify",
                                padding: "2px",
                                }}
                        >
                            Place an offer before the competition and know your exact monthly payment.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item
                    direction="row" 
                    justifyContent="center" 
                    alignItems="center" 
                    sx={{
                        padding: "30px"

                    }}
                >
                    <Button 
                        variant="contained"
                        sx={{
                            backgroundColor: "#ff5722",
                            color: "#fff",
                            fontSize: "15px",
                            margin: "20px"
                        }}
                        fullWidth={belowmd}
                        onClick={()=>onSearch()}
                    >
                        Detailed Search
                    </Button>
                    <Button 
                        variant='contained' 
                        sx={{
                            backgroundColor: "#ff5722",
                            color: "#fff",
                            fontSize: "15px",
                            margin: "20px"
                        }}
                        fullWidth={belowmd}
                        target="_blank" href="http://www.nosnowevalue.com/"
                    >
                        What's My Home Worth?
                    </Button>
                    <Button 
                        variant='contained' 
                        sx={{
                            backgroundColor: "#ff5722",
                            color: "#fff",
                            fontSize: "15px",
                            margin: "20px"
                        }}
                        fullWidth={belowmd}
                        target="_blank" href="http://www.nosnowsells.com/"
                    >
                        Interested In Selling?
                    </Button>
                </Grid>
            </Paper>
        </React.Fragment>
    )
}

export default Box1;