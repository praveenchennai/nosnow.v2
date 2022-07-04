import React, { useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {Chip, Grid, CardMedia, Typography, Dialog} from '@mui/material';
import { listingCss } from 'common/style/style';
import SlideShow from './slideshow';

const useStyles = makeStyles(listingCss());

const PropertyDetails1 = (props) => {
    const theme = useTheme();
    const [slide, setSlide] = useState(false);
    //const [noimage] = useState('https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/defaultproperty.webp')
    const [noimage, setNoImage] = useState('https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/defaultproperty.webp')
    
    var {
        Media, MlsStatus,
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
                        <Grid container item xs={4}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={Media ? Media[1] ? Media[1].MediaURL || noimage : noimage : noimage}
                                alt={UnparsedAddress}
                                onMouseOver={()=>hoverChange('in')}
                                onMouseOut={()=>hoverChange('out')}
                            />
                        </Grid>
                    <Grid container item xs={4}>
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
                    <Grid container item xs={4}>
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
                    top: 20,
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
                    top: 20,
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

export default PropertyDetails1;