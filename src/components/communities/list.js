import React, {useState} from 'react';
import { Grid, Button, Paper, TextField, CardHeader, Card, Typography, Link, Dialog } from '@mui/material';
import { useSelector } from 'react-redux';
import { useCommunityContentQuery } from 'services/community'
import { useHistory, useParams } from "react-router-dom";

const CommunityList = () => {
    const communities = useSelector(state=>state.communities.content);
    const contents = useSelector(state=>state.content.paras);
    const [keyword, setKeyword] = useState('')
    const navi = useHistory();

    const handleKeywordChange = (event) =>{
        setKeyword(event.target.value)
    }

    const handleAlphabet = (event) =>{
        setKeyword(event)
    }
    const handleFocus = () =>{}
    
    return ( 
        <React.Fragment>
            <Paper square  md={12}>
                <Typography 
                    sx={{
                        fontSize: "12px", 
                        fontWeight: "700",
                        paddingLeft: "10px",
                        backgroundColor: '#FF5722',
                        color: "#fff"
                    }}
                >
                    Naples, Communities
                </Typography>
            </Paper>

            <Grid container item md={12} display="flex" justify="space-between"
                sx={{
                    padding: "10px"
                }}
            >
                <Grid xs={12} item>
                    <TextField 
                        variant="outlined" 
                        type="text" fullWidth 
                        margin="normal" 
                        label="Search By Community Name"
                        placeholder = "Enter MLS# or Address"
                        name="keyword" 
                        onChange={handleKeywordChange}
                        onFocus={handleFocus}
                        value={keyword || ''} 
                    />
                </Grid>
                <Grid container item md={12} display="flex" justifyContent={'center'}
                    sx={{
                        padding: "10px"
                    }}
                >

                    <Typography 
                        sx={{
                            fontSize: "16px", 
                            fontWeight: "700",
                            paddingLeft: "10px",
                            letterSpacing: "2px"
                        }}
                        align="center"
                    >
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map(alpha=><Link key={alpha}
                            onClick={()=>handleAlphabet(alpha)}
                            sx={{
                                textDecoration: "none",
                                cursor: "pointer",
                                color: "#000",
                                marginRight: "5px"
                            }}
                        
                        >{alpha}</Link>)}
                        
                        
                        
                        
                        
                        
                    </Typography>
                </Grid>
                {communities.filter(c=>{
                    return c.name.toLowerCase().startsWith(keyword.toLowerCase())
                })?.map((community, key)=>

                    <Card key={key} display="flex" direction={'column'}
                        sx={{
                            width: "350px",
                            height: "auto",
                            margin: "10px"
                        }}
                    >
                        <Typography 
                            sx={{
                                fontSize: "14px", 
                                fontWeight: "700",
                                paddingLeft: "10px",
                                paddingTop: "10px"
                            }}
                        >
                                {community.name}
                        </Typography>
                        <CardHeader 
                            title={
                                <Typography 
                                    sx={{
                                        fontSize: "12px", 
                                        fontWeight: "400",
                                        paddingLeft: "10px"
                                    }}
                                >
                                    {community.metaTitle}
                                </Typography>
                            } 
                        />
                        
            
                        <Grid container item md={12} display="flex" direction="column"
                            sx={{
                                padding: "10px!important",
                                right: 0
                            }}
                        >
                            <Typography 
                                sx={{
                                    fontSize: "14px"
                                }}
                            >
                                {community.metaDescription}
                            </Typography>
                        </Grid>
                        <Grid container item md={12} display="flex" direction="column"
                            sx={{
                                padding: "10px!important",
                                right: 0
                            }}
                        >
                            <Button 
                                color={"primary"}
                                sx={{
                                    fontSize: "14px",
                                    backgroundColor: "#ED6C02",
                                    color: "#fff",
                                    "&:hover":{
                                        backgroundColor: "#ED6C02",
                                        color: "#fff"
                                    }
                                    
                                }}
                                onClick={()=>navi.push(`community/${community.seoUrl}`)}
                            >
                                More Info
                            </Button>
                        </Grid>
                        
                        </Card>
                )}

                </Grid>
            </React.Fragment>

    );
}

export default CommunityList;