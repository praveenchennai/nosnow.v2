import React, { useState} from 'react';
import { makeStyles } from '@mui/styles';
import {Chip, Grid, CardMedia, Typography} from '@mui/material';
import { listingCss } from 'common/style/style';

const useStyles = makeStyles(listingCss());

const SlideShow = (props) => {
    const [noimage] = useState('https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/defaultproperty.webp')
    var {
        PublicRemarks, Media, MlsStatus,
        MLSAreaMajor, ListPrice, 
        ListingId, UnparsedAddress, 
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
                >
                </CardMedia>
        </React.Fragment>
    );
}

export default SlideShow;