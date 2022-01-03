import React from 'react';
import { Grid, Divider, Typography} from '@mui/material';

const Building = (props) => {
    var {
        ListPrice, 
        YearBuilt, 
        Heating, 
        Cooling, 
        ParkingFeatures, 
        LotSizeAcres, 
        LotSizeSquareFeet,
        NABOR_LotFrontage, 
        NABOR_LotLeft, 
        NABOR_LotRight, 
        NABOR_LotBack, 
        LivingArea,
        ListPrice, 
        ArchitecturalStyle,
        OperatingExpenseIncludes,
        OtherEquipment,
        OtherStructures,
        PetsAllowed,
        BuildingFeatures,

        RoadResponsibility,
        RoadSurfaceType,
    } = props;

    var factsArray = [
        {name: 'Building Design', value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ListPrice/296.4863563508763) || 0},
        {name: 'Building Description', value: ArchitecturalStyle?.join(", ") || ''},
        {name: 'Ownership Description', value: YearBuilt},
        {name: 'Total Floors', value: Heating?.join(", ") || ''},
        {name: 'Geo Area', value: Cooling?.join(", ") || ''},
        {name: 'Pets', value: ParkingFeatures?.join(", ") || ''},
        {name: 'Guest House', value: `${LotSizeAcres} Acre(s) | ${LotSizeSquareFeet} Sqft`},
        {name: 'Garage', value: `${NABOR_LotFrontage} X ${NABOR_LotLeft} X ${NABOR_LotBack} X ${NABOR_LotRight} Approx`},
        {name: 'Garage Description', value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ListPrice/LivingArea) || 0},
        {name: 'Maintenance', value: ParkingFeatures?.join(", ") || ''},
        {name: 'Sewer', value: ParkingFeatures?.join(", ") || ''},
        {name: 'Water', value: ParkingFeatures?.join(", ") || ''},
        {name: 'Windows', value: ParkingFeatures?.join(", ") || ''},
        {name: 'Storm Protection', value: ParkingFeatures?.join(", ") || ''},
        {name: 'Irrigation', value: ParkingFeatures?.join(", ") || ''}
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
                Facts and features
            </Typography>
            </Grid>
            {factsArray.map((f, i)=>
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

export default Building;