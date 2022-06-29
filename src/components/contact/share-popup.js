import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { TextField, Paper , Toolbar, AppBar, Button, Typography } from '@mui/material';
import { useShareMutation  } from "services/mail";

const SharePopUp = (props) => { 
    const {setSharePopUp, setShareSnackBar} = props;
    const {id} = useParams();
   
    const [loading, setLoading] = useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const [form, setForm] = useState({remail: '', rname: '', name: '', email: '', phone: '', comments: ''})
    const [ sendToFriend, { isLoading: isUpdating }] = useShareMutation();

    useEffect(()=>{
        if(form.name.length>0 && form.email.length>0 && form.rname.length>0 && form.remail.length>0){
            setDisableButton(false)
        }
    }, [form])

    const sendMailFunction = () =>{
        setLoading(true);
        setDisableButton(true);
        sendToFriend({
            "recipient": {
                name: form.rname,
                email: form.remail
            },
            "from": {
                "module": "Property",
                "title": id,
                "url": `https://www.nosnownaples.com/details/${id}`
            },
            "value": {
                "name": form.name,
                "email": form.email,
                "phone": form.phone,
                "comments": form.comments
            }
        })
        .unwrap()
        .then(result=>{
            setSharePopUp(false);
            setShareSnackBar(true);
            setLoading(false)
        })
        .catch(err=>{console.log(err)})
    }
    

return ( 
    <React.Fragment>
        <AppBar position="sticky" elevation={0} 
            sx={{
                background: "#56516b",
                color: "#fff",
                paddingBottom: 6,
                paddingTop: 6,
                fontWeight: "bolder",
                '&:hover': {
                    background: "#6a6485"
                }
            }}
        >
            <Toolbar>
                <Typography variant="h6"
                    sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#fff",
                        flexGrow: 1
                    }}
                >Send to Friend</Typography>
                <Button 
                    variant="contained" 
                    sx={{
                        marginTop: "10px",
                        background: "#FE8200",
                        marginLeft: 10,
                        color: "#fff",
                        paddingBottom: 6,
                        paddingTop: 6,
                        fontWeight: "bolder",
                        '&:hover': {
                            background: "#FE8200"
                        }
                    }}
                    onClick={()=>{
                        setSharePopUp(false);
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
                label="Recipient Name"
                placeholder="Enter your recipient name"
                name="rname" 
                onChange={(event)=>setForm({...form, rname: event.target.value})}
                value={form.rname || ''} 
            />
            <TextField 
                variant="outlined" 
                type="text" 
                fullWidth
                margin="normal" 
                label="Recipient E-Mail"
                placeholder="Enter your recipient email"
                name="remail" 
                onChange={(event)=>setForm({...form, remail: event.target.value})}
                value={form.remail || ''} 
            />
            <TextField 
                variant="outlined" 
                type="text" 
                fullWidth
                margin="normal" 
                label="Your Name"
                placeholder="Enter your name"
                name="name" 
                onChange={(event)=>setForm({...form, name: event.target.value})}
                value={form.name || ''} 
            />
            <TextField 
                variant="outlined" 
                type="text" 
                fullWidth
                margin="normal" 
                label="E-Mail"
                placeholder="Enter your email address"
                name="email" 
                onChange={(event)=>setForm({...form, email: event.target.value})}
                value={form.email || ''} 
            />
            <TextField 
                variant="outlined" 
                type="number" 
                fullWidth
                margin="normal" 
                label="Phone"
                placeholder="Enter your Phone Number"
                name="phone" 
                onChange={(event)=>setForm({...form, phone: event.target.value})}
                value={form.phone || ''}  
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
                onChange={(event)=>setForm({...form, comments: event.target.value})}
                value={form.comments || ''}    
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
                onClick={(()=>sendMailFunction())}
                disabled={disableButton || loading}
            >
                {loading?'Please Wait...' : 'Send'}
            </Button>
        </Paper>
    </React.Fragment>

)}

export default SharePopUp;