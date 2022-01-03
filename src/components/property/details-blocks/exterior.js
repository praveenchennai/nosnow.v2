import React from 'react';
import { Grid, Divider, Typography} from '@mui/material';

const Exterior = (props) => {
    var {
        ExteriorFeatures,
        ParkingTotal,
        Roof,
        Fencing,
        WaterfrontFeatures,
        AssociationAmenities,
        CommunityFeatures,
        FrontageType,
        ConstructionMaterials,
        
        FoundationDetails, 
        SecurityFeatures,
        AccessibilityFeatures,
        FireplaceFeatures,
        GulfAccess,
        BoatAccess,
        ParkingFeatures,
        PoolFeatures,
        CarPortSpaces,
        CarPortDesc
    } = props;

    var array = [
        {name: 'Exterior Features', value: ExteriorFeatures?.join(", ") || ''},
        {name: 'Total Parking', value: ParkingTotal || ''},
        {name: 'Roof', value: Roof?.join(", ") || ''},
        {name: 'Fencing', value: Fencing?.join(", ") || ''},
        {name: 'Frontage Type', value: FrontageType?.join(", ") || ''},

        {name: 'Community Features', value: CommunityFeatures?.join(", ") || ''},
        {name: 'Security Features', value: SecurityFeatures?.join(", ") || ''},
        {name: 'Accessibility Features', value:  AccessibilityFeatures?.join(", ") || ''},
        {name: 'Fireplace Features', value: FireplaceFeatures?.join(", ") || ''},
        {name: 'Construction Materials', value: ConstructionMaterials?.join(", ") || ''},
        {name: 'Parking Features', value: ParkingFeatures?.join(", ") || ''},
        {name: 'Amenities', value: AssociationAmenities?.join(", ") || ''},
        {name: 'Waterfront Features', value: WaterfrontFeatures?.join(", ") || ''},
        {name: 'Pool Features', value: PoolFeatures?.join(", ")},

        {name: 'Foundation Details', value: FoundationDetails?.join(", ") || ''},
        {name: 'Gulf Access', value: GulfAccess  || ''},
        {name: 'Boat Access', value: BoatAccess || ''},
        {name: 'Car Port Spaces', value: CarPortSpaces || ''},
        {name: 'Car Port Desc', value: CarPortDesc || ''},
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
                Exterior Features
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

export default Exterior;