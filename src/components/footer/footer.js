import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from "@mui/material/styles";
const theme = createTheme();
const useStyles = makeStyles({
    root: {
        // opacity: 0.9,
        backgroundColor: "#56516b",
        // position: "absolute"
        minHeight: "180px",
        position:"relative",
    },
    footer: {
        backgroundColor: "#56516b",
        paddingBottom: "5px",
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
    },

    pl10:{
        paddingLeft: "10px"
    },
    vsmall:{
        fontSize: '9px',
    }
});

const Footer = (props) => {
    console.log(props)
    const classes = useStyles();
    return (
        <React.Fragment>
            {props?.location?.pathname==='/'?
                <React.Fragment>
                    <AppBar position="static" className={classes.root} elevation={0}>
                        <Toolbar>
                            <img alt="logo"  src={`https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/logo.webp`} />
                        </Toolbar>
                        <Grid container item md={12} className={classes.pl10} display="flex" direction="column">
                            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>The Parlante Group Real Estate | Downing-Frye Realty, Inc.</Typography>
                            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>8950 Fontana Del Sol Way #100 Naples, FL 34109</Typography>
                            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>Direct Line 239-261-9050 | Fax 239-330-9004</Typography>
                            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>nosnownaples.com | Email: info@nosnownaples.com</Typography>
                        </Grid>
        
                    </AppBar>
                    <AppBar position="static" className={classes.footer} elevation={0}>
                        <Grid 
                            container item md={12} 
                            sx={{ width: '65%' }} className={classes.pl10} 
                            display="flex" direction="column" 
                            alignSelf="center"
                        >
                            <Typography align="center" variant="body2" className={classes.vsmall} component="div" sx={{ flexGrow: 1 }}>© 2021 NoSnow Licensing™ (Trademark) - All Rights Reserved</Typography>
                            <Typography align="center" variant="body2" className={classes.vsmall} component="div" sx={{ flexGrow: 1 }}>No part of this website whether in whole or in part may be reproduced without the express permission of NoSnow Licensing™</Typography>
                            <Typography align="center" variant="body2" className={classes.vsmall} component="div" sx={{ flexGrow: 1 }}>The data relating to real estate for sale on this Web site comes in part from the Broker Reciprocity Program (BR Program) of M.L.S. of Naples, Inc. Properties listed with Brokerage firms other than Downing-Frye Realty Residential Real Estate, LLC are marked with the BR House Icon and detailed information about them includes the name of the listing brokers. The properties displayed may not be all the properties available through the BR Program.</Typography>
                        </Grid>
                    </AppBar>
                </React.Fragment>
            :
                <React.Fragment />      
            }
        </React.Fragment>
    )
}

export default Footer;

//https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/logo.webp