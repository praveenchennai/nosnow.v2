import React, { useState} from 'react';
import { makeStyles } from '@mui/styles';
import { useHistory, useParams } from "react-router-dom";
import {Chip, Divider, Grid, Grow, Paper, CardMedia, Card, CardContent, Typography} from '@mui/material';
import { listingCss } from 'common/style/style';
const useStyles = makeStyles(listingCss());

const LotCard = (props) => {
    const navi = useHistory();
    const [noimage, setNoImage] = useState('https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/defaultproperty.webp')
    var {
        LivingArea, 
        NABOR_GulfAccessYN, 
        LotSizeSquareFeet, 
        NABOR_LotType,
        LotSizeAcres, Media, MlsStatus,
        MLSAreaMajor, ListPrice, 
        ListingId, UnparsedAddress, 
        LotFeatures, CountyOrParish, WaterfrontYN
    } = props;

    const classes = useStyles();

    const [eli, setEli] = useState(2);

    const hoverChange = (params) =>{
        if(params==='in'){
            setEli(2)
        } else {
            setEli(1)
        }
        
    }

    const onProperty = (property) =>{
        navi.push(`/lots/${property}`)
    }

    return ( 
        <React.Fragment>

        <Grow in={true} style={{ transitionDelay: '50ms' }}>
 
        <Card 
            className={classes.propertyCard} 
            elevation={1}
            onMouseOver={()=>hoverChange('in')}
            onMouseOut={()=>hoverChange('out')}
            sx={{
                position: 'relative',
                cursor: "pointer"
            }}
            // onClick={() => window.open(`https://nosnownaples.com/lot-land/${ListingId}/${UnparsedAddress}`)}
            onClick={() => onProperty(ListingId)}
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
                    <Typography sx={{fontSize: "10px", fontWeight: "400"}}>{UnparsedAddress || ''}</Typography>
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
                <Typography sx={{color:"#fff", fontSize: "14px", fontWeight: "400"}}>{MLSAreaMajor}</Typography>
                <Grid container item display="flex" justifyContent="space-between">
                    <Typography sx={{color:"#fff", fontSize: "12px", fontWeight: "400"}}>MLS: {ListingId}</Typography>
                    <Typography sx={{color:"#fff", fontSize: "12px", fontWeight: "400"}}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ListPrice)}</Typography>
                </Grid>
            </Grid>
            <CardMedia
                component="img"
                height="250"
                image={Media ? Media[0] ? Media[0].MediaURL || noimage : noimage : noimage}
                alt={UnparsedAddress}
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
                label={MlsStatus} 
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
                <Typography 
                    sx={{
                        fontSize: "12px", 
                        fontWeight: "600",
                        color: "#565168"
                    }}
                >
                    {LotFeatures?.join(", ") || ''}
                </Typography>
                <Grid container item md={12} alignItems="center" justifyContent="space-between"> 
                <Typography noWrap
                    sx={{
                        fontSize: "11px", 
                        fontWeight: "500",
                        flexGrow: 1
                    }}
                    component="div"
                >    
                    {CountyOrParish || ''}
                </Typography>
                <Typography noWrap align="right"
                    sx={{
                        fontSize: "11px", 
                        fontWeight: "500",
                        flexGrow: 1
                    }}
                    component="div"
                >    
                    {NABOR_LotType || ''}
                </Typography>
                </Grid>
                <Divider sx={{marginTop: "10px", marginBottom: "10px"}}/>
                <Grid container item md={12} justifyContent="space-evenly" spacing={1}
                    sx={{
                        marginBottom: "5px"
                    }}
                >
                    <Grid container item xs={4} direction="column" alignItems="center" justifyContent="center">
                        <Typography sx={{fontSize: "12px", fontWeight: "400"}}>Payment</Typography>
                        <Typography sx={{fontSize: "14px", fontWeight: "500"}}>{new Intl.NumberFormat('en-US',  {style: 'currency', currency: 'USD' }).format(LotSizeSquareFeet)  || ''}</Typography>
                    </Grid>
                    <Grid container item xs={4} direction="column" alignItems="center" justifyContent="center">
                        <Typography sx={{fontSize: "12px", fontWeight: "400"}}>Acre</Typography>
                        <Typography sx={{fontSize: "14px", fontWeight: "500"}}>{LotSizeAcres || ''}</Typography>
                    </Grid>
                    <Grid container item xs={4} direction="column" alignItems="center" justifyContent="center">
                        <Typography sx={{fontSize: "12px", fontWeight: "400"}}>Sqft</Typography>
                        <Typography sx={{fontSize: "14px", fontWeight: "500"}}>{LotSizeSquareFeet  || ''}</Typography>
                    </Grid>

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
                        marginBottom: "5px"
                    }}
                >
                    <Grid container item xs={5} direction="column" alignItems="center" justifyContent="center">
                        <Typography sx={{fontSize: "12px", fontWeight: "400"}}>Gulf Access</Typography>
                        <Typography sx={{fontSize: "14px", fontWeight: "500"}}>{NABOR_GulfAccessYN?'Yes':'No'}</Typography>
                    </Grid>
                    <Divider orientation="vertical" sx={{marginTop: "5px", height:"25px", width: "1px", marginBottom: "5px"}}/>
                    <Grid container item xs={5} direction="column" alignItems="center" justifyContent="center">
                        <Typography sx={{fontSize: "12px", fontWeight: "400"}}>Water Front</Typography>
                        <Typography sx={{fontSize: "14px", fontWeight: "500"}}>{WaterfrontYN?'Yes':'No'}</Typography>
                    </Grid>
                </Grid>
            </Paper>
            {/* <CardActions>
                <AddAlertIcon />
                <PanoramaIcon />
                <ShareIcon />
            </CardActions> */}
        </Card>
        </Grow>
    </React.Fragment>
    );
}

export default LotCard;