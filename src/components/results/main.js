import React, { useEffect, useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import {TableContainer, Typography, Box, Grid, Button } from '@mui/material';
import PropertyCard from '../property/card';
import LoadingPropertyCard from '../property/loading-card';
import LotCard from '../lot/card';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {useMultipleCustomQuery} from 'services/bridge-api'
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setPreviousPages, resetPreviousPages } from 'api/res'

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

const ResultsMain = () => {
    const navi = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch()
    const previousPages = useSelector(state=>state.res.previousPages);
    const priceRangeOptions = useSelector(state=>state.res.priceRangeOptions);
    const page = useSelector(state=>state.res.page);
    const limit = useSelector(state=>state.res.limit);
    const { type } = useParams();
    const {
        mls,
        keyword,
        city,
        community,
        subCondo,
        PropertySubType, 
        CommunityFeatures,
        AttachedGarageYN,
        priceRange,
        beds, baths, sqft,yearBuilt,
        GarageSpaces, WaterfrontFeatures, Amenities,
        NABOR_PetsLimitMaxNumber,
        golfAccess,
        waterFrontView,
        guestHouse,
        newConstruction,
    } = useSelector(state=>state.res);
    const {
        lmls,
        lkeyword,
        lcity,
        lcommunity,
        lsubCondo
    } = useSelector(state=>state.lot);
    const [skip, setSkip] = useState(true)

    useEffect(()=>{
        query = '';
        if(type==='lot-land'){
            params = orderFlowLot;
            if(lkeyword.length>0){
                query = query + `&UnparsedAddress.in=${keyword || ''}`
            }
            if(lmls.length>0){
                query = query + `&ListingId=${mls || ''}`
            }
            if(lcity.length>0){
                query = query + `&City.in=${lcity.join(", ") || ''}`
            }
            if(lcommunity.length>0){
                query = query + `&ParkName.in=${lcommunity.join(", ") || ''}`
            }
            if(lsubCondo.length>0){
                query = query + `&SubdivisionName.in=${lsubCondo.join(", ") || ''}`
            }
        } else if(type==='res'){
            params = orderFlowRes;
            if(keyword.length>0){
                var n = isNaN(keyword);
                console.log("n", n)
                if(!n && keyword.length===9){
                    query = query + `&ListingId=${keyword || ''}`
                } else {
                    query = query + `&UnparsedAddress.in=${keyword || ''}`
                }
            }
            console.log(query)
            if(mls.length>0){
                query = query + `&ListingId=${mls || ''}`
            }
            if(city.length>0){
                query = query + `&City.in=${city.join(", ") || ''}`
            }
            if(community.length>0){
                query = query + `&ParkName.in=${community.join(", ") || ''}`
            }
            if(subCondo.length>0){
                query = query + `&SubdivisionName.in=${subCondo.join(", ") || ''}`
            }
            if(PropertySubType.length>0){
                query = query + `&ArchitecturalStyle.in=${PropertySubType.join(", ") || ''}`
            }
            if(CommunityFeatures.length>0){
                query = query + `&CommunityFeatures.in=${CommunityFeatures.join(", ") || ''}`
            }
            if(AttachedGarageYN!=='Any'){
                query = query + `&AttachedGarageYN=${AttachedGarageYN==='Attached'?true:false}`
            }
            if(GarageSpaces!==0){
                query = query + `&GarageSpaces.gte=${GarageSpaces}`
            }
            if(priceRange.min>0){
                var m = priceRangeOptions.find(p=>p.value===priceRange.min).v
                query = query + `&ListPrice.gte=${m}`
            }
            if(priceRange.max<26){
                var m = priceRangeOptions.find(p=>p.value===priceRange.max).v
                query = query + `&ListPrice.lte=${m}`
            }
            if(beds.min>0){
                query = query + `&BedroomsTotal.gte=${beds.min}`   
            }
            if(beds.max<5){
                query = query + `&BedroomsTotal.lte=${beds.max}`   
            }
            if(baths.min>0){
                query = query + `&BathroomsTotalDecimal.gte=${baths.min}`   
            }
            if(baths.max<5){
                query = query + `&BathroomsTotalDecimal.lte=${baths.max}`   
            }
            if(sqft.min>0){
                query = query + `&LivingArea.gte=${sqft.min}`
            }
            if(sqft.max>7500){
                query = query + `&LivingArea.lte=${sqft.max}`
            }
            if(yearBuilt.min>1959){
                query = query + `&YearBuilt.gte=${yearBuilt.min}`
            }
            if(yearBuilt.max>2023){
                query = query + `&YearBuilt.lte=${yearBuilt.max}`
            }
            if(WaterfrontFeatures.length>0){
                query = query + `&WaterfrontFeatures.in=${WaterfrontFeatures.join(", ") || ''}`
            }
            if(Amenities.length>0){
                query = query + `&AssociationAmenities.in=${Amenities.join(", ") || ''}`
            }
            if(NABOR_PetsLimitMaxNumber==='Not Allowed'){
                query = query + `&NABOR_PetsLimitMaxNumber=0`;
            }
            if(golfAccess){
                query = query + `&NABOR_GulfAccessYN=true`;
            }
            if(waterFrontView){
                query = query + `&WaterfrontYN=true`;
            }
            if(guestHouse){
                query = query + `&NABOR_GuestHouseLivingArea.ne=null`;
            }
            if(guestHouse){
                query = query + `&NABOR_GuestHouseLivingArea.ne=null`;
            }
            if(newConstruction){
               query = query + `&NABOR_StatusType.ne=null`;
            }
        }
        
        console.log(query)
        dispatch(resetPreviousPages(0));
        dispatch(setPage(0));
    }, [params])

    useEffect(()=>{
        start = previousPages.find(p=>p.page===page).start
        index = previousPages.find(p=>p.page===page).index
        setSkip(false)
    }, [page])


    const {properties, pStatus, returnStart, returnIndex, pError} = useMultipleCustomQuery({
        url: params,
        search: query,
        limit: limit,
        start: start,
        index: index
    }, {
        skip: skip,
        selectFromResult: ({ data, status, isLoading, error, id, originalArgs }) => {
            return {
                properties: data?.properties || [],
                returnIndex: data?.index || 0,
                returnStart: data?.start || 0,
                pStatus: status,
                pIsLoading: isLoading,
                pError: error
            }
        }
    });



    useEffect(()=>{
        if(pStatus==='fulfilled'){
            setSkip(true);
            dispatch(setPreviousPages({
                page: page+1,
                index: returnIndex,
                start: returnStart
            }));
        }
    }, [pStatus])

    return ( 
    <React.Fragment>
        <Box display="flex" justify="space-between" 
            sx={{ 
                height: "calc(100vh - 65px)",
                width: "100%"
            }}
        >
            <TableContainer 
                sx={{ 
                    height: "calc(100vh - 65px)",
                    maxHeight: "calc(100vh - 65px)",
                    width: {
                        sx: "100vw",
                        md:"70vw"}
                }}
            > 
                {pStatus==='pending'?
                    <Grid container item md={12} display="flex" justify="space-between">
                        {[1,2,3,4,5,6,7,8,9,10].map((row, i) => 
                            <Grid container item md={6} key={i} >
                                <LoadingPropertyCard />
                            </Grid>
                        )}
                    </Grid>
                :
                    <React.Fragment>
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
                                    No Properties found. 
                                </Typography>
                                <Button variant="contained"
                                    className={classes.btn_orange}
                                sx={{
                                    mt:5,
                                    background: "#FE8200",
                                    color: "#fff",
                                    fontWeight: "bolder",
                                    '&:hover': {
                                        background: "#FE8200"
                                    }
                                }}
                                onClick={()=>navi.goBack()}
                                >Refine Your Search</Button>
                            </Grid>
                            
                        : 

                            <Grid container item columns={12} display="flex" justify="space-between">
                                {properties.map((row, i) => 
                                    <Grid container item xs={12} sm={6} md={12} lg={6} key={i} >
                                        {type==='res'?<PropertyCard {...row}/>:<LotCard {...row}/>}
                                    </Grid>
                                )}
                            </Grid>
                        
                        }
                    </React.Fragment>
                }
            </TableContainer>
            <TableContainer
                sx={{
                    display: {
                        xs: "none", 
                        md: "flex"
                    }
                }}
            >
            <MapContainer 
                center={[26.295073, -81.630814]} 
                zoom={11} scrollWheelZoom={true}
            >
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {properties.map((row, i) =>
                    <Marker position={[row.Coordinates ? row.Coordinates[1] : 26.295073, row.Coordinates ? row.Coordinates[0] : -81.630814]} key={i}>
                        <Popup>
                            <Typography sx={{fontSize: "16px", fontWeight: "600"}}>{row.UnparsedAddress || ''}</Typography>
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
            </TableContainer>
        </Box>
    </React.Fragment>
    
    );
}

export default ResultsMain;