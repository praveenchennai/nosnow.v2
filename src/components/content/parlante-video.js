import React from 'react';
import { Container, List, Typography, Grid, Card, CardMedia } from '@mui/material';
const ContentMain = () => {

return (
    <Container component="main" maxWidth="lg" 
        sx={{
            minHeight: "70vh"
        }}
    >
        <Grid container item display={'flex'} md={12}> 
            <Typography fullWidth variant='h6'
                sx={{
                    marginY: "40px"
                }}
            >The Parlante Group Real Estate | Downing-Frye Realty, Inc.</Typography >
            <Grid item md={6}>
                <Typography fullWidth variant='body1'
                    sx={{
                        marginY: "20px"
                    }}
                >We keep it simple "Always do what is best for our customer.</Typography>
                <Typography fullWidth variant='body1'
                sx={{
                    marginY: "20px"
                }}
                >AND the result is inevitable. From the moment you partner with our team, The Parlante group immediately goes to work for you.</Typography>
                <Typography fullWidth variant='body1'
                sx={{
                    marginY: "20px"
                }}
                >Rick, our team leader, strongly believes in "active marketing" as opposed to "passive marketing". He prospects daily via phone, email and internet to maximize the exposure of your home. He also contacts his database of past customers, investors and other agents to promote properties to prospective buyers.</Typography>
                <Typography fullWidth variant='body1'
                sx={{
                    marginY: "20px"
                }}
                >Our active approach benefits our clients, helping them achieve their dreams of home ownership and financial diversification.</Typography>
            </Grid>
            <Grid item md={6} sx={
                {marginBottom: "50px"}
            }>
                <Card>
                    <video width="100%" height="100%" controls autoplay>
                        <source src="https://dl.dropboxusercontent.com/s/sd08gb0lt8rbn6p/about.mp4?dl=0" type="video/mp4" />
                    </video>
                </Card>
            </Grid>
        </Grid>
    </Container>
)}

export default ContentMain;






