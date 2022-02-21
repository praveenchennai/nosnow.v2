import React, {useState} from 'react';
import { Grid, Button, CardMedia, CardHeader, Card, Typography, Avatar, Dialog } from '@mui/material';
import ContactPopUp from './contact-popup';

const ContactCard = () => {
    const [popUp, setPopUp] = useState(false);
    console.log(popUp, setPopUp)
    var value = {
        popUp: popUp,
        setPopUp: setPopUp
    }
    return ( 
            <Card display="flex" direction={'column'}
                sx={{
                    position: 'absolute',
                    width: "350px",
                    top: '74px',
                    right: '10px',
                    height: "250px",
                    zIndex: "1000"
                }}
            >
                <Typography 
                    sx={{
                        fontSize: "14px", 
                        fontWeight: "700",
                        paddingLeft: "10px",
                        paddingTop: "10px"
                    }}
                >
                    YOUR REAL ESTATE EXPERT
                </Typography>
                <CardHeader 
                    avatar={
                        <Avatar>
                            <CardMedia
                                component="img"
                                height="40"
                                width="40"
                                src="https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/profile.webp"
                                alt="Rick Palante Profile"
                            />
                        </Avatar>
                    }
                    title={"Richard Parlante"}
                    subheader={"Naples, FLorida"}>
                </CardHeader>

                <Grid container item md={12} alignItems="center" direction="column" justifyContent="space-between"
                    sx={{
                        padding: "5px"
                    }}
                > 
                    
                </Grid>

            <Grid container item md={12} display="flex" direction="column"
                sx={{
                    padding: "10px!important",
                    right: 0
                }}
            >
                <Typography 
                    sx={{
                        fontSize: "14px"
                    }}
                >
                    Rick & Chris Parlante are professional real estate agents specializing in the South West Florida real estate market.
                </Typography>
            </Grid>
            <Grid container item md={12} display="flex" direction="column"
                sx={{
                    padding: "10px!important",
                    right: 0
                }}
            >
                <Button 
                    color={"primary"}
                    sx={{
                        fontSize: "14px",
                        backgroundColor: "#ED6C02",
                        color: "#fff",
                        "&:hover":{
                            backgroundColor: "#ED6C02",
                            color: "#fff"
                        }
                        
                    }}
                    onClick={()=>setPopUp(true)}
                >
                    Request Info
                </Button>
            </Grid>
            <Dialog 
                onClose={()=>setPopUp(false)} 
                open={popUp}
                scroll={"body"}
            >
                <ContactPopUp {...value}/>
            </Dialog>
            </Card>

    );
}

export default ContactCard;