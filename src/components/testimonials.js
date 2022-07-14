import React, {useState} from 'react';
import { Grid, Button, Stack, Typography, Dialog} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import { useTestimonialsQuery } from 'services/content';

const theme = createTheme();

const Testimonials = (props) => {
    const [popUp, setPopUp] = useState(false);
    const [snackBar, setSnackBar] = useState(false);

    var value = {
        popUp: popUp,
        setPopUp: setPopUp,
        snackBar: snackBar,
        setSnackBar: setSnackBar
    }
    
    const {content} = useTestimonialsQuery({}, {
        selectFromResult: ({ data, status }) =>({
            content: data || []
        })
    })

    console.log(content)


    return (
    <React.Fragment>
        <Stack
            direction="column" 
            spacing={3}
            alignItems="center" 
            sx={{
                backgroundColor: "#404040",
                minHeight: "100vh"
                
            }}
        >
            <Grid container item md={12}
                sx={{
                    marginTop: "70px"
                }}
            >
                <Grid container item md={1} xs={1}/>
                <Grid container item md={10} xs={10}>
                    <Grid container item direction={"column"} md={12}
                        sx={{
                            marginTop: "30px"
                        }}
                    >
                        <Typography
                            align="center"
                            sx={{
                                fontSize: "30px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                textAlign: "center",
                                [theme.breakpoints.down('xl')]: {
                                    fontSize: "30px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            {content?.title || ''}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#fff!important",
                                textAlign: "center",
                                [theme.breakpoints.down('xl')]: {
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }
                            }}
                        >
                            {content?.subTitle || ''}
                        </Typography>
                    </Grid>
                    {content?.content?.map((c, i)=>
                        <React.Fragment key={i}>    
                            <Typography
                                sx={{
                                    marginTop: "30px",
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    width: "100%",
                                    color: "#fff!important",
                                    [theme.breakpoints.down('lg')]: {
                                        fontSize: "16px",
                                        fontWeight: "bold"
                                    }
                                }}
                            >
                                {c.title}
                            </Typography>
                            <Typography
                                sx={{
                                    marginTop: "20px",
                                    fontSize: "16px",
                                    color: "#fff!important",
                                    fontStyle: "italic",
                                    [theme.breakpoints.down('lg')]: {
                                        fontSize: "16px",
                                        fontStyle: "italic"
                                    }
                                }}
                            >
                                {c.content}
                            </Typography>
                        </React.Fragment>
                    )}
                </Grid>
                <Grid container item md={1} xs={1}/>
            </Grid>
        </Stack>
    </React.Fragment>   

    )}

export default Testimonials;