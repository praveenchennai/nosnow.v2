import React from 'react';
import { Grid, Divider, Typography} from '@mui/material';

const Facts = (props) => {
    console.log(props)
    var {
        ListPrice, 
        NABOR_Elevation, 
        ParkingFeatures, 
        LotSizeAcres, 
        LotSizeSquareFeet,
        NABOR_LotFrontage, 
        NABOR_LotLeft, 
        NABOR_LotRight, 
        NABOR_LotBack, 
        LivingArea,
        ListPrice, 
        PropertyType,
        RoadSurfaceType,
        View,

        WaterfrontYN,
        
        AssociationYN,
        ElectricOnPropertyYN,
        FireplaceYN,
        NABOR_GulfAccessYN,
        NABOR_PotentialShortSaleYN,
        SeniorCommunityYN,

    } = props;

    var factsArray = [
        {name: 'Payment', value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ListPrice/220.152097695) || 0},
        {name: 'Type', value: PropertyType || ''},
        {name: 'Elevation', value: NABOR_Elevation || ''},
        {name: 'Gulf Access', value: NABOR_GulfAccessYN?'Yes':'No'},
        {name: 'Water Front', value: WaterfrontYN?'Yes':'No'},
        {name: 'Road Type', value: RoadSurfaceType?.join(", ") || ''},
        {name: 'View', value: View?.join(", ") || ''},
        {name: 'Price/Acre', value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ListPrice/LotSizeAcres) || 0},
                
        {name: 'Lot Size', value: `${LotSizeAcres} Acre(s) | ${LotSizeSquareFeet} Sqft`},
        {name: 'Approx Lot Size:', value: `${NABOR_LotFrontage} X ${NABOR_LotLeft} X ${NABOR_LotBack} X ${NABOR_LotRight}`},
        {name: 'Price/sqft', value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ListPrice/LotSizeSquareFeet) || 0},

        {name: 'Water front', value: WaterfrontYN ? "Yes" : "No"},
        {name: 'Association', value: AssociationYN ? "Yes" : "No"},
        {name: 'Electric On Property', value: ElectricOnPropertyYN ? "Yes" : "No"},
        {name: 'Fireplace', value: FireplaceYN ? "Yes" : "No"},
        {name: 'Gulf Access', value: NABOR_GulfAccessYN ? "Yes" : "No"},
        {name: 'Potential Short Sale', value: NABOR_PotentialShortSaleYN ? "Yes" : "No"},
        {name: 'Senior Community', value: SeniorCommunityYN ? "Yes" : "No"},
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

export default Facts;