import React from 'react';
import { AppBar, Grid, Box, Link, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';
import LeftMenu from '../layout/leftmenu'
import { useTheme } from '@mui/material/styles';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#56516b",
        opacity: ".9"
        //position: "absolute"
    },
    paper: {
      backgroundColor: "#002C5D",
      color: "#fff",
  },

});


const HeaderHome = (props) => {
    const [state, setState] = React.useState(false);
    const classes = useStyles();
    const theme = useTheme();
    const bottom = useMediaQuery(theme.breakpoints.down('md'));
    var props = {
        setState: setState
    }
    return (
        <React.Fragment>
            <AppBar position="sticky" className={classes.root} elevation={0}>
                <Toolbar>
                    <IconButton onClick={()=>setState(true)} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <IconButton 
                        onClick={()=>setState(true)} size="large" 
                        edge="start" color="inherit" aria-label="menu" 
                        sx={{ 
                            mr: 2,
                            display: { xs: 'none', sm: 'block' }
                        }}>
                        <img
                            src={`https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/nosnowhomelogo.webp`}
                            alt="Nosnownaples logo"
                            loading="lazy"
                            width="250px"
                            height= "auto"
                        />
                    </IconButton>
                    <Grid container item display="flex" direction="column" justifyContent="flex-end"
                        sx={{display: { xs: 'none', sm: 'block' }}}
                    >
                        <Grid container item display="flex" direction="row" justifyContent="flex-end">
                            <Box display="flex" justifyContent="flex-end" alignItems="center" elevation={3}>
                                <Box display="flex" alignItems="center" justifyContent="center"
                                    sx={{
                                        backgroundColor: "#fff",
                                        height: "34px",
                                        width: "34px",
                                        marginRight: "5px",
                                        borderRadius: "5px"
                                    }}
                                >
                                    <LocalPhoneIcon 
                                        sx={{
                                            color: "#ff5722",

                                        }}/>
                                </Box>
                                <Box display="flex" flexDirection="column" justifyContent="flex-end">
                                    <Typography sx={{fontSize: "12px"}}>Free line for your</Typography>
                                    <Typography  sx={{fontSize: "16px", fontWeight:"500"}}>239-261-9050</Typography>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="flex-end">
                                <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://www.facebook.com/NoSnowNaples/"><FacebookIcon /></Link></IconButton>
                                <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://twitter.com/nosnownaples/"><TwitterIcon /></Link></IconButton>
                                <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://www.instagram.com/nosnownaples/"><InstagramIcon /></Link></IconButton>
                            </Box>
                        </Grid>
                        <Grid container display="flex" justifyContent="flex-end">
                            <Typography variant="h6">Find Your Dream Home Here</Typography>
                        </Grid>
                    </Grid>
                    
                </Toolbar>
            </AppBar>
            <Drawer anchor={bottom?"bottom":"left"} open={state} onClose={()=>setState(false)} 
              PaperProps={{
                sx: {
                  backgroundColor: "#56516b",
                  color: "#fff",
                  fontWeight: "bold"
                }
              }}
            >
                <LeftMenu value={props}/>
            </Drawer>
        </React.Fragment>
    )
}

export default HeaderHome;