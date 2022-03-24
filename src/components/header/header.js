import React from 'react';
import { AppBar, Link, Grid, Tooltip, IconButton, Button, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';
import LeftMenu from '../layout/leftmenu'
import { useTheme } from '@mui/material/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#56516b",
        //position: "absolute"
    },
    paper: {
      backgroundColor: "#002C5D",
      color: "#fff",
  },

});


const Header = (props) => {
    const navi = useHistory();
    const [state, setState] = React.useState(false);
    const classes = useStyles();
    const theme = useTheme();
    const bottom = useMediaQuery(theme.breakpoints.down('md'));

    const onBack = () =>{
        navi.goBack()
    }

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
                            display: { xs: 'none', sm: 'block' },
                            padding: "0px"
                        }}>
                        <img
                            src={`https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/nosnowhomelogo.webp`}
                            alt="Nosnownaples logo"
                            loading="lazy"
                            width="190px"
                            height= "auto"
                        />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                    <Button 
                        sx={{
                            backgroundColor: "#ff5722",
                            color: "#fff",
                            fontSize: "15px",
                        }}
                        variant='contained' target="_blank" href="http://www.nosnowevalue.com/">What's My Home Worth?</Button>
                    <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://www.facebook.com/NoSnowNaples/"><FacebookIcon /></Link></IconButton>
                    <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://twitter.com/nosnownaples/"><TwitterIcon /></Link></IconButton>
                    <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://www.instagram.com/nosnownaples/"><InstagramIcon /></Link></IconButton>
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
                <LeftMenu value={props} />
            </Drawer>
        </React.Fragment>
    )
}

export default Header;