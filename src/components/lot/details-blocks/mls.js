import React from 'react';
import {Grid, Typography, Divider} from '@mui/material';

const MlsDetails = (props) => {
    var {
        City, 
        ParkName, 
        SubdivisionName, 
        CommunityFeatures, Levels, LotSizeArea, LotSizeSquareFeet,
        LivingArea,
        CoListOfficeName, View,
        NABOR_StatusType, PropertyType, 
        ParcelNumber, CountyOrParish, NABOR_Township
    } = props;

    var array = [
        {name: 'City', value: City || ''},
        {name: 'Development Name', value: ParkName || ''},
        {name: 'Sub Condo', value: SubdivisionName},
        {name: 'Community Features', value: CommunityFeatures?.join(", ") || ''},
        {name: 'Status Type', value: NABOR_StatusType || ''},
        {name: 'View', value: View?.join(", ") || ''},
        {name: 'Living Area', value: `${LivingArea || ''} Sqft`},
        {name: 'Total Area', value: `${LotSizeSquareFeet || ''} Sqft`},
        {name: 'Courtesy Of', value: CoListOfficeName || ''},
        {name: 'County', value: CountyOrParish || ''},
        {name: 'Property Type', value: PropertyType || ''},
        {name: 'ParcelNumber', value: ParcelNumber || ''},
        {name: 'Township', value: NABOR_Township || ''},
    ]

    return ( 
        <React.Fragment>
            <Grid container item md={12} display="flex" direction="column"
                sx={{
                    backgroundColor: "#56516b",
                    color: "#fff",
                    padding: "10px!important",
                    right: 0
                }}
            >
            <Typography 
                sx={{
                    fontSize: "14px", 
                    fontWeight: "700",
                }}
            >
                MLS Details
            </Typography>
            </Grid>
            {array.map((f, i)=>
                <Grid key={i} container item md={12} alignItems="center" justifyContent="space-between"
                    sx={{
                        padding: "5px"
                    }}
                > 
                    <Typography noWrap
                        sx={{
                            fontSize: "12px", 
                            fontWeight: "500",
                            flexGrow: 1
                        }}
                        component="div"
                    >    
                        {f.name}:
                    </Typography>
                    <Typography 
                        sx={{
                            fontSize: "12px", 
                            fontWeight: "500",
                            textAlign: "justify",
                            lineHeight: "20px",
                            margin: "5px"
                        }}
                    >
                        {f.value}
                    </Typography>
                    <Divider 
                        sx={{
                            marginTop: "10px", 
                            marginBottom: "0px",
                            color: "#000",
                            width: "100%"
                        }}/>
                </Grid>
            )}
        </React.Fragment>
    );
}

export default MlsDetails;