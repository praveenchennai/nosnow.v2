import React, { useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {Chip, Grid, CardMedia, Typography, Dialog} from '@mui/material';
import { listingCss } from 'common/style/style';
import SlideShow from './slideshow';

const useStyles = makeStyles(listingCss());

const PropertyDetails = (props) => {
    const theme = useTheme();
    const [slide, setSlide] = useState(false);
    //const [noimage] = useState('https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/defaultproperty.webp')
    const [noimage, setNoImage] = useState('https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/defaultproperty.webp')
    
    var {
        PublicRemarks, Media, MlsStatus,
        MLSAreaMajor, ListPrice, 
        ListingId, UnparsedAddress, 
    } = props;

    const classes = useStyles();

    const [eli, setEli] = useState(2);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const hoverChange = (params) =>{
        if(params==='in'){
            setEli(2)
        } else {
            setEli(1)
        }
    }

    return ( 
        <React.Fragment>
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
                    height="auto"
                    image={Media ? Media[0] ? Media[0].MediaURL || noimage : noimage : noimage}
                    alt={UnparsedAddress}
                    onMouseOver={()=>hoverChange('in')}
                    onMouseOut={()=>hoverChange('out')}
                    sx={{
                        marginBottom: '1px'
                    }}
                    onClick={()=>setSlide(true)}
                >
                </CardMedia>
                {Media && Media[3]?
                <Grid container item md={12} display="flex" justifyContent="space-between" spacing={.2} onClick={()=>setSlide(true)}>
                    <Grid container item md={4}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={Media ? Media[1] ? Media[1].MediaURL || noimage : noimage : noimage}
                            alt={UnparsedAddress}
                            onMouseOver={()=>hoverChange('in')}
                            onMouseOut={()=>hoverChange('out')}
                        >
                        </CardMedia>
                    </Grid>
                    <Grid container item md={4}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={Media ? Media[2] ? Media[2].MediaURL || noimage : noimage : noimage}
                            alt={UnparsedAddress}
                            onMouseOver={()=>hoverChange('in')}
                            onMouseOut={()=>hoverChange('out')}
                        >
                        </CardMedia>
                    </Grid>
                    
                        <Grid container item md={4}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={Media ? Media[3] ? Media[3].MediaURL || noimage : noimage : noimage}
                                alt={UnparsedAddress}
                                onMouseOver={()=>hoverChange('in')}
                                onMouseOut={()=>hoverChange('out')}
                                onClick={()=>setSlide(true)}
                            />
                        </Grid>
                    
                </Grid>
                :''}
                <Dialog 
                        onClose={()=>setSlide(false)} 
                        open={slide}
                        fullScreen={fullScreen}
                        fullWidth={true}
                        PaperProps={{
                            sx:{
                                maxWidth:"1000px"
                            }
                        }}
                    >
                        <SlideShow {...{slide, setSlide, Media}}/>
                    </Dialog>
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
                <Chip  
                    variant="contained" 
                    color="warning" 
                    sx={{
                        borderRadius: "5px",
                        position: 'absolute',
                        top: 80,
                        right: 10,
                        cursor: "pointer"
                        //width:"30%"
                        
                    }} 
                    onClick={()=>setSlide(true)}
                    label={'View All Photos'} 
                />

        </React.Fragment>
    );
}

export default PropertyDetails;