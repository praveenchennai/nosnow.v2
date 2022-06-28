import React from 'react';
import { Divider,  Grid, Typography, Container} from '@mui/material';
import { createTheme } from "@mui/material/styles";



const theme = createTheme();


const Content1 = () => {
    return (
        <React.Fragment>
            <Container 
                direction="flex" 
                disableGutters 
                maxWidth="false"
                sx={{
                    backgroundColor: "#56516b",
                    padding: "40px"
                }}
            >
                <Grid container item maxWidth={"md"} md={12}
                    display="flex"
                    justifyContent="center"
                >
                    <Grid container item md={3} display="flex" direction="column" justifyContent="center" alignContent="center">
                        <Divider 
                            sx={{
                                borderColor: "#fff"
                            }}
                        />
                    </Grid>
                    <Grid container item md={6}>
                        <Typography 
                            align="center"
                            sx={{
                                color:"#fff",
                                fontWeight: "500",
                                fontSize: "20px",
                                padding: "40px"
                            }}

                        >
                            Buying and Selling Naples Florida Real Estate Has Never Been Easier!
                        </Typography>
                    </Grid>
                    <Grid container item md={3} display="flex" direction="column" justifyContent="center" alignContent="center">
                        <Divider 
                            sx={{
                                borderColor: "#fff"
                            }}
                        />
                    </Grid>
                    <Grid container item md={3}/>
                    <Grid container item md={6}>
                        <Typography 
                            component={'span'}
                            sx={{
                                color:"#fff",
                                fontWeight: "500",
                                fontSize: "18px",
                                paddingBottom: "2px!important",
                                padding: "10px",
                                textAlign: "justify",
                                lineHeight: "2.5"
                            }}
                        >
                            Naples, one of the most vibrant and growing cities on Florida's immaculate west coast, offers a supremely high standard of living. NoSnowNaples.com is dedicated to supporting all the surrounding areas of SW Florida. Here you'll find all types of real estate, a comprehensive business directory, and things to do in area including world class golf, area restaurants, entertainment, beaches, shopping and more. Use the links below to start exploring our new "Lifestyle Search Feature" where you can now shop by your lifestyle choice. Golf, Boating, Waterfront, Luxury, Estate Homes as well as Gulf Front Properties all pre-selected for an easier search.
                        </Typography>
                    </Grid>
                    <Grid container item md={3}/>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Content1;