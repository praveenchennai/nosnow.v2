import React, { useEffect, useState} from 'react';
import ResMain from './res/main';
import LotMain from './lot/main';
import { useHistory, useParams } from "react-router-dom";
import {Container, Tabs, Tab, Button, Toolbar, AppBar} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';

const useStyles = makeStyles(listingCss());

const SearchMain = () => {
    const navi = useHistory();
    const {type} = useParams();
    const classes = useStyles();
    const [value, setValue] = useState(0);

    useEffect(()=>{
        console.log(type)
        if(type==='lot'){
            setValue(1)
        }
    }, [type])

    const tabChange = (event, newValue) => {
        setValue(newValue);
    };

    const onSearch = () =>{
        if(value==0){
            navi.push('/result/res')
        } else {
            navi.push('/result/lot-land')
        }
        
    }
    
    return ( 
        <Container component="main" maxWidth="lg">
            <AppBar position="sticky" elevation={0} className={classes.transparent}>
                <Toolbar>
                    <Tabs value={value || 0} onChange={tabChange} sx={{ flexGrow: 1 }}>
                        <Tab label="Residential" />
                        <Tab label="Lots"  />
                    </Tabs>
                    <Button 
                        variant="contained" 
                        className={[classes.btn_orange, classes.mt10].join(' ')}
                        onClick={()=>onSearch()}
                    >Search</Button>
                </Toolbar>
            </AppBar>

            {value===0? <ResMain />:<LotMain />}
        </Container>
    );
}

export default SearchMain;