import React from 'react';
import { Divider,  Grid, Typography, Container} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { useSelector } from 'react-redux'
import CommunityGroupCard from './card'

const theme = createTheme();

const CommunityGroupHomeBlock = () => {

    const communityGroups = useSelector(state=>state.communityGroup.group);
   
    return (
        <Grid container item maxWidth="false" md={12}
            display="flex"
            justifyContent="center"
        >
            <Grid container item md={12} direction="row" alignItems="center" justifyContent="flex-start"
            sx={{
                marginLeft: "10px",
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
                    Community
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
                    Lifestyles
                </Typography>
                
            </Grid>
            <Grid container item md={12} direction="row" alignContent="center" justifyContent="flex-start"
                        sx={{
                            marginLeft: "10px",
                            marginBottom: "20px"
                        }}
            >
                <Typography 
                    sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        padding: "5px"
                    }}
                >
                    Naples features 10 different types of lifestyles.
                </Typography>
            </Grid>
            <Grid container item maxWidth="false" spacing={5} direction="row" justifyContent="flex-start"
                sx={{
                    paddingLeft: "50px",
                    paddingRight: "50px"
                }}
            >
                {communityGroups?.map((g, index)=>{
                    return (
                        <Grid container item direction="row" alignContent="center" justifyContent="flex-start"
                            key={index}
                            sx={{
                                width:"20%"
                            }}
                        >
                            <CommunityGroupCard  {...g} />
                        </Grid>
                    )
                
                })}
            </Grid>
        </Grid>
    )
}

export default CommunityGroupHomeBlock;