import React from 'react';
import { Card, Paper, Grid, CardMedia, CardContent, Typography, Divider} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from "@mui/material/styles";
import Page1 from './page1'


const theme = createTheme();

const useStyles = makeStyles(()=>({
    root: {
      //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      color: 'white',
      width: "100vw",
      top: 0,
    },
    firstName:{
        fontSize: "120px",
        color: "#B91224!important",
        lineHeight: "0.6",
        [theme.breakpoints.down('md')]: {
            fontSize: "40px",
            fontWeight: "bold"
        },
    },
    page1: {
        position: "relative",
        top: "-120px"
    },
    lastName:{
        paddingLeft: "90px",
        color: "#000",
        fontSize: "90px",
        [theme.breakpoints.down('md')]: {
            fontSize: "40px",
            fontWeight: "bold",
            paddingLeft: "20px",
        },
    },
    heading1:{
        position: 'absolute',
        top: 150
    },
    para:{
        [theme.breakpoints.down('md')]: {
            position: 'inherit',
            fontSize: "20px",
            fontWeight: "bold",
            //padding: "10px",
            margin: "0px",
            width: "100vw",
        },
        [theme.breakpoints.down('xl')]: {
            display: 'none'
        },
        position: 'absolute',
        top: 440,
        backgroundColor: "#fff",
        opacity: 0.8,
        padding: "10px",
        margin: "20px",
        width: "40%"
    },
    line: {
        borderWidth: "3px",
        borderColor: "#B91224!important"
    },
    title: {
        fontSize: "35px",
        fontWeight: "bold",
        color: "#B91224!important",
        [theme.breakpoints.down('md')]: {
            fontSize: "16px",
            fontWeight: "bold"
        }
    },
    pt10: {
        paddingTop: "10px",
        textAlign: "justify"
    },
    para1: {
        paddingTop: "10px",
        textAlign: "justify",
        color: "#000"
    }

}));

const Home = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Card>
                <CardMedia className={classes.root} component="img"
                    src="https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/rickhome.webp"
                    alt="Rick Parlante"
                />
                <Grid container item md={12} direction="column">
                    <Grid container item md={6}>
                        <CardContent className={classes.heading1}>
                            <Typography variant={'h1'} className={classes.firstName}>RICK</Typography>
                            <Typography variant={'h2'} className={classes.lastName}>PARLANTE</Typography>
                            <Typography variant={'body1'} className={classes.title}>Playing to Hit his Strengths</Typography>
                            <Divider className={classes.line} />
                        </CardContent>
                    </Grid>
                    <Paper className={classes.para} elevation={4} >
                        <Typography variant={'body1'}  className={classes.para1}>
                            Hundreds of thousands of people have escaped to The Sunshine State just in the past year, and can we blame them? The weather, the beaches... there isn't much not to love about our great stage of Florida. Longtime REALTOR Richard Palante was in the restaurant industry as a business owner in Northeast Pennsylvania before making his own grand escape to Florida over 35 years ago.
                        </Typography>
                        <Typography variant={'body1'} className={classes.para1}>
                            Richard had no intentions of getting into real estate when he made the move to Naples. In fact, he and his wife opened up a new restaurant in Bonita Springs not long after settling. However, while selling his Pennslvania house, Richard's interest in the real estate industry was pipued by his agent, who saw qualities in Richard that would be a match made in heaven for real estate. So, once in Florida, the competitive guy he is, Richard eat down for an interview with a branch of Coldwell Banker, thus begining a brand new career that would open conuntless doors for him and his family. 
                        </Typography>
                        <Typography variant={'body1'} className={classes.para1}>
                            His first month in business, June 1987, set the trafectory for how Richard's entire career would upfold. "I'm going to be your sales leader for this entire year," he told the managers at his new company. They laughed that off, of course, telling him they appreciated his tenacity but that his goal was too far-fetched. After all, he started in the middle of the year and would be competing against seasoned, top-producing agents.
                        </Typography>
                    </Paper>
                </Grid>
            </Card>
            <Page1 className={classes.page1}/>
        </React.Fragment>
    )
}

export default Home;