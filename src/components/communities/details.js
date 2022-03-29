import React, {useEffect, useState} from 'react';
import { Grid, Button, Box, CardMedia, CardHeader, Card, Typography, Avatar, Dialog } from '@mui/material';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";


const CommunityDetails = () => {
    const communities = useSelector(state=>state.communities.content);
    const contents = useSelector(state=>state.content.paras);
    const mapping = useSelector(state=>state.mapping.conditions);

    const [community, setCommunity] = useState({});
    const [map, setMap] = useState({});
    const [paras, setParas] = useState([])
    const {seo} = useParams();

    useEffect(()=>{
        var co = communities?.find(c=>c.seoUrl===seo);
        setCommunity(co);
        console.log(co)
        var mo = mapping?.find(m=>m.community === co.community);
        console.log(mo)
    }, [seo])

    useEffect(()=>{
        if(community?._id){
            var pa = contents.filter(c=>c.community===community._id);
            setParas(pa);
        }
        
    }, [community])

    return ( 
        <Box component={"container"} display="flex" justify="space-between"
            sx={{
                padding: "10px"
            }}
        >
            <Card  display="flex" direction={'column'}
                sx={{
                    width: "30%",
                    height: "auto",
                    margin: "10px"
                }}
            >
                <CardHeader 
                    title={community.metaTitle}
                    subheader={community.name}>
                </CardHeader>
                <Grid container item md={12} display="flex" direction="column"
                    sx={{
                        padding: "10px!important",
                        right: 0
                    }}
                >
                    <Typography 
                        sx={{
                            fontSize: "14px"
                        }}
                    >
                        {community.metaDescription}
                    </Typography>
                </Grid>
                <CardMedia
                    component="img"
                    alt="nosnownaples"
                    height="auto"
                    image="https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/home.webp"
                />
                {paras?.map((p, i)=>
                    <Grid key={i} container item md={12} display="flex" direction="column"
                        sx={{
                            padding: "10px!important",
                            right: 0
                        }}
                    >
                    
                    <Typography 
                        sx={{
                            fontSize: "18px",
                            lineHeight: "30px",
                            whiteSpace: "pre-wrap"
                        }}
                    >
                        {p.content}
                    </Typography>
                    </Grid>
                )}
            </Card>
            <Card display="flex" direction={'column'}
                sx={{
                    width: "70%",
                    height: "auto",
                    margin: "10px"
                }}
            >
                <CardHeader 
                    title={community.metaTitle}
                    subheader={community.name}>
                </CardHeader>
                <Grid container item md={12} display="flex" direction="column"
                    sx={{
                        padding: "10px!important",
                        right: 0
                    }}
                >
                    <Typography 
                        sx={{
                            fontSize: "14px"
                        }}
                    >
                        {community.metaDescription}
                    </Typography>
                </Grid>
                <CardMedia
                    component="img"
                    alt="nosnownaples"
                    height="auto"
                    image="https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/home.webp"
                />
                {paras?.map((p, i)=>
                    <Grid key={i} container item md={12} display="flex" direction="column"
                        sx={{
                            padding: "10px!important",
                            right: 0
                        }}
                    >
                    
                    <Typography 
                        sx={{
                            fontSize: "18px",
                            lineHeight: "30px",
                            whiteSpace: "pre-wrap"
                        }}
                    >
                        {p.content}
                    </Typography>
                    </Grid>
                )}
            </Card>
                {/* <Card
                    sx={{
                        width: "550px",
                        height: "auto",
                        margin: "10px",
                        float: "left"
                    }}
                >
                    <CardMedia
                        component="img"
                        alt="nosnownaples"
                        height="auto"
                        image="https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/home.webp"
                    />
                </Card> */}
                
                    
            
        </Box>
    );
}

export default CommunityDetails;