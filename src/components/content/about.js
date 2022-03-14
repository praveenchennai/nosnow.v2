import React from 'react';
import { Container, List, ListItemButton } from '@mui/material';
const ContentMain = () => {
    console.log('Reached')
    return (<Container component="main" maxWidth="lg">
        <List> 
            <ListItemButton>
                    <img
                src={`https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/about1.webp`}
                alt="Nosnownaples About"
                loading="lazy"
            />
                </ListItemButton >
        </List>
        <List> 
            <ListItemButton>
                    <img
                src={`https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/about2.webp`}
                alt="Nosnownaples About"
                loading="lazy"
            />
                </ListItemButton >
        </List>
    </Container>)
}

export default ContentMain;