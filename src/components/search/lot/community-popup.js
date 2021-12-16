import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import { TextField, Paper , Divider, Toolbar , MenuItem , Checkbox , ListItemText , AppBar, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setCommunity} from 'api/lot';
const useStyles = makeStyles(listingCss());

const CommunityPopUp = (props) => { 
    const classes = useStyles();
    const dispatch = useDispatch();
    const community = useSelector(state=>state.lot.lcommunity);
    const communityOptions = useSelector(state=>state.lot.communityOptions);
    const [communitySearch, setCommunitySearch] = useState("")
    const {cmdra, setcmDra} = props

    const handleCommunitySearch=(event)=>{
        setCommunitySearch(event.target.value)
    };

    const handleCommunityChange=(event)=>{
        var value =[...community];
        if(community.indexOf(event) > -1){
            value = value.filter(v=>v!==event)
        } else {
            value.push(event)
        }
        dispatch(setCommunity(value))
    };


return ( 
    <React.Fragment>
        <AppBar position="sticky" elevation={0} className={classes.appbar_site}>
            <Toolbar>
                <Typography variant="h6"
                    sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#fff",
                        flexGrow: 1
                    }}
                >Commnity / Development Name</Typography>
                <Button 
                    variant="contained" 
                    className={[classes.btn_orange, classes.mt10].join(' ')}
                    onClick={()=>{
                        setcmDra(false);
                        setCommunitySearch('')
                    }}
                >Close</Button>
            </Toolbar>
        </AppBar>
        <TextField 
            variant="outlined" 
            type="text" 
            margin="normal" 
            label="Type in the first few letters of the Community / Development Name."
            placeholder="Type in the first few letters of the Community / Development Name."
            name="communitySearch" 
            onChange={handleCommunitySearch}
            value={communitySearch || ''} 
            sx={{
                marginLeft: "20px",
                marginRight: "20px",
                minWidth: "400px"
            }}
        />
        <Paper 
            elevation={0}
        >
            {communityOptions.filter(f=>community.indexOf(f) > -1).map((pt, index)=>
                <MenuItem value={pt} key={index}
                onClick={()=>handleCommunityChange(pt)}
                >
                    <Checkbox checked={community.indexOf(pt) > -1}
                        sx={{
                            color: "#56516b",
                            '&.Mui-checked': {
                            color: "#56516b",
                            },
                        }}
                    />
                    <ListItemText primary={pt} />
                </MenuItem>                  
            )}
            <Divider />
            {communityOptions.filter(f=>f.startsWith(communitySearch.toUpperCase()) && community.indexOf(f) === -1).slice(0,10).map((pt, index)=>
                <MenuItem value={pt} key={index}
                onClick={()=>handleCommunityChange(pt)}
                >
                    <Checkbox checked={community.indexOf(pt) > -1}
                        sx={{
                            color: "#56516b",
                            '&.Mui-checked': {
                            color: "#56516b",
                            },
                        }}
                    />
                    <ListItemText primary={pt} />
                </MenuItem>                  
            )}
        </Paper>
    </React.Fragment>

)}

export default CommunityPopUp;