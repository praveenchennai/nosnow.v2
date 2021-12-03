import React  from 'react';
import {Container, Grid, Card } from '@mui/material';

const PropertyMain = () => {
    return ( 
        <Container component="main" maxWidth="xl">
            <Grid container item md={4}>
                <Card >
                    
                </Card>
            </Grid>
            <Grid container item md={8}></Grid>
        </Container>
    );
}

export default PropertyMain;