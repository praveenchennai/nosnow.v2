import React, {useEffect, useState} from 'react';
import { makeStyles } from '@mui/styles';
import { useParams } from "react-router-dom";
import { listingCss } from 'common/style/style';
import { TextField, Paper , Toolbar, AppBar, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import * as service from '../../service';
import { setLoading, setRegister } from 'api/auth';
import { useContactMutation  } from "services/mail";
const useStyles = makeStyles(listingCss());

const ContactPopUp = (props) => { 
    const {setPopUp, setSnackBar} = props;
    const {id} = useParams();
    const classes = useStyles();
    const register = useSelector(state=>state.auth.register);
    const dispatch = useDispatch();
    const [comments, setComments] = useState('');
    
    const [loading, setLoading] = useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const [ contactus, { isLoading: isUpdating }] = useContactMutation();

    useEffect(()=>{
        if(register.firstName.length>0 && register.lastName.length>0 && register.email.length>0 && register.phone_number.length>0 && comments.length>0){
            setDisableButton(false)
        }
    }, [register, comments])

    const onFirstNameChange = (event) =>{
        dispatch(setRegister({firstName: event.target.value}))
    }

    const onLastNameChange = (event) =>{
        dispatch(setRegister({lastName: event.target.value}))
    }

    const onEmailChange = (event) =>{
        dispatch(setRegister({email: event.target.value}))
    }

    const onPhoneChange = (event) =>{
        if(register.phone.length<11){
            dispatch(setRegister({phone: event.target.value}));
            dispatch(setRegister({phone_number: `+1${event.target.value}`}));
        }
    }

    const onComments = (event) =>{
        setComments(event.target.value);
    }

    const sendMailFunction = () =>{
        contactus({
            
            "from": {
                "module": "Property",
                "title": id,
                "url": "https://www.nosnownaples.com"
            },
            "value": {
                "name": `${register.firstName} ${register.lastName}`,
                "email": register.email,
                "phone": register.phone_number,
                "comments": comments
            }
            
        })
        .unwrap()
        .then(result=>{
            setPopUp(false);
            setSnackBar(true);
            setLoading(false)
        })
        .catch(err=>{console.log(err)})
    }

    const onSend = () =>{
        setLoading(true);
        setDisableButton(true);
        service.register(register)
        .then(result=>{
            sendMailFunction();
        })
        .catch(error=>{
            if(error==='UsernameExistsException'){
                sendMailFunction();
            }
        })
    }

    

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
                >Request Info</Typography>
                <Button 
                    variant="contained" 
                    className={[classes.btn_orange, classes.mt10].join(' ')}
                    onClick={()=>{
                        setPopUp(false);
                    }}
                >Close</Button>
            </Toolbar>
        </AppBar>
        <Paper elevation={0} sx={{
            padding: "10px",
            minHeigth: "800px"
        }}>
            <TextField 
                variant="outlined" 
                type="text" 
                fullWidth
                margin="normal" 
                label="First Name"
                placeholder="Enter your first name"
                name="firstName" 
                onChange={onFirstNameChange}
                value={register.firstName || ''} 
            />
            <TextField 
                variant="outlined" 
                type="text" 
                fullWidth
                margin="normal" 
                label="Last Name"
                placeholder="Enter your last name"
                name="lastName" 
                onChange={onLastNameChange}
                value={register.lastName || ''} 
            />
            <TextField 
                variant="outlined" 
                type="text" 
                fullWidth
                margin="normal" 
                label="E-Mail"
                placeholder="Enter your email address"
                name="email" 
                onChange={onEmailChange}
                value={register.email || ''} 
            />
            <TextField 
                variant="outlined" 
                type="number" 
                fullWidth
                margin="normal" 
                label="Phone"
                placeholder="Enter your Phone Number"
                name="phone" 
                onChange={onPhoneChange}
                value={register.phone || ''}  
             />
            <TextField 
                variant="outlined" 
                type="text" 
                fullWidth
                multiline
                rows={5}
                margin="normal" 
                label="Questions / Comments"
                placeholder="Enter your questions or comments"
                name="comments" 
                onChange={onComments}
                value={comments || ''}    
            />
        
            <Button 
                color={"primary"}
                sx={{
                    fontSize: "14px",
                    backgroundColor: "#ED6C02",
                    color: "#fff",
                    marginTop: "30px",
                    marginBottom: "10px",
                    "&:hover":{
                        backgroundColor: "#ED6C02",
                        color: "#fff"
                    },
                    "&:disabled": {
                        backgroundColor: "#939393de",
                        color: "#dfdcdcde"
                    }
                    
                }}
                size={'large'}
                fullWidth
                onClick={(()=>onSend())}
                disabled={disableButton || loading}
            >
                {loading?'Please Wait...' : 'Send'}
            </Button>
        </Paper>
    </React.Fragment>

)}

export default ContactPopUp;