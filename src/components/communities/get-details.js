import React, {useState} from 'react';
import { Grid, Button, Container, CardMedia, CardHeader, Card, Typography, Avatar, Dialog } from '@mui/material';
import { useSelector } from 'react-redux';
import { useCommunityContentQuery } from 'services/community'



const CommunityContent = () => {
    const communities = useSelector(state=>state.communities.content);
    const contents = useSelector(state=>state.content.paras);

    
    return ( 
        <Grid container item md={12} display="flex" justify="space-between"
            sx={{
                padding: "10px"
            }}
        >
            {communities?.map((community, key)=>

                <Card key={key} display="flex" direction={'column'}
                    sx={{
                        width: "350px",
                        height: "auto",
                        margin: "10px"
                    }}
                >
                    <Typography 
                        sx={{
                            fontSize: "14px", 
                            fontWeight: "700",
                            paddingLeft: "10px",
                            paddingTop: "10px"
                        }}
                    >
                            {community.name}
                    </Typography>
                        <CardHeader 
                            avatar={
                                <Avatar>
                                    <CardMedia
                                        component="img"
                                        height="40"
                                        width="40"
                                        src="https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/profile.webp"
                                        alt="Rick Palante Profile"
                                    />
                                </Avatar>
                            }
                            title={community.metaTitle}
                            subheader={"Naples, FLorida"}>
                        </CardHeader>
        
                        <Grid container item md={12} alignItems="center" direction="column" justifyContent="space-between"
                            sx={{
                                padding: "5px"
                            }}
                        >
                        </Grid>
        
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
                    <Grid container item md={12} display="flex" direction="column"
                        sx={{
                            padding: "10px!important",
                            right: 0
                        }}
                    >
                        <Button 
                            color={"primary"}
                            sx={{
                                fontSize: "14px",
                                backgroundColor: "#ED6C02",
                                color: "#fff",
                                "&:hover":{
                                    backgroundColor: "#ED6C02",
                                    color: "#fff"
                                }
                                
                            }}
                            onClick={()=>setPopUp(true)}
                        >
                            More Info
                        </Button>
                    </Grid>
                    
                    </Card>
            )}

            </Grid>

    );
}

export default CommunityContent;