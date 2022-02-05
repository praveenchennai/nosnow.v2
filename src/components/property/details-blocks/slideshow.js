import React, { useState} from 'react';
import { makeStyles } from '@mui/styles';
import {Toolbar, Typography, AppBar, CardMedia, Container, IconButton  } from '@mui/material';
import { listingCss } from 'common/style/style';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const useStyles = makeStyles(listingCss());

const SlideShow = (props) => {
    const [i, seti] = useState(0);
    const [imageLoading, setImageLoading] = useState(false);
        const [noimage] = useState('https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/defaultproperty.webp')
        //const [noimage, setNoImage] = useState('https://dvvjkgh94f2v6.cloudfront.net/7487d661/46841388/83dcefb7.jpeg')
    var { Media, UnparsedAddress } = props;
    const classes = useStyles();
    const [eli, setEli] = useState(2);

    const hoverChange = (params) =>{
        if(params==='in'){
            setEli(2)
        } else {
            setEli(1)
        }
        
    }

    const mediaDecrease = () =>{
        console.log(i)
        seti(i-1)
    }

    const mediaIncrease = () =>{
        console.log(i)
        seti(i+1)
        setImageLoading(true)
    }

    const imageLoaded = () =>{
        console.log("imageLoaded")
        setImageLoading(false)
    }

    return ( 
        <Container maxWidth={false} disableGutters>
            <AppBar position="sticky" elevation={0} className={classes.appbar_site}>
                <Toolbar>
                    <Typography variant="h6"
                        sx={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#fff",
                            flexGrow: 1
                        }}
                    >{i+1} of {Media.length}</Typography>
                    <IconButton  
                        sx={{
                            color: "#ED6C02"
                        }}
                        onClick={()=>mediaDecrease()}
                        disabled={i===0}
                    >
                        <ArrowBackIosIcon />
                    </IconButton >
                    <IconButton  
                        sx={{
                            color: "#ED6C02"
                        }}
                        onClick={()=>mediaIncrease()}
                        disabled={i===Media.length-1}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton >
            </Toolbar>
        </AppBar>
            
            <CardMedia
                component="img"
                height="auto"
                onLoad={()=>imageLoaded()}
                image={!imageLoading && Media ? Media[i] ? Media[i].MediaURL || noimage : noimage : noimage}
                alt={UnparsedAddress}
                onMouseOver={()=>hoverChange('in')}
                onMouseOut={()=>hoverChange('out')}
                sx={{
                    width: "1000px"
                }}
            >
            </CardMedia>
        
        </Container>
    );
}

export default SlideShow;