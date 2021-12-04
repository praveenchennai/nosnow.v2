import React, { useEffect, useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import {TableContainer, IconButton, Typography, Box, Grid} from '@mui/material';
import PropertyCard from '../property/card';
import LotCard from '../lot/card';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {useMultipleCustomQuery} from 'services/bridge-api'
import { useSelector } from 'react-redux';


var orderFlowRes = [
    {id: 1, query:'&PropertyType=Residential&ListAgentMlsId=505199&MlsStatus=Active&sortBy=ListPrice&order=desc'},
    {id: 2, query:'&PropertyType=Residential&MlsStatus=Active&sortBy=ListPrice&order=desc'},
    {id: 3, query:'&PropertyType=Residential&ListAgentMlsId=505199&MlsStatus.in=Pending&sortBy=ListPrice&order=desc'},
    {id: 4, query:'&PropertyType=Residential&MlsStatus.in=Pending&sortBy=ListPrice&order=desc'},
    {id: 5, query:'&PropertyType=Residential&ListAgentMlsId=505199&MlsStatus=Pending With Contingencies&sortBy=ListPrice&order=desc'},
    {id: 6, query:'&PropertyType=Residential&ListAgentMlsId=505199&MlsStatus=Sold&sortBy=CloseDate&order=desc'},
]

var orderFlowLot = [
    {id: 1, query:'&PropertyType=Land&ListAgentMlsId=505199&MlsStatus=Active&sortBy=ListPrice&order=desc'},
    {id: 2, query:'&PropertyType=Land&ListAgentMlsId=505199&MlsStatus.in=Pending&sortBy=ListPrice&order=desc'},
    {id: 3, query:'&PropertyType=Land&ListAgentMlsId=505199&MlsStatus=Pending With Contingencies&sortBy=ListPrice&order=desc'},
    {id: 4, query:'&PropertyType=Land&ListAgentMlsId=505199&MlsStatus=Sold&sortBy=CloseDate&order=desc'},
]

var params = undefined;
var query = ''
const ResultsMain = () => {
    const navi = useHistory();
    const { type } = useParams();
    const {
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
            query = query + `&BedroomsTotal.gte=${priceRange.min}`   
        }
        if(beds.max>0){
            query = query + `&BedroomsTotal.lte=${priceRange.max}`   
        }
        if(baths.min>0){
            query = query + `&BathroomsTotalDecimal.gte=${priceRange.min}`   
        }
        if(baths.max>0){
            query = query + `&BathroomsTotalDecimal.lte=${priceRange.max}`   
        }
        if(sqft.min>0){
            query = query + `&LivingArea.gte=${priceRange.min}`
        }
        if(sqft.max>0){
            query = query + `&LivingArea.lte=${priceRange.max}`
        }
        if(yearBuilt.min>0){
            query = query + `&YearBuilt.gte=${priceRange.min}`
        }
        if(yearBuilt.max>0){
            query = query + `&YearBuilt.lte=${priceRange.max}`
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
        // if(!newConstruction){
        //     query = query + `&BuildingFeatures.nin=['DSL/Cable Available', 'Elevator', 'Concierge Service]`;
        // }
        setSkip(false)
        console.log(params, query)
    }, [params])


    const {properties, total, pStatus, pIsLoading, pError} = useMultipleCustomQuery({
        url: params,
        search: query
    }, {
        skip: skip,
        selectFromResult: ({ data, status, isLoading, error, originalArgs }) => {
            return {
                properties: data?.properties || [],
                total: data?.total || [],
                pStatus: status,
                pIsLoading: isLoading,
                pError: error
            }
        }
    });

    return ( 

    //
    //     <Grid container item md={5} display="flex" justify="space-between">
    //         <TableContainer 
    //             sx={{ 
    //                 maxHeight: "50%",
    //                 height: "50%",
    //                 width: "100%"
    //             }}
    //         >
    //             <Grid container item md={12} display="flex" justify="space-between">
    //                 {properties.map((row, i) => 
    //                     <Grid container item md={6} key={i} >
    //                         {type==='res'?<PropertyCard {...row}/>:<LotCard {...row}/>}
    //                     </Grid>
    //                 )}
    //             </Grid>
    //         </TableContainer>
    //     </Grid>
    //     <Grid container item md={7}
            
    //     >
            
    //     </Grid>
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
            <Grid container item md={12} display="flex" justify="space-between">
                {properties.map((row, i) => 
                    <Grid container item md={6} key={i} >
                        {type==='res'?<PropertyCard {...row}/>:<LotCard {...row}/>}
                    </Grid>
                )}
            </Grid>
        </TableContainer>
        <MapContainer 
            center={[26.295073, -81.630814]} 
            zoom={10} scrollWheelZoom={true}
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
    </Box>
    );
}

export default ResultsMain;