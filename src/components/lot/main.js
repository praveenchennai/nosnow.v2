import React  from 'react';
import { Grid, Box, Card, TableContainer, Typography, } from '@mui/material';
import { useParams } from "react-router-dom";
import PropertyDetails from './details-blocks/details';
import Facts from './details-blocks/facts';
import Remarks from './details-blocks/remark';
import MlsDetails from './details-blocks/mls'
import {useGetPropertyQuery} from 'services/bridge-api'
import ContactCard from '../contact/contact'
import { GoogleMap, Marker, LoadScript   } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const LotMain = () => {
    const {id} = useParams();
    const {property, lat, lng, status, isLoading, error} = useGetPropertyQuery(id, {
        skip: !id,
        selectFromResult: ({ data, status, isLoading, error, id, originalArgs }) => {
            return {
                property: data?.bundle || {},
                lng: data?.bundle?.Coordinates ? Number(data.bundle.Coordinates[0]) : undefined,
                lat: data?.bundle?.Coordinates ? Number(data.bundle.Coordinates[1]) : undefined,    
                status: status,
                isLoading: isLoading,
                error: error
            }
        }
    });

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
                        md:"50vw"}
                }}
            > 
                <Grid container item columns={12} display="flex" justify="space-between">
                    <Grid container item xs={12} >
                        <Card 
                            elevation={1}
                            sx={{
                                position: 'relative',
                                cursor: "pointer",
                                minHeight: {
                                    xs: "600px",
                                    sm: "530px" 
                                },
                                margin: "5px",
                                width: "100%",
                                minHeight: "auto"
                                
                            }}
                        >
                            <PropertyDetails {...property}/> 
                        </Card>
                        <Card 
                            elevation={1}
                            sx={{
                                position: 'relative',
                                cursor: "pointer",
                                minHeight: {
                                    xs: "600px",
                                    sm: "530px" 
                                },
                                margin: "5px",
                                width: "100%"
                                
                            }}
                        >
                            <Facts {...property}/>
                        </Card>
                        <Card 
                            elevation={1}
                            sx={{
                                position: 'relative',
                                cursor: "pointer",
                                minHeight: {
                                    xs: "600px",
                                    sm: "530px" 
                                },
                                margin: "5px",
                                width: "100%",
                                height: "auto"
                                
                            }}
                        >
                            <Remarks {...property}/> 
                        </Card>
                        <Card 
                            elevation={1}
                            sx={{
                                position: 'relative',
                                cursor: "pointer",
                                minHeight: {
                                    xs: "600px",
                                    sm: "530px" 
                                },
                                marginRight: "5px",
                                marginY: "5px",
                                width: "100%"
                                
                            }}
                        >
                            <MlsDetails {...property}/> 
                        </Card>
                    </Grid> 
                </Grid>
            </TableContainer>
            <TableContainer
                sx={{
                    display: {
                        xs: "none", 
                        md: "flex"
                    }
                }}
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
            </TableContainer>
        </Box>
        <ContactCard />
    </React.Fragment>
);
}

export default LotMain;