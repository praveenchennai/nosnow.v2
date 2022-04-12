import React, {useState} from 'react';
import { Grid, Button, Paper, CardMedia, CardHeader, Card, Typography, Avatar, Dialog } from '@mui/material';
import { useSelector } from 'react-redux';
import { useCommunityContentQuery } from 'services/community'
import { useHistory, useParams } from "react-router-dom";

const CommunityList = () => {
    const communities = useSelector(state=>state.communities.content);
    const contents = useSelector(state=>state.content.paras);
    const navi = useHistory();
    
    return ( 
        <React.Fragment>
            <Paper square  md={12}>
                <Typography 
                    sx={{
                        fontSize: "12px", 
                        fontWeight: "700",
                        paddingLeft: "10px",
                        backgroundColor: '#FF5722',
                        color: "#fff"
                    }}
                >
                    Naples, Communities
                </Typography>
            </Paper>

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
                        title={
                            <Typography 
                                sx={{
                                    fontSize: "12px", 
                                    fontWeight: "400",
                                    paddingLeft: "10px"
                                }}
                            >
                                {community.metaTitle}
                            </Typography>
                        } 
                    />
                       
        
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
                            onClick={()=>navi.push(`community/${community.seoUrl}`)}
                        >
                            More Info
                        </Button>
                    </Grid>
                    
                    </Card>
            )}

            </Grid>
            </React.Fragment>

    );
}

export default CommunityList;