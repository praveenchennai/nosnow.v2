import React, {useState} from 'react';
import { Grid, Stack, Typography, Link} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import { useEnvironmentQuery } from 'services/content';

const theme = createTheme();

const Environment = (props) => {
    const [popUp, setPopUp] = useState(false);
    const [snackBar, setSnackBar] = useState(false);

    var value = {
        popUp: popUp,
        setPopUp: setPopUp,
        snackBar: snackBar,
        setSnackBar: setSnackBar
    }
    
    const {content} = useEnvironmentQuery({}, {
        selectFromResult: ({ data, status }) =>({
            content: data || []
        })
    })

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
                    marginTop: "20px"
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
                                    marginTop: "20px",
                                    fontSize: "18px",
                                    color: "#fff!important",
                                    [theme.breakpoints.down('lg')]: {
                                        fontSize: "16px",
                                        fontStyle: "italic"
                                    }
                                }}
                            >
                                {c}
                            </Typography>
                        </React.Fragment>
                    )}
                    <Grid container item md={12} 
                        sx={{
                            marginTop:"10px"
                        }}
                    >
                        <Typography
                                sx={{
                                    marginTop: "20px",
                                    fontSize: "18px",
                                    color: "#fff!important",
                                    [theme.breakpoints.down('lg')]: {
                                        fontSize: "16px",
                                        fontStyle: "italic"
                                    }
                                }}
                            >
                                To request an environmental assessment or need assistance with wetland permitting please reach out to us at <Link target="_blank" href="https://www.tropicalenvironmentalconsultants.com" >www.TropicalEnvironmentalConsultants.com</Link> or give us a call at 239-455-6232.
                            </Typography>
                    </Grid>
                    <Grid container item md={12} 
                        sx={{
                            marginTop:"10px"
                        }}
                    >
                    {content?.signature?.map((c, i)=>
                        <Grid key={i} container item direction={"column"} md={12}>    
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: "bolder",
                                    color: "#fff!important",
                                    [theme.breakpoints.down('lg')]: {
                                        fontSize: "16px",
                                        fontStyle: "italic"
                                    }
                                }}
                            >
                                {c}
                            </Typography>
                        </Grid>
                    )}
                    </Grid>
                    <Grid container item md={12} 
                        sx={{
                            marginTop:"10px"
                        }}
                    >
                        <Typography
                                sx={{
                                    marginTop: "20px",
                                    fontSize: "18px",
                                    color: "#fff!important",
                                    [theme.breakpoints.down('lg')]: {
                                        fontSize: "16px",
                                        fontStyle: "italic"
                                    }
                                }}
                            >
                                Website: <Link target="_blank" href="https://www.tropicalenvironmentalconsultants.com" >www.TropicalEnvironmentalConsultants.com</Link>
                            </Typography>
                    </Grid>
                    <Grid container item md={12} 
                        sx={{
                            marginTop:"10px",
                            marginBottom: "12px",
                        }}
                    >
                    {content?.statement?.map((c, i)=>
                        <Grid key={i} container item direction={"column"} md={12}>    
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                   
                                    fontWeight: "bolder",
                                    color: "#fff!important",
                                    [theme.breakpoints.down('lg')]: {
                                        fontSize: "16px",
                                        fontStyle: "italic"
                                    }
                                }}
                            >
                                {c}
                            </Typography>
                        </Grid>
                    )}
                    </Grid>
                </Grid>
                <Grid container item md={1} xs={1}/>
            </Grid>
        </Stack>
    </React.Fragment>   

    )}

export default Environment;