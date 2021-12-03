
export const getPropertySubTypes = (state, url) =>{
    return url;
}

export const getAttachedGarageYN = (AttachedGarageYN, url) =>{
    if(AttachedGarageYN==='Attached'){
        return `${url}&AttachedGarageYN=true`;
    } else if(AttachedGarageYN==='Detached'){
        return `${url}&AttachedGarageYN=false`
    } else {
        return url;
    }
}

export const getGarageSpaces = (GarageSpaces, url) =>{
    switch(GarageSpaces){
        case 1:
            return `${url}&GarageSpaces.gt=1`;
        case 2:
            return `${url}&GarageSpaces.gt=2`;
        case 3:
            return `${url}&GarageSpaces.gt=3`;
        case 4:
            return `${url}&GarageSpaces.gt=4`;
        case 5:
            return `${url}&GarageSpaces.gt=5`;
        case 6:
            return `${url}&GarageSpaces.gt=6`;
        default:
            return url;
    }
}

export const getPriceRangeMin = (min, url) =>{
    switch(min){
        case 0:
            return url;
        default:
            return  `${url}&ListPrice.gte=${min}`;
    }
}

export const getPriceRangeMax = (max, url) =>{
    switch(max){
        case 0:
            return url;
        default:
            return  `${url}&ListPrice.lte=${max}`;
    }
}

export const getBedroomsTotalMin = (min, url) =>{
    switch(min){
        case 0:
            return url;
        default:
            return  `${url}&BedroomsTotal.gte=${min}`;
    }
}

export const getBedroomsTotalMax = (max, url) =>{
    switch(max){
        case 0:
            return url;
        default:
            return  `${url}&BedroomsTotal.lte=${max}`;
    }
}

export const getBathroomsTotalDecimalMin = (min, url) =>{
    switch(min){
        case 0:
            return url;
        default:
            return  `${url}&BathroomsTotalDecimal.gte=${min}`;
    }
}

export const getBathroomsTotalDecimalMax = (max, url) =>{
    switch(max){
        case 0:
            return url;
        default:
            return  `${url}&BathroomsTotalDecimal.lte=${max}`;
    }
}



export const getLivingAreaMin = (min, url) =>{
    switch(min){
        case '':
        case 0:
            return url;
        default:
            return  `${url}&LivingArea.gte=${min}`;
    }
}

export const getLivingAreaMax = (max, url) =>{
    switch(max){
        case '':
        case 0:
            return url;
        default:
            return  `${url}&LivingArea.lte=${max}`;
    }
}

export const getYearBuiltMin = (min, url) =>{
    switch(min){
        case '':
        case 0:
            return url;
        default:
            return  `${url}&YearBuilt.gte=${min}`;
    }
}

export const getYearBuiltMax = (max, url) =>{
    switch(max){
        case '':
        case 0:
            return url;
        default:
            return  `${url}&YearBuilt.lte=${max}`;
    }
}

export const getWaterfrontFeatures = (WaterfrontFeatures, url) =>{
    if(WaterfrontFeatures.length>0){
        return  `${url}&WaterfrontFeatures=${WaterfrontFeatures}`;
    } else {
        return url;
    }
}

export const getNABOR_PetsLimitMaxNumber = (NABOR_PetsLimitMaxNumber, url) =>{
    if(NABOR_PetsLimitMaxNumber==='Allowed'){
        return  `${url}&NABOR_PetsLimitMaxNumber=${NABOR_PetsLimitMaxNumber}`;
    } else {
        return url;
    }
}


