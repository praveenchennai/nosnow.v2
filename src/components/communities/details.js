import React, {useEffect, useState} from 'react';
import { Grid, Button, Box, CardMedia, CardHeader, Card, Typography, Avatar, Dialog } from '@mui/material';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import {useMultipleCustomQuery} from 'services/bridge-api'
import { makeStyles } from '@mui/styles';
import PropertyCard from '../property/card';
import LotCard from '../lot/card';
import LoadingPropertyCard from '../property/loading-card';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#56516b",
        //position: "absolute"
    },
    paper: {
      backgroundColor: "#002C5D",
      color: "#fff",
  }
});


var orderFlowRes = [
    {id: 1, query:'&PropertyType=Residential&ListAgentMlsId=505199&MlsStatus=Active&sortBy=ListPrice&order=desc'},
    {id: 2, query:'&PropertyType=Residential&MlsStatus=Active&sortBy=ListPrice&order=desc'},
    {id: 3, query:'&PropertyType=Residential&ListAgentMlsId=505199&MlsStatus.in=Pending&sortBy=ListPrice&order=desc'},
    {id: 4, query:'&PropertyType=Residential&MlsStatus.in=Pending&sortBy=ListPrice&order=desc'},
    {id: 5, query:'&PropertyType=Residential&ListAgentMlsId=505199&MlsStatus=Pending With Contingencies&sortBy=ListPrice&order=desc'},
    {id: 6, query:'&PropertyType=Residential&MlsStatus=Pending With Contingencies&sortBy=ListPrice&order=desc'},
    {id: 7, query:'&PropertyType=Residential&ListAgentMlsId=505199&MlsStatus=Sold&sortBy=CloseDate&order=desc'},
    {id: 8, query:'&PropertyType=Residential&MlsStatus=Sold&sortBy=CloseDate&order=desc'}
]

var orderFlowLot = [
    {id: 1, query:'&PropertyType=Land&ListAgentMlsId=505199&MlsStatus=Active&sortBy=ListPrice&order=desc'},
    {id: 2, query:'&PropertyType=Land&MlsStatus=Active&sortBy=ListPrice&order=desc'},
    {id: 3, query:'&PropertyType=Land&ListAgentMlsId=505199&MlsStatus.in=Pending&sortBy=ListPrice&order=desc'},
    {id: 4, query:'&PropertyType=Land&MlsStatus.in=Pending&sortBy=ListPrice&order=desc'},
    {id: 5, query:'&PropertyType=Land&ListAgentMlsId=505199&MlsStatus=Pending With Contingencies&sortBy=ListPrice&order=desc'},
    {id: 6, query:'&PropertyType=Land&MlsStatus=Pending With Contingencies&sortBy=ListPrice&order=desc'},
    {id: 7, query:'&PropertyType=Land&ListAgentMlsId=505199&MlsStatus=Sold&sortBy=CloseDate&order=desc'},
    {id: 8, query:'&PropertyType=Land&MlsStatus=Sold&sortBy=CloseDate&order=desc'}
]

var params = undefined;
var query = '';
var start = 0;
var index = 0;
var limit = 8;

const CommunityDetails = () => {
    const communities = useSelector(state=>state.communities.content);
    const contents = useSelector(state=>state.content.paras);
    const mapping = useSelector(state=>state.mapping.conditions);
    const page = useSelector(state=>state.res.page);
    const [skip, setSkip] = useState(true)
    const [community, setCommunity] = useState({});
    const [map, setMap] = useState({});
    const [paras, setParas] = useState([])
    const {seo} = useParams();
    const classes = useStyles();

    useEffect(()=>{
        params = orderFlowRes;
        
        var co = communities?.find(c=>c.seoUrl===seo);
        setCommunity(co);
        var mo = mapping?.find(m=>m.community === co._id);
        setMap(mo)
        if(mo.tags.length>0){
            query = query + `&ParkName.in=${mo.tags.join(", ") || ''}`;
            setSkip(false)
        }
    }, [seo])



    useEffect(()=>{
        if(community?._id){
            var pa = contents.filter(c=>c.community===community._id);
            setParas(pa);
        }
    }, [community])


    const {properties } = useMultipleCustomQuery({
        url: orderFlowRes,
        search: query,
        limit: limit,
        start: start,
        index: index
    }, {
        skip: skip,
        selectFromResult: ({ data, originalArgs }) => {
            return {
                properties: data?.properties || [],
            }
        }
    });



    const {lots} = useMultipleCustomQuery({
        url: orderFlowLot,
        search: query,
        limit: limit,
        start: start,
        index: index
    }, {
        skip: skip,
        selectFromResult: ({ data, originalArgs }) => {
            console.log(data, orderFlowLot, query, limit, start, index)
            return {
                lots: data?.properties || [],
            }
        }
    });

    return ( 
        <Box display="flex" justify="space-between"
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
            <Card display="flex" direction='column'
                sx={{
                    width: "70%",
                    height: "auto",
                    margin: "10px"
                }}
            >
                <CardHeader 
                    title={'Residential'}
                    subheader={community.name}>
                </CardHeader>

                {properties.length===0 ?

                    <Grid 
                        container
                        maxWidth="false" 
                        direction="column" 
                        alignItems="center"
                        sx={{
                            mt:15
                        }}
                    > 
                        <Typography variant='body1' align='center'
                            sx={{
                                fontWeight: "600"
                            }}
                        >
                            Loading Please wait ...
                        </Typography>
                    </Grid>
                    
                : 

                    <Grid container item columns={12} display="flex" justify="space-between">
                        {properties.map((row, i) => 
                            <Grid container item xs={12} sm={6} md={12} lg={3} key={i} >
                                <PropertyCard {...row}/>
                            </Grid>
                        )}
                    </Grid>
                
                }

                <CardHeader 
                    title={'Land and Lots'}
                    subheader={community.name}>
                </CardHeader>

                {lots.length===0 ?

                    <Grid 
                        container
                        maxWidth="false" 
                        direction="column" 
                        alignItems="center"
                        sx={{
                            mt:15
                        }}
                    > 
                        <Typography variant='body1' align='center'
                            sx={{
                                fontWeight: "600"
                            }}
                        >
                            Loading Please wait ...
                        </Typography>
                    </Grid>

                    : 

                    <Grid container item columns={12} display="flex" justify="space-between">
                        {lots.map((row, i) => 
                            <Grid container item xs={12} sm={6} md={12} lg={3} key={i} >
                                <LotCard {...row}/>
                            </Grid>
                        )}
                    </Grid>

                }

            </Card>
            </Box>
    );
}

export default CommunityDetails;