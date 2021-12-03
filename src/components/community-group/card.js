import React, { useState} from 'react';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux'
import {Chip, ListItem, Divider, Grid, Grow, CardMedia, Card, List, CardContent, Typography} from '@mui/material';
import { listingCss } from 'common/style/style';
export const searchFields = React.createContext();

const useStyles = makeStyles(listingCss());


const CommunityGroupCard = (props) => {

    var {
        title, 
        subTitle, 
        description, 
        image, url
    } = props;

    const block = useSelector(state=>state.communityGroup.block);
    const [eli, setEli] = useState(2);

    const hoverChange = (params) =>{
        if(params==='in'){
            setEli(10)
        } else {
            setEli(2)
        }
        
    }

    const classes = useStyles();
    return ( 
        <React.Fragment>
            <Grow in={true} style={{ transitionDelay: '50ms' }}>
            <Card 
                className={classes.communityCard}
                elevation={eli}
                onMouseOver={()=>hoverChange('in')}
                onMouseOut={()=>hoverChange('out')}
            >
                <Grid container item md={12} display="flex" direction="column"
                    sx={{
                        backgroundColor: "#56516b",
                        color: "#fff",
                        padding: "10px!important",
                        right: 0
                    }}
                >
                    <Typography sx={{color:"#fff", fontSize: "16px", fontWeight: "500"}}>{title || ''}</Typography>
                    <Typography sx={{color:"#fff", fontSize: "14px", fontWeight: "400"}} noWrap>{subTitle || ''}</Typography>
            </Grid>
                <CardMedia
                    component="img"
                    height="250"
                    image={image}
                    alt="green iguana"
                />
                
                <CardContent sx={{
                    paddingY: "2px"
                }}>
                    {/* <Typography 
                        sx={{
                            fontSize: "14px", 
                            fontWeight: "500",
                            minHeight: "40px"
                        }}
                    >{description || ''}</Typography>
                    <Divider sx={{marginTop: "10px", marginBottom: "0px"}}/> */}
                    {
                        block.map((b, index)=>{
                            return (
                                <List key={index} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                    <Typography sx={{fontSize: "14px", fontWeight: "500", color: "#ff5722"}}>{b?.title || ''}</Typography>
                                    {
                                        b.stats.map((s, sindex)=>{
                                            return (
                                                <ListItem key={sindex} sx={{paddingX:"2px", paddingY:"2px"}}>
                                                    <Grid container item md={12} justifyContent="space-between">
                                                        <Typography sx={{fontSize: "12px", fontWeight: "400"}}>{s?.title || ''}</Typography>
                                                        <Typography sx={{fontSize: "12px", fontWeight: "400"}}>{s?.value || ''}</Typography>
                                                    </Grid>
                                                </ListItem>
                                            )
                                        })
                                    }
                                    
                                </List>
                            )
                        })
                    }
                    {/* <Typography sx={{fontSize: "14px", fontWeight: "500"}}>{CountyOrParish || ''}</Typography>
                    <Divider sx={{marginTop: "10px", marginBottom: "10px"}}/>
                    <Typography sx={{fontSize: "14px", fontWeight: "600", marginBottom: "10px"}}>{ArchitecturalStyle?.join(", ") || ''}</Typography>
                    <Chip sx={{margin: "2px"}} label={`${BathroomsTotalDecimal || '?'} Baths` } />
                    <Chip sx={{margin: "2px"}} label={`${LivingArea || '?'} Sqft` } />
                    <Chip sx={{margin: "2px"}} label={`${NABOR_Bedrooms || '?'} Beds` } />
                    <Chip sx={{margin: "2px"}} label={`Built ${YearBuilt || '?'}` } /> */}
                </CardContent>
            </Card>
            </Grow>
        </React.Fragment>
    );
}

export default CommunityGroupCard;