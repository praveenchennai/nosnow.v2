import React, { useState} from 'react';
import { makeStyles } from '@mui/styles';
import {Chip, Divider, Grid, CardMedia, Card, CardContent, Typography} from '@mui/material';
import { listingCss } from 'common/style/style';
export const searchFields = React.createContext();
const useStyles = makeStyles(listingCss());


const PropertyCard = (props) => {
    const [noimage, setNoImage] = useState('https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/defaultproperty.webp')
    var {
        LivingArea, 
        YearBuilt, 
        BathroomsTotalDecimal, 
        NABOR_Bedrooms, Media, 
        MLSAreaMajor, ListPrice, 
        ListingId, UnparsedAddress, 
        ArchitecturalStyle, CountyOrParish
    } = props;

    const classes = useStyles();
    return ( 
        <React.Fragment>
            <Card className={classes.propertyCard}>
                <Grid container item md={12} display="flex" direction="column"
                    sx={{
                        backgroundColor: "#56516b",
                        color: "#fff",
                        padding: "10px!important",
                        right: 0
                    }}
                >
                    <Typography sx={{color:"#fff", fontSize: "16px", fontWeight: "500"}}>{MLSAreaMajor}</Typography>
                    <Grid container item display="flex" justifyContent="space-between">
                        <Typography sx={{color:"#fff", fontSize: "14px", fontWeight: "400"}}>MLS: {ListingId}</Typography>
                        <Typography sx={{color:"#fff", fontSize: "14px", fontWeight: "400"}}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ListPrice)}</Typography>
                    </Grid>
            </Grid>
                <CardMedia
                    component="img"
                    height="250"
                    image={Media ? Media[0] ? Media[0].MediaURL || noimage : noimage : noimage}
                    alt="green iguana"
                />
                
                <CardContent sx={{
                    padding: "10px"
                }}>
                    <Typography sx={{fontSize: "16px", fontWeight: "600"}}>{UnparsedAddress || ''}</Typography>
                    <Typography sx={{fontSize: "14px", fontWeight: "500"}}>{CountyOrParish || ''}</Typography>
                    <Divider sx={{marginTop: "10px", marginBottom: "10px"}}/>
                    <Typography sx={{fontSize: "14px", fontWeight: "600", marginBottom: "10px"}}>{ArchitecturalStyle?.join(", ") || ''}</Typography>
                    <Chip sx={{margin: "2px"}} label={`${BathroomsTotalDecimal || '?'} Baths` } />
                    <Chip sx={{margin: "2px"}} label={`${LivingArea || '?'} Sqft` } />
                    <Chip sx={{margin: "2px"}} label={`${NABOR_Bedrooms || '?'} Beds` } />
                    <Chip sx={{margin: "2px"}} label={`Built ${YearBuilt || '?'}` } />
                </CardContent>
            </Card>
        </React.Fragment>
    );
}

export default PropertyCard;