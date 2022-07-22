import React from 'react';
import { Grid, Typography, Divider} from '@mui/material';
import Element from './element'
import Title from './element-title'
import {useGetRoomsQuery} from 'services/property'

const PropertyContent = (props) => {


    
    
    var {
        ListingKey,

        PublicRemarks, MlsStatus,RoomsTotal,BathroomsTotalDecimal,
        MLSAreaMajor, ListPrice, 
        ListingId, UnparsedAddress, NABOR_Bedrooms,
        LivingArea, 
        YearBuilt, CountyOrParish,

        NABOR_LotBack,
        NABOR_LotFrontage,
        NABOR_LotLeft,
        NABOR_LotRight,

        City, 
        ParkName, 
        SubdivisionName, 
        CommunityFeatures, Levels, LotSizeArea, LotSizeSquareFeet,
        ListOfficeName, View,
        NABOR_StatusType, PropertyType, 
        ParcelNumber, NABOR_Township,
        ElementarySchool, ElementarySchoolDistrict, 
        HighSchoolDistrict, HighSchool, 
        MiddleOrJuniorSchool, MiddleOrJuniorSchoolDistrict,

        InteriorFeatures,

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
        ArchitecturalStyle,
        GarageSpaces,
        Gas,
        GreenEnergyGeneration,
        ConstructionMaterials,
        Heating, 
        Cooling,
        IrrigationSource,
        PetsAllowed,
        BuildingFeatures,
        PoolPrivateYN,
        SpaFeatures,
        SpaYN,

        ExteriorFeatures,
        ParkingTotal,
        Roof,
        Fencing,
        WaterfrontFeatures,
        AssociationAmenities,
        FrontageType,
        ConstructionMaterials,
        SecurityFeatures,
        AccessibilityFeatures,
        FireplaceFeatures,
        GulfAccess,
        BoatAccess,
        ParkingFeatures,
        PoolFeatures,
        CarPortSpaces,
        CarPortDesc,

        NABOR_HOAFee,
        NABOR_HOAFeeFreq,
        NABOR_CondoFee,
        NABOR_CondoFeeFreq,
        NABOR_MandatoryClubFee,
        NABOR_MandatoryClubFeeFreq,
        NABOR_MasterHOAFee,
        NABOR_MasterHOAFeeFreq,
        AssociationFee,
        AssociationFeeFreq,
        TaxAnnualAmount

    } = props;

    const {rooms, roomStatus, roomLoading, roomError} = useGetRoomsQuery({id:ListingKey}, {
        skip: !ListingKey,
        selectFromResult: ({ data, status, isLoading, error, id, originalArgs }) => {
            return {
                rooms: data?.bundle || [],
                roomStatus: status,
                roomLoading: isLoading,
                roomError: error
            }
        }
    });

    console.log(rooms)

    var mlsArray = [
        {name: 'City', value: City || ''},
        {name: 'Development Name', value: ParkName || ''},
        {name: 'Sub Condo', value: SubdivisionName},
        {name: 'County', value: CountyOrParish || ''},
        
        {name: 'Status Type', value: NABOR_StatusType || ''},
        {name: 'Levels', value: Levels?.join(", ") || ''},
        {name: 'Living Area', value: `${LivingArea || ''} Sqft`},
        {name: 'Lot Size', value: `${LotSizeSquareFeet || ''} Sqft`},
        

        {name: 'Property Type', value: PropertyType || ''},
        {name: 'ParcelNumber', value: ParcelNumber || ''},
        {name: 'Township', value: NABOR_Township || ''},
        {name: 'Lot Dimension', value: ` ${NABOR_LotFrontage} X ${NABOR_LotLeft} X ${NABOR_LotBack} X ${NABOR_LotRight}` || ''},
        //{name: 'Courtesy Of', value: ListOfficeName || ''},

        
        {name: 'Furnished', value: Furnished || ''},
        {name: 'Architectural Style', value: ArchitecturalStyle?.join(', ') || ''},
        {name: 'Flooring', value: Flooring?.join(', ') || ''},
        {name: 'BuildingFeatures', value: BuildingFeatures?.join(', ') || ''},

        {name: 'Elementary School', value: ElementarySchool || '', half: true},
        {name: 'Elementary School District', value: ElementarySchoolDistrict || '', half: true},

        {name: 'Middle / Junior School', value: MiddleOrJuniorSchool || '', half: true},
        {name: 'Middle / Junior School District', value: MiddleOrJuniorSchoolDistrict || '', half: true},

        {name: 'High School', value: HighSchool || '', half: true},
        {name: 'High School District', value: HighSchoolDistrict || '', half: true},

        {name: 'View', value: View?.join(", ") || '', half: true},
        {name: 'Community Features', value: CommunityFeatures?.join(", ") || '', half: true},
    ]

    var interiorArray = [
        
        
        {name: 'Rooms Total', value: RoomsTotal || ''},
        {name: 'Bedrooms', value: BedroomsTotal || ''},
        {name: 'BathroomsFull', value: BathroomsFull || ''},
        {name: 'BathroomsHalf', value: BathroomsHalf || ''},

        {name: 'Living Area', value: `${LivingArea || ''} Sqft`},
        {name: 'Sewer', value: `${Sewer || ''}`},
        {name: 'Utilities', value: Utilities || ''},
        {name: 'Carport Spaces', value: CarportSpaces || ''},

        {name: 'Covered Spaces', value: CoveredSpaces || ''},
        {name: 'Electric', value: Electric || ''},
        {name: 'Pets Allowed', value: PetsAllowed || ''},
        {name: 'Irrigation Source', value: IrrigationSource || ''},

        {name: 'Garage Spaces', value: GarageSpaces || ''},
        {name: 'Gas', value: Gas || ''},
        {name: 'Green Energy Generation', value: GreenEnergyGeneration || ''},
        {name: 'Irrigation Source', value: IrrigationSource || ''},

        {name: 'Private Pool', value: PoolPrivateYN ? 'Yes' : 'No'},
        {name: 'Private SPA', value: SpaYN ? 'Yes' : 'No'},
        {name: 'Pool Features', value: PoolFeatures?.join(', ') || ''},
        {name: 'Spa Features', value: SpaFeatures?.join(', ') || ''},

        

        {name: 'Appliances', value: Appliances?.join(", ") || '', half: true},
        {name: 'Interior Features', value: InteriorFeatures?.join(", ") || '', half: true},

        {name: 'Bedroom Features', value: RoomBedroomFeatures?.join(", ") || '', half: true},
        {name: 'Dining Room Features', value: RoomDiningRoomFeatures?.join(", ") || '', half: true},

        {name: 'Window Features', value: WindowFeatures?.join(", ") || '', half: true},
        {name: 'Door Features', value: DoorFeatures?.join(", ") || '', half: true},

        {name: 'Laundry Features', value: LaundryFeatures?.join(", ") || '', half: true},
        {name: 'Patio And Porch Features', value: PatioAndPorchFeatures?.join(", ") || '', half: true},

        {name: 'Spa Features', value: SpaFeatures?.join(", ") || '', half: true},
        {name: 'Cooling', value: Cooling?.join(", ") || '', half: true},
        
        {name: 'Heating', value: Heating?.join(", ") || '', half: true},
        {name: 'Foundation Details', value: FoundationDetails?.join(", ") || '', half: true},


        
    ]

    var exteriorArray = [
        
        {name: 'Total Parking', value: ParkingTotal || ''},
        {name: 'Roof', value: Roof?.join(", ") || ''},
        {name: 'Fencing', value: Fencing?.join(", ") || ''},
        {name: 'Frontage Type', value: FrontageType?.join(", ") || ''},

        {name: 'Gulf Access', value: GulfAccess  || ''},
        {name: 'Boat Access', value: BoatAccess || ''},
        {name: 'Car Port Spaces', value: CarPortSpaces || ''},
        {name: 'Car Port Desc', value: CarPortDesc || ''},

        {name: 'Construction Materials', value: ConstructionMaterials?.join(", ") || '', half: true},
        {name: 'Foundation Details', value: FoundationDetails?.join(", ") || '', half: true},

        {name: 'Exterior Features', value: ExteriorFeatures?.join(", ") || '', half: true},
        {name: 'Security Features', value: SecurityFeatures?.join(", ") || '', half: true},

        {name: 'Accessibility Features', value:  AccessibilityFeatures?.join(", ") || '', half: true},
        {name: 'Fireplace Features', value: FireplaceFeatures?.join(", ") || '', half: true},

        {name: 'Parking Features', value: ParkingFeatures?.join(", ") || '', half: true},
        {name: 'Amenities', value: AssociationAmenities?.join(", ") || '', half: true},

        {name: 'Waterfront Features', value: WaterfrontFeatures?.join(", ") || '', half: true},
        {name: 'Pool Features', value: PoolFeatures?.join(", ") || '', half: true},
    ]

    const feeValue = (fee, freq)=>{
        if(fee){
            if(freq){
                return `$${fee.toFixed(2)} - ${freq}`
            } else {
                return `$${fee.toFixed(2)}`
            }
        } else {
            return '$0.00'
        }
        
    }

    var financialsArray = [
        {name: 'HOA Fee', value:feeValue(NABOR_HOAFee, NABOR_HOAFeeFreq)},
        {name: 'Condo Fee', value: feeValue(NABOR_CondoFee, NABOR_CondoFeeFreq)},
        {name: 'Mandatory Club Fee', value: feeValue(NABOR_MandatoryClubFee, NABOR_MandatoryClubFeeFreq)},
        {name: 'Master HOA Fee', value: feeValue(NABOR_MasterHOAFee, NABOR_MasterHOAFeeFreq)},

        {name: 'Total Annual Recurring Fees', value: feeValue(AssociationFee, AssociationFeeFreq), half: true, color: ''},
        {name: 'Tax Annual Amount', value: feeValue(TaxAnnualAmount, AssociationFeeFreq), half: true, color: ''},
        
        {name: 'Association Amenities [Included in Fees]', value: AssociationAmenities?.join(", ") || '', para: true},

    ]

    return ( 
        <Grid container item md={12}>
            <Grid container item md={12} alignItems="center" justifyContent="space-between"
                sx={{
                    paddingX: "1rem",
                    paddingTop: "1rem",
                    opacity: .8,
                    right: 0
                }}
            >
                <Typography sx={{fontSize: "25px",  fontWeight: "bold"}}>{UnparsedAddress || ''}</Typography>
                <Typography sx={{fontSize: "20px", fontWeight: "bold", color: "#FF5722"}}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ListPrice)}</Typography>
            </Grid>
            <Grid container item md={12} alignItems="center" justifyContent="space-between"
                sx={{
                    paddingX: "1rem",
                    paddingBottom: "1rem",
                    opacity: .5,
                    right: 0
                }}
            >
                <Typography sx={{fontSize: "15px",  fontWeight: "bold"}}>{MLSAreaMajor || ''}</Typography>
                <Typography sx={{fontSize: "12px",  fontWeight: "bold"}}>MLS: {ListingId || ''}</Typography>
            </Grid>
            <Divider 
                sx={{
                    marginTop: "10px", 
                    marginBottom: "0px",
                    color: "#000",
                    width: "100%"
                }}
            />
            <Grid container item md={12} justifyContent="space-evenly">
                <Element value={{label: "Bedrooms", value: NABOR_Bedrooms}}/>
                <Element value={{label: "BathRooms", value: BathroomsTotalDecimal}}/>
                <Element value={{label: "Living Area", value: LivingArea ? `${LivingArea} sqft` : ''}}/>
                <Element value={{label: "List Price/SqFt", value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ListPrice/LivingArea)}}/>
            </Grid>
            <Grid container item md={12} justifyContent="space-evenly">
                <Element value={{label: "County", value: CountyOrParish}}/>
                <Element value={{label: "Year Build", value: YearBuilt}}/>
                <Element value={{label: "Payment", value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ListPrice/296.4863563508763) || 0}}/>
                <Element value={{label: "Status", value: MlsStatus}}/>
            </Grid>
            <Grid container item md={12} alignItems="center" justifyContent="space-between"
                sx={{
                    paddingX: "1rem",
                    paddingTop: "1rem",
                    opacity: .8
                }}
            >
                <Typography variant='paragraph' 
                    sx={{
                        fontSize: "15px", 
                        fontWeight: "600",
                        textAlign: "justify",
                        lineHeight: "30px",
                        margin: "5px"
                    }}
                >{PublicRemarks || ''}</Typography>
            </Grid>
            <Title value={{label: 'MLS DETAILS'}}/>
            <Grid container item md={12} justifyContent="space-evenly">
                {mlsArray.map((f, i)=><Element key={i} value={{label: f.name, value: f.value, para: f.para, half: f.half}}/>)}
            </Grid>
            <Title value={{label: 'INTERIOR FEATURES'}}/>


            <Grid container item md={12} justifyContent="space-evenly">
                {interiorArray.map((f, i)=><Element key={i} value={{label: f.name, value: f.value, para: f.para, half: f.half}}/>)}
            </Grid>

            <Title value={{label: 'FINANCIALS'}}/>
            <Grid container item md={12} justifyContent="space-evenly">
                {financialsArray.map((f, i)=><Element key={i} value={{label: f.name, value: f.value, para: f.para, half: f.half}}/>)}
            </Grid>
            <Title value={{label: 'ROOM DIMENSIONS'}}/>
            <Grid container item md={12} justifyContent="space-evenly">
                {rooms?.map((f, i)=><Element key={i} value={{label: f.RoomType, value: f.RoomDimensions, para: false, half: false}}/>)}
            </Grid>
            <Title value={{label: 'EXTERIOR FEATURES'}}/>
            <Grid container item md={12} justifyContent="space-evenly">
                {exteriorArray.map((f, i)=><Element key={i} value={{label: f.name, value: f.value, para: f.para, half: f.half}}/>)}
            </Grid>
            
            
        </Grid>
    );
}

export default PropertyContent;