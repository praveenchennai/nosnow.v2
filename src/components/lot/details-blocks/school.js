import React from 'react';
import {Grid, Typography} from '@mui/material';

const SchoolFinance = (props) => {
    var {
        Appliances,
        BathroomsFull,
        BathroomsHalf,
        BathroomsTotalDecimal,
        BathroomsTotalInteger,
        BedroomsTotal,
        CarportSpaces,
        CarportYN,
        CoveredSpaces,
        DoorFeatures,
        Electric,
        ElectricOnPropertyYN,
        Flooring,
        Furnished,
        GarageYN,
        GarageSpaces,
        Gas,
        GreenEnergyGeneration,
        
        
    } = props;

    var array = [
        {name: 'Elementary School', value: ConstructionMaterials?.join(", ") || ''},
        {name: 'Middle School', value: ExteriorFeatures?.join(", ") || ''},
        {name: 'High School', value: ParkingFeatures?.join(", ") || ''},
        {name: 'Property Tax', value: ParkingTotal || ''},
        {name: 'Tax Year', value: Roof?.join(", ") || ''},
        {name: 'Tax Description', value: Fencing?.join(", ") || ''},
        {name: 'Legal Units', value: FoundationDetails?.join(", ") || ''},
        {name: 'Legal Description', value: PoolPrivateYN ? "Yes" : "No"},
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
                    <Typography noWrap align="right"
                        sx={{
                            fontSize: "12px", 
                            fontWeight: "500",
                            flexGrow: 1
                        }}
                        component="div"
                    >    
                        {f.value}
                    </Typography>
                </Grid>
            )}
        </React.Fragment>
    );
}

export default SchoolFinance;