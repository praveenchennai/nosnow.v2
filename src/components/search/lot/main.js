import React from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import {Container, Grid} from '@mui/material';
import Keyword from './keyword'; 
import FieldSearch from './field-search'; 
import PriceRange from './price-range';
import Fee from './fee';
import Acres from './acres';
import Others from './others';
import CheckFields from './check-fields';

const useStyles = makeStyles(listingCss());

const LotMain = () => {
    const classes = useStyles();
    

    return ( 
        <Container component="main" maxWidth="lg" sx={{minHeight:'80vh'}}>
            {/* <Keyword />
            <Grid container display="flex" justify="space-between" spacing={2} className={classes.mt25}>
                <FieldSearch />
            </Grid>
            <Grid container display="flex" justify="space-between" spacing={2} className={classes.mt25}>
                <PriceRange />
                <Acres />
            </Grid>
            <Grid container display="flex" justify="space-between" spacing={2} className={classes.mt25}>
                <Fee />
                <Others />
            </Grid>
            <Grid container display="flex" justify="flex-start" spacing={2} className={classes.mt25}>
                <CheckFields />
            </Grid>  */}
            
        </Container>
    );
}

export default LotMain;