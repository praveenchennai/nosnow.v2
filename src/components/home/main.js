import React from 'react';
import { Stack, Divider } from '@mui/material';
import { createTheme } from "@mui/material/styles";
import Box1 from './box1';
import Box2 from './box2';
import Content1 from './content1';
import CommunityGroupHomeBlock from '../community-group/home-block';
import FeaturedResHomeBlock from '../featured-res/home-block';
import FeaturedLotHomeBlock from '../featured-lot/home-block';


const theme = createTheme();


const HomeMain = (props) => {
    return (
        <React.Fragment>
            <Stack 
                direction="column" 
                spacing={3}
                alignItems="center" 
                maxWidth="false"
                sx={{
                    background: "url(https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/home.webp)",
                    height: "100vh",
                    backgroundRepeat: "no-repeat",
                    paddingTop: "20px"
                }}
            >
                <Box1 />
                <Box2 />
            </Stack>
            <Content1 />
            {/* <CommunityGroupHomeBlock /> */}
            <Divider sx={{marginTop: "70px", marginBottom: "40px", marginX: "20px"}}/>
            <FeaturedResHomeBlock />
            <Divider sx={{marginTop: "70px", marginBottom: "40px", marginX: "20px"}}/>
            <FeaturedLotHomeBlock />
        </React.Fragment>
    )
}

export default HomeMain;