import React from 'react';
import {Grid, Typography, Divider} from '@mui/material';

const Interior = (props) => {
    var {
        InteriorFeatures,

        LivingArea,
        RoomsTotal,
        BedroomsTotal,
        BathroomsFull,
        BathroomsHalf,
       
        Appliances,
        RoomBedroomFeatures,
        RoomDiningRoomFeatures,
        WindowFeatures,
        DoorFeatures,
        LaundryFeatures,
        PatioAndPorchFeatures,
        SpaFeatures,
        FoundationDetails,
        

        Sewer,
        Utilities,
        
        CarportSpaces,
        CoveredSpaces,
        DoorFeatures,
        Electric,
        Flooring,
        Furnished,
        GarageSpaces,
        Gas,
        GreenEnergyGeneration,
        ConstructionMaterials,
        Heating, 
        Cooling,
        IrrigationSource,
        
    } = props;

    var array = [
        {name: 'Interior Features', value: InteriorFeatures?.join(", ") || ''},
        
        {name: 'Rooms Total', value: RoomsTotal || ''},
        {name: 'Bedrooms', value: BedroomsTotal || ''},
        {name: 'BathroomsFull', value: BathroomsFull || ''},
        {name: 'BathroomsHalf', value: BathroomsHalf || ''},

        {name: 'Appliances', value: Appliances?.join(", ") || ''},
        {name: 'Bedroom Features', value: RoomBedroomFeatures?.join(", ") || ''},
        {name: 'Dining Room Features', value: RoomDiningRoomFeatures?.join(", ") || ''},
        {name: 'Window Features', value: WindowFeatures?.join(", ") || ''},
        {name: 'Door Features', value: DoorFeatures?.join(", ") || ''},
        {name: 'Laundry Features', value: LaundryFeatures?.join(", ") || ''},
        {name: 'Patio And Porch Features', value: PatioAndPorchFeatures?.join(", ") || ''},
        {name: 'Spa Features', value: SpaFeatures?.join(", ") || ''},
        
        {name: 'Heating', value: Heating?.join(", ") || ''},
        {name: 'Cooling', value: Cooling?.join(", ") || ''},
        {name: 'Foundation Details', value: FoundationDetails?.join(", ") || ''},
        {name: 'Living Area', value: `${LivingArea || ''} Sqft - Floor Plan Service`},
        {name: 'Sewer', value: `${Sewer || ''}`},
        {name: 'Utilities', value: Utilities || ''},
        {name: 'Carport Spaces', value: CarportSpaces || ''},
        {name: 'Covered Spaces', value: CoveredSpaces || ''},
        {name: 'Electric', value: Electric || ''}
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
                Interior Features
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
                            fontWeight: "600",
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

export default Interior;