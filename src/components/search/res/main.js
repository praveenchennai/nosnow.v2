import React from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import {Container, Grid} from '@mui/material';
import KeywordSearch from './keyword'; 
import FieldSearch from './field-search'; 
import TypeSearch from './type-search';
import Garage from './garage';
import PriceRange from './price-range';
import Payment from './payment';
import Beds from './beds';
import Baths from './baths';
import Fee from './fee';
import Sqft from './sqft';
import Year from './year';
import Others from './others';
import CheckFields from './check-fields';

const useStyles = makeStyles(listingCss());

const ResMain = () => {
    const classes = useStyles();

    return ( 
        <Container component="main" maxWidth="lg" sx={{minHeight:'calc(100vh - 120px)'}}>
            <KeywordSearch />

            <Grid container justify="space-between" spacing={2} className={classes.mt10}>
                <FieldSearch />
                <TypeSearch />
                <Garage />
            </Grid>

            <Grid container justify="space-between" spacing={2} className={classes.mt10}>
                <Others />            
            </Grid>

           <Grid  container justify="space-between" spacing={2} className={classes.mt10}>
                <PriceRange />
                {/* <Grid sm={2} xs={12} container item justify="center" alignItems="center">
                    <Typography variant="body1" component="h2" align="center">OR</Typography>
                </Grid> */}
                <Payment />
            </Grid>

             <Grid container justify="space-between" spacing={2} className={classes.mt10}>
                <Beds />
                <Baths />              
            </Grid>

            
            <Grid container justify="space-between" spacing={2} className={classes.mt10}>
                {/* <Fee /> */}
                <Year />
                <Sqft />             
            </Grid>

           


            <Grid container justify="space-between" spacing={2} className={classes.mt10}>
                <CheckFields />
            </Grid>
            
        </Container>
    );
}

export default ResMain;