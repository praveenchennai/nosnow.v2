import React, {useEffect, useState} from 'react';
import { Grid, Button, Box, CardMedia, CardHeader, Card, Typography, Avatar, Dialog } from '@mui/material';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import {useMultipleCustomQuery} from 'services/bridge-api'
import PropertyCard from '../property/card';
import LotCard from '../lot/card';
import LoadingPropertyCard from '../property/loading-card';


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

const CommunityGroupDetails = () => {
    console.log('reached')
    const communities = useSelector(state=>state.communityGroup.group);
    console.log(communities)
    const contents = useSelector(state=>state.content.paras);
    const mapping = useSelector(state=>state.mapping.conditions);
    const page = useSelector(state=>state.res.page);
    const [skip, setSkip] = useState(true)
    const [community, setCommunity] = useState({});
    const [map, setMap] = useState({});
    const [paras, setParas] = useState([])
    const navi = useHistory();
    const {seo} = useParams();

    useEffect(()=>{
        params = orderFlowRes;
        var co = communities?.find(c=>c.seoUrl===seo);
        console.log(co)
        setCommunity(co);
        var mo = mapping?.find(m=>m.community === co?._id);
        if(!mo?.community){
            //navi.push('/search')
        } else {
            // setMap(mo)
            // if(mo.tags.length>0){
            //     query = `&ParkName.in=${mo.tags.join(", ") || ''}`;
            //     setSkip(false)
            // }
        }
    }, [seo])



    useEffect(()=>{
        if(community?._id){
            var pa = contents.filter(c=>c.community===community?._id);
            setParas(pa);
        }
    }, [community])


    const {properties, pStatus } = useMultipleCustomQuery({
        url: orderFlowRes,
        search: query,
        limit: limit,
        start: start,
        index: index
    }, {
        skip: skip,

        selectFromResult: ({ data, status, originalArgs }) => {
            return {
                properties: data?.properties || [],
                pStatus: status
            }
        }
    });



    const {lots, lStatus} = useMultipleCustomQuery({
        url: orderFlowLot,
        search: query,
        limit: limit,
        start: start,
        index: index
    }, {
        skip: skip,

        selectFromResult: ({ data, status, originalArgs }) => {
            return {
                lots: data?.properties || [],
                lStatus: status
            }
        }
    });

    return ( 
        <Box display="flex" justify="space-between" alignContent={'start'}
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
                    title={community?.title}
                    subheader={community?.subTitle}>
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
                        {community?.metaDescription}
                    </Typography>
                </Grid>
                <CardMedia
                    component="img"
                    alt="nosnownaples"
                    height="auto"
                    image={community.image}
                
                />
                
                

                    <Grid container item md={12} display="flex" direction="column"
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
                        {community.description}
                    </Typography>
                    </Grid>

            </Card>
            <Card display="flex" direction='column'
                sx={{
                    width: "70%",
                    height: "auto",
                    margin: "10px"
                }}
            >

                    <Typography 
                        sx={{
                            margin: '50px',
                            fontSize: "18px",
                            lineHeight: "30px",
                            fontWeight: "bolx",
                            whiteSpace: "pre-wrap"
                        }}
                    >
                        Coming Soon !!!
                    </Typography>

            
            </Card>
            </Box>
    );
}

export default CommunityGroupDetails;