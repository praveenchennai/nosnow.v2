import React, { useEffect, useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import {TableContainer, Typography, Box, Grid} from '@mui/material';
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
  },

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
    {id: 2, query:'&PropertyType=Land&ListAgentMlsId=505199&MlsStatus.in=Pending&sortBy=ListPrice&order=desc'},
    {id: 3, query:'&PropertyType=Land&ListAgentMlsId=505199&MlsStatus=Pending With Contingencies&sortBy=ListPrice&order=desc'},
    {id: 4, query:'&PropertyType=Land&ListAgentMlsId=505199&MlsStatus=Sold&sortBy=CloseDate&order=desc'},
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
    const page = useSelector(state=>state.res.page);
    const limit = useSelector(state=>state.res.limit);
    const { type } = useParams();
    const {
        keyword,
        city,
        community,
        subCondo,
        PropertySubType, 
        CommunityFeatures,
        AttachedGarageYN,
        priceRange,
        beds, baths, sqft,yearBuilt,
        GarageSpaces, WaterfrontFeatures,
        NABOR_PetsLimitMaxNumber,
        golfAccess,
        waterFrontView,
        guestHouse,
        //newConstruction,
    } = useSelector(state=>state.res);
    const [skip, setSkip] = useState(true)

    useEffect(()=>{
        if(type==='land'){
            params = orderFlowLot;
        } else if(type==='res'){
            params = orderFlowRes;
        }
        query = '';
        if(keyword.length>0){
            query = query + `&UnparsedAddress.in=${keyword || ''}`
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
        if(GarageSpaces!=='Any'){
            query = query + `&GarageSpaces.gte=${GarageSpaces}`
        }
        if(priceRange.min>0){
            query = query + `&ListPrice.gte=${priceRange.min}`
        }
        if(priceRange.max>0){
            query = query + `&ListPrice.lte=${priceRange.max}`
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
        if(sqft.max>0){
            query = query + `&LivingArea.lte=${sqft.max}`
        }
        if(yearBuilt.min>0){
            query = query + `&YearBuilt.gte=${yearBuilt.min}`
        }
        if(yearBuilt.max>0){
            query = query + `&YearBuilt.lte=${yearBuilt.max}`
        }
        if(WaterfrontFeatures.length>0){
            query = query + `&WaterfrontFeatures.in=${WaterfrontFeatures.join(", ") || ''}`
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
        // if(!newConstruction){
        //     query = query + `&BuildingFeatures.nin=['DSL/Cable Available', 'Elevator', 'Concierge Service]`;
        // }
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
        console.log(pStatus)
        if(pStatus==='fulfilled'){
            setSkip(true);
            dispatch(setPreviousPages({
                page: page+1,
                index: returnIndex,
                start: returnStart
            }));
        }
        if(pStatus==='pending'){

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
                    width: "70vw"
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
                    <Grid container item md={12} display="flex" justify="space-between">
                        {properties.map((row, i) => 
                            <Grid container item md={6} key={i} >
                                {type==='res'?<PropertyCard {...row}/>:<LotCard {...row}/>}
                            </Grid>
                        )}
                    </Grid>
                }
            </TableContainer>
            <MapContainer 
                center={[26.295073, -81.630814]} 
                zoom={11} scrollWheelZoom={true}
            >
                {/* <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                /> */}
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
        </Box>
    </React.Fragment>
    
    );
}

export default ResultsMain;