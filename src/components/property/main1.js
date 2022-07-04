import React, {useState, useEffect, useCallback} from 'react';
import { Grid, Box, Card, Drawer, Typography } from '@mui/material';
import { useParams } from "react-router-dom";
import PropertyDetails1 from './details-blocks/details1';
import PropertyContent from './details-blocks/property-content';
import {useGetPropertyQuery} from 'services/bridge-api'
import ContactCard from '../contact/contact'
import { GoogleMap, Marker, LoadScript   } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const PropertyMain1 = () => {
    const {id} = useParams();
    const {xsSize, smSize, mdSize, lgSize, xlSize} = useSelector(state=>state.design)
    console.log(xsSize, smSize, mdSize, lgSize, xlSize)
    const {property, lat, lng, status, isLoading, error} = useGetPropertyQuery(id, {
        skip: !id,
        selectFromResult: ({ data, status, isLoading, error, id, originalArgs }) => {
            return {
                property: data?.bundle || {},
                lng: Number(data?.bundle?.Coordinates[0]) || undefined,
                lat: Number(data?.bundle?.Coordinates[1]) || undefined,  
                status: status,
                isLoading: isLoading,
                error: error
            }
        }
    });

    useEffect(()=>{
        console.log(property)
    }, [property])
        
return (
    <React.Fragment>
        {xsSize || smSize ?<PropertyDetails1 {...property}/>:'' }
        <Grid container item columns={12} display="flex" justify="space-between"
            sx={{
                width: xsSize || smSize ? '100vw' : mdSize ? "55vw" : "calc(55vw - 18px)",
                marginRight: "0px",
                zIndex: 500,
                marginLeft: xsSize || smSize ? '0px' : "25vw"
            }}
        >
            <Card 
                elevation={0}
                sx={{
                    position: 'relative',
                    width: "100%",
                    height: "auto"
                    
                }}
            >
                <PropertyContent {...property}/> 
            </Card>     
        </Grid>
        <Drawer 
            sx={{
                width: "25vw",
                '& .MuiDrawer-paper': {
                    width: "25vw",
                    boxSizing: 'border-box',
                    top: "65px",
                    height: "calc(100vh - 65px)",
                }
            }}
            variant = {xsSize || smSize ? "persistent" : 'permanent'}
            anchor="left"
            open={xsSize ||smSize ? false : true}
        >
            <Grid container item xs={12}>
                <Card 
                    elevation={0}
                    sx={{
                        position: 'relative',
                        cursor: "pointer",
                        margin: "5px",
                        width: "100%",
                        minHeight: "auto"
                        
                    }}
                >
                    <PropertyDetails1 {...property}/> 
                    <ContactCard {...{...property, staticlocation: true}} />
                </Card>
            </Grid>
        </Drawer>
        <Drawer 
            sx={{
                width: "20vw",
                '& .MuiDrawer-paper': {
                    width: "20vw",
                    boxSizing: 'border-box',
                    top: "65px",
                    height: "calc(100vh - 65px)",
                }
            }}
            variant = {xsSize || smSize  ? "persistent" : 'permanent'}
            anchor="right"
            open={xsSize || smSize ? false : true}
        >
            {lat?
                <LoadScript googleMapsApiKey="AIzaSyAgV5Jp5V353fQ-khx1wKX2s4vx-xbb3zQ">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={{lat, lng}}
                        zoom={18}
                        options={map => ({ mapTypeId: 'SATELLITE' })}
                    >
                        <Marker position={{lat, lng}} animation={'DROP'}/>
                    </GoogleMap>
                </LoadScript>
            : ''}
        </Drawer>
    </React.Fragment>
);
}

export default PropertyMain1;