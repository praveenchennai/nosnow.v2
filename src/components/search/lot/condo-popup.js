import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { listingCss } from 'common/style/style';
import { TextField, Paper , Divider, Toolbar , MenuItem , Checkbox , ListItemText , AppBar, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {setSubCondo} from 'api/lot';
const useStyles = makeStyles(listingCss());

const SubCondoPopUp = (props) => { 
    const classes = useStyles();
    const dispatch = useDispatch();
    const subCondo = useSelector(state=>state.lot.lsubCondo);
    const subCondoOptions = useSelector(state=>state.lot.subCondoOptions);
    const [subCondoSearch, setSubCondoSearch] = useState("")
    const {scdra, setscDra} = props

    const handleSubCondoSearch=(event)=>{
        setSubCondoSearch(event.target.value)
    };

    const handleSubCondoChange=(event)=>{
        var value =[...subCondo];
        if(subCondo.indexOf(event) > -1){
            value = value.filter(v=>v!==event)
        } else {
            value.push(event)
        }
        dispatch(setSubCondo(value))
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
                >Subdivision / Condo</Typography>
                <Button 
                    variant="contained" 
                    className={[classes.btn_orange, classes.mt10].join(' ')}
                    onClick={()=>{
                        setscDra(false);
                        setSubCondoSearch('')
                    }}
                >Close</Button>
            </Toolbar>
        </AppBar>
        <TextField 
            variant="outlined" 
            type="text" 
            margin="normal" 
            label="Type in the first few letters of the SubDivision / Condo."
            placeholder="Type in the first few letters of the SubDivision / Condo."
            name="subCondoSearch" 
            onChange={handleSubCondoSearch}
            value={subCondoSearch || ''} 
            sx={{
                marginLeft: "20px",
                marginRight: "20px",
                minWidth: "400px"
            }}
        />
        <Paper 
            elevation={0}
        >
            {subCondoOptions.filter(f=>subCondo.indexOf(f) > -1).map((pt, index)=>
                <MenuItem value={pt} key={index}
                onClick={()=>handleSubCondoChange(pt)}
                >
                    <Checkbox checked={subCondo.indexOf(pt) > -1}
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
            {subCondoOptions.filter(f=>f.startsWith(subCondoSearch.toUpperCase()) && subCondo.indexOf(f) === -1).slice(0,10).map((pt, index)=>
                <MenuItem value={pt} key={index}
                onClick={()=>handleSubCondoChange(pt)}
                >
                    <Checkbox checked={subCondo.indexOf(pt) > -1}
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

export default SubCondoPopUp;