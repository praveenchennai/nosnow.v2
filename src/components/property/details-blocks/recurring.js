import React, {useEffect, useState} from 'react';
import {Grid, Typography, Divider} from '@mui/material';
import Row from './row'

const RecurringFee = (props) => {
    var {
        AssociationName,
        AssociationName2,

        AssociationFeeFrequency,
        AssociationFee2Frequency,

        AssociationFee,
        AssociationFeeFreq,
        AssociationFee2,

        AssociationFeeIncludes,
        AssociationFee2Includes,

        NABOR_HOAFee,
        NABOR_HOAFeeFreq,

        NABOR_MasterHOAFee,
        NABOR_MasterHOAFeeFreq,

        NABOR_CondoFee,
        NABOR_CondoFeeFreq,

        NABOR_MandatoryClubFeeFreq,
        NABOR_MandatoryClubFee,

        
        
    } = props;

    const [oneTime, setOneTime] = useState({
        AssociationName: undefined, AssociationFeeFrequency: undefined, AssociationFee: 0, AssociationFeeIncludes: []
    })

    const [recurring, setRecurring] = useState({
        AssociationName: undefined, AssociationFeeFrequency: undefined, AssociationFee: 0, AssociationFeeIncludes: []
    })


    useEffect(()=>{
        console.log(AssociationName)
        if(AssociationFee2Frequency==='One Time'){
            setOneTime({
                ...oneTime, 
                AssociationName: AssociationName2, 
                AssociationFeeFrequency: AssociationFee2Frequency, 
                AssociationFee: AssociationFee2, 
                AssociationFeeIncludes: AssociationFee2Includes
            })
        } else if(["Weekly", "Monthly", "Annually", "Bi-Monthly"].includes(AssociationFee2Frequency)){
            setRecurring({
                ...recurring, 
                AssociationName: AssociationName2, 
                AssociationFeeFrequency: AssociationFee2Frequency, 
                AssociationFee: AssociationFee2, 
                AssociationFeeIncludes: AssociationFee2Includes
            })
        }
        if(AssociationFeeFrequency==='One Time'){
            setOneTime({
                ...oneTime, 
                AssociationName: AssociationName, 
                AssociationFeeFrequency: AssociationFeeFrequency, 
                AssociationFee: AssociationFee, 
                AssociationFeeIncludes: AssociationFeeIncludes
            })
        } else if(["Weekly", "Monthly", "Annually", "Bi-Monthly"].includes(AssociationFeeFrequency)){
            setRecurring({
                ...recurring, 
                AssociationName: AssociationName, 
                AssociationFeeFrequency: AssociationFeeFrequency, 
                AssociationFee: AssociationFee, 
                AssociationFeeIncludes: AssociationFeeIncludes
            })
        }
    }, [AssociationFeeFrequency, AssociationFee2Frequency])

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

    return ( 
        <React.Fragment>
            <Grid container item md={12} display="flex" direction="column"
                sx={{
                    backgroundColor: "#56516b",
                    color: "#fff",
                    padding: "10px!important",
                    right: 0
                }}
            >            <Typography 
                sx={{
                    fontSize: "14px", 
                    fontWeight: "700",
                }}
            >
                Financials
            </Typography>
            </Grid>

            <Row value={{label: 'HOA Fee', value: feeValue(NABOR_HOAFee, NABOR_HOAFeeFreq)}} />
            
            <Row value={{label: 'Condo Fee', value: feeValue(NABOR_CondoFee, NABOR_CondoFeeFreq)}} />
            
            <Row value={{label: 'Mandatory Club Fee', value: feeValue(NABOR_MandatoryClubFee, NABOR_MandatoryClubFeeFreq)}} />

            <Row value={{label: 'Master HOA Fee', value: feeValue(NABOR_MasterHOAFee, NABOR_MasterHOAFeeFreq)}} />
            <Divider 
            sx={{
                marginTop: "10px", 
                marginBottom: "0px",
                color: "#000",
                width: "100%"
            }}/>

            <Row value={{label: 'Total Annual Recurring Fees', value: feeValue(AssociationFee, AssociationFeeFreq), bold: true}} />

        </React.Fragment>
    );
}

export default RecurringFee;