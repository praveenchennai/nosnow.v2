import React from 'react';
import { AppBar, Link, Grid, Tooltip, IconButton, Toolbar, Typography } from '@mui/material';
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
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from 'api/res'

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


const HeaderSearch = (props) => {
    const navi = useHistory();
    const dispatch = useDispatch();
    const [state, setState] = React.useState(false);
    const page = useSelector(state=>state.res.page);
    const classes = useStyles();
    const theme = useTheme();
    const bottom = useMediaQuery(theme.breakpoints.down('md'));

    const onBack = () =>{
        navi.goBack()
    }

    return (
        <React.Fragment>
            <AppBar position="sticky" elevation={0}  className={classes.root} >
                <Toolbar>
                    <Grid container item md={12} display="flex" justifyContent="space-between">
                        <Grid container item xs={12} md={5} display="flex" justifyContent="space-between">
                            <Grid container item xs={6} display="flex" justifyContent="flex-start">
                                <IconButton onClick={()=>setState(true)} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                    <MenuIcon />
                                </IconButton>
                                <IconButton onClick={()=>onBack(true)} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                    <KeyboardBackspaceIcon />
                                </IconButton>
                            </Grid>
                            <Grid container item xs={6} display="flex" justifyContent="flex-end">
                                <IconButton onClick={()=>dispatch(setPage(page===0?0:page-1))} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                    <Tooltip title="Previous"><ArrowBackIosIcon fontSize="small"/></Tooltip>
                                </IconButton>
                                <IconButton onClick={()=>dispatch(setPage(page+1))} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                    <Tooltip title="Next"><ArrowForwardIosIcon fontSize="small"/></Tooltip>
                                </IconButton>
                                <IconButton onClick={()=>onBack(true)} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                    <Tooltip title="Filter"><FilterListIcon fontSize="small"/></Tooltip>
                                </IconButton> 
                            </Grid> 
                        </Grid>
                        <Grid container item md={7} justifyContent="flex-end"
                            sx={{
                                display: {
                                    xs: "none", 
                                    md: "flex"
                                }
                            }}
                        >
                            <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://www.facebook.com/NoSnowNaples/"><FacebookIcon /></Link></IconButton>
                            <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://twitter.com/nosnownaples/"><TwitterIcon /></Link></IconButton>
                            <IconButton color="inherit" size="large"><Link color="inherit" target="_blank" href="https://www.instagram.com/nosnownaples/"><InstagramIcon /></Link></IconButton>
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
                <LeftMenu />
            </Drawer>
        </React.Fragment>
    )
}

export default HeaderSearch;