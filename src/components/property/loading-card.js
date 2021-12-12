import React, { useState} from 'react';
import { makeStyles } from '@mui/styles';
import {Chip, Divider, Skeleton, Grid, Grow, Paper,  CardMedia, Card, Typography} from '@mui/material';
import { listingCss } from 'common/style/style';

import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';

const useStyles = makeStyles(listingCss());


const PropertyCard = () => {
    const [noimage] = useState('https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/defaultproperty.webp')
    const classes = useStyles();
    const [eli, setEli] = useState(2);
    const hoverChange = (params) =>{
        if(params==='in'){
            setEli(2)
        } else {
            setEli(1)
        }
        
    }

    return ( 
        <React.Fragment>
            <Card 
                className={classes.propertyCard} 
                elevation={1}
                onMouseOver={()=>hoverChange('in')}
                onMouseOut={()=>hoverChange('out')}
                sx={{
                    position: 'relative',
                    cursor: "pointer"
                }}
            >
                <Grid container item md={12} display="flex"
                    sx={{
                        backgroundColor: "#56516b",
                        opacity:".9",
                        color: "#fff",
                        right: 0
                    }}
                >
                    <Grid container item md={12} alignItems="center" justifyContent="flex-start"
                        sx={{
                            backgroundColor: "#56516b",
                            color: "#fff",
                            opacity:"1",
                            paddingLeft: "10px",
                            right: 0
                        }}
                    >
                        <Skeleton variant="text" sx={{
                            backgroundColor: "#a1a1a7",
                            opacity:".2",
                            color: "#fff",
                            width: "300px"
                        }}/>
                    </Grid>
                </Grid>
                <Grid container item md={12} display="flex" direction="column"
                    sx={{
                        backgroundColor: "#56516b",
                        color: "#fff",
                        padding: "10px!important",
                        right: 0
                    }}
                >
                    <Skeleton variant="text" sx={{
                            backgroundColor: "#a1a1a7",
                            opacity:".2",
                            color: "#fff",
                            width: "200px"
                        }}/>
                    <Grid container item display="flex" justifyContent="space-between">
                        <Skeleton variant="text" sx={{
                            backgroundColor: "#a1a1a7",
                            opacity:.2,
                            color: "#fff",
                            width: "50px"
                        }}/>
                        <Skeleton variant="text" sx={{
                            backgroundColor: "#a1a1a7",
                            opacity:.2,
                            color: "#fff",
                            width: "50px"
                        }}/>
                    </Grid>
                </Grid>
                <CardMedia
                    component="img"
                    height="250"
                    image={noimage}
                    alt="loading"
                    onMouseOver={()=>hoverChange('in')}
                    onMouseOut={()=>hoverChange('out')}
                >
                </CardMedia>
                <Chip  
                    variant="contained" 
                    color="warning" 
                    sx={{
                        borderRadius: "5px",
                        position: 'absolute',
                        top: 80,
                        left: 10,
                        //width:"30%"
                    }} 
                    label={<Skeleton variant="text" 
                        sx={{
                            backgroundColor: "#efdac4",
                            color: "#efdac4",
                            width: "50px"
                        }}
                    />} 
                />
                
                <Paper 
                    elevation={eli}
                    sx={{
                        position: "absolute",
                        background: "#fff",
                        padding: "10px",
                        paddingBottom: "5px",
                        top: "270px",
                        right: "10px",
                        left:"10px"
                    }}
                >
                    <Skeleton variant="text" 
                        sx={{
                            backgroundColor: "#a1a1a7",
                            opacity:".2",
                            color: "#fff",
                            width: "300px"
                        }}
                    />
                    <Grid container item md={12} alignItems="center" justifyContent="space-between"> 
                    <Skeleton variant="text"
                        sx={{
                            backgroundColor: "#a1a1a7",
                            opacity:".2",
                            color: "#fff",
                            width: "70px"
                        }}
                    />
                    <Skeleton variant="text"
                        sx={{
                            backgroundColor: "#a1a1a7",
                            opacity:".2",
                            color: "#fff",
                            width: "70px"
                        }}
                    />
                    </Grid>
                    <Divider sx={{marginTop: "10px", marginBottom: "10px"}}/>
                    <Grid container item md={12} justifyContent="space-evenly" spacing={1}
                        sx={{
                            marginTop: "10px",
                            marginBottom: "10px"
                        }}
                    >
                        <Chip variant="outlined" 
                            label={<Skeleton variant="text" sx={{
                                backgroundColor: "#a1a1a7",
                                opacity:".2",
                                color: "#fff",
                                width: "70px"
                            }}
                        />} 
                            
                            sx={{
                                border: "none"
                            }}    
                        />
                        <Chip variant="outlined" 
                            label={<Skeleton variant="text" sx={{
                                backgroundColor: "#a1a1a7",
                                opacity:".2",
                                color: "#fff",
                                width: "70px"
                            }}
                        />} 
                            sx={{
                                border: "none"
                            }}    
                        />
                        <Chip variant="outlined" 
                            label= {<Skeleton variant="text" sx={{
                                backgroundColor: "#a1a1a7",
                                opacity:".2",
                                color: "#fff",
                                width: "70px"
                            }}
                        />}
                            sx={{
                                border: "none"
                            }}    
                        />
                    </Grid>
                </Paper>
                <Paper 
                    sx={{
                        background: "#fff",
                        padding: "10px",
                        marginTop: "60px"
                    }}

                >
                    <Grid container item xs={12} justifyContent="space-evenly"
                        sx={{
                            marginBottom: "10px"
                        }}
                    >
                        <Grid container item xs={5} direction="column" alignItems="center" justifyContent="center">
                            <Skeleton variant="text" sx={{
                                    backgroundColor: "#a1a1a7",
                                    opacity:".2",
                                    color: "#fff",
                                    width: "100px"
                                }}
                            />
                        </Grid>
                        <Divider orientation="vertical" sx={{marginTop: "5px", height:"25px", width: "1px", marginBottom: "5px"}}/>
                        <Grid container item xs={5} direction="column" alignItems="center" justifyContent="center">
                            <Skeleton variant="text" sx={{
                                    backgroundColor: "#a1a1a7",
                                    opacity:".2",
                                    color: "#fff",
                                    width: "100px"
                                }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Card>
        </React.Fragment>
    );
}

export default PropertyCard;