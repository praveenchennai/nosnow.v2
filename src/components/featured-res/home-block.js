import React from 'react';
import { Grid, Typography} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import PropertyCard from '../property/card'
import {useMultipleCustomQuery} from 'services/bridge-api'

const theme = createTheme();

var orderFlow = [
    {id: 1, query:'&PropertyType=Residential&ListAgentMlsId=505199&MlsStatus=Active&sortBy=ListPrice&order=desc'},
    {id: 2, query:'&PropertyType=Residential&ListAgentMlsId=505199&MlsStatus.in=Pending&sortBy=ListPrice&order=desc'},
    {id: 3, query:'&PropertyType=Residential&ListAgentMlsId=505199&MlsStatus=Pending With Contingencies&sortBy=ListPrice&order=desc'},
    {id: 4, query:'&PropertyType=Residential&ListAgentMlsId=505199&MlsStatus=Sold&sortBy=CloseDate&order=desc'},
]

const FeaturedResHomeBlock = () => {

    const {properties, total, pStatus, pIsLoading, pError} = useMultipleCustomQuery({
        url: orderFlow,
        search: '',
        limit: 10,
        start: 0,
        index: 0
    }, {
        selectFromResult: ({ data, status, isLoading, error }) => {
             return {
                properties: data?.properties || [],
                total: data?.total || [],
                pStatus: status,
                pIsLoading: isLoading,
                pError: error
            }
        }
    });

    console.log("properties", properties)

    
    return (
        <Grid container item maxWidth="false" md={12} 
            id="featuredres"
            display="flex"
            justifyContent="center"
        >
            <Grid container item md={12} direction="row" alignItems="center" justifyContent="flex-start"
                sx={{
                    marginLeft: "30px",
                    marginTop: "20px"
                }}
            >
                <InsertLinkIcon size="large" 
                    sx={{
                        color: "#ff5722",
                        padding: "5px"
                    }}
                />
                <Typography 
                    display="inline"
                    sx={{
                        fontWeight: "500",
                        fontSize: "26px",
                        padding: "5px"
                    }}
                >
                    Featured
                </Typography>
                <Typography 
                    display="inline"
                    sx={{
                        color: "#ff5722",
                        fontWeight: "500",
                        fontSize: "26px",
                        padding: "5px"
                    }}
                >
                    Residential
                </Typography>
                
            </Grid>
            <Grid container item md={12} direction="row" alignContent="center" justifyContent="flex-start"
                        sx={{
                            marginLeft: "30px",
                            marginBottom: "20px",

                        }}
            >
                <Typography 
                    sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        padding: "5px"
                    }}
                >
                    Checkout featured Residential Properties of Naples
                </Typography>
            </Grid>
            <Grid container item maxWidth="false" spacing={2} direction="row" justifyContent="flex-start"
                sx={{
                    paddingLeft: {
                        xs:"0px", 
                        sm: "50px"
                    },
                    paddingRight: {
                        xs:"0px", 
                        sm: "50px"
                    },
                }}
            >
                {properties?.map((g, index)=>{
                    return (
                        <Grid container item 
                            direction="row" 
                            alignContent="center" 
                            justifyContent="flex-start"
                            key={index}
                            sx={{
                                width:{
                                    xs:"100%",
                                    md: "50%",
                                    lg: "25%",
                                    xl:"20%"
                                }
                            }}
                        >
                            <PropertyCard {...g} />
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default FeaturedResHomeBlock;