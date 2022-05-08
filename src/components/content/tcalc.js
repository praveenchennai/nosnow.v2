import React, {useState } from 'react';
import { Container, List, Typography, Grid, Card, Paper, TextField, Button } from '@mui/material';
const Mortgage = () => {
    const [tcal, setTcal] = useState({
        homePrice: 100000,
        downPayment: 10,
        loadTerm: 30,
        interestRate: '5.5'
    })
    const onSent = () => {
        console.log(`http://morgage.s3-website-us-west-2.amazonaws.com/?LOANAMOUNT=${tcal.homePrice}&DOWNPAYMENT=${tcal.downPayment}+&DOWNPAYMENT_TYPE=Percent&TERM=${tcal.loadTerm}&TERM_UNITS=Years&INTERESTRATE=${tcal.interestRate}+&SHOWAMORTIZATIONSCHEDULE=on&COMPUTE=COMPUTE&CALCULATORID=HF02&TEMPLATE_ID=WWW.NOSNOWNAPLES.COM_2`)
        window.open(`http://morgage.s3-website-us-west-2.amazonaws.com/?LOANAMOUNT=${tcal.homePrice}&DOWNPAYMENT=${tcal.downPayment}+&DOWNPAYMENT_TYPE=Percent&TERM=${tcal.loadTerm}&TERM_UNITS=Years&INTERESTRATE=${tcal.interestRate}+&SHOWAMORTIZATIONSCHEDULE=on&COMPUTE=COMPUTE&CALCULATORID=HF02&TEMPLATE_ID=WWW.NOSNOWNAPLES.COM_2`)
        
    }

return (
    <Container component="main" maxWidth="lg" 
        sx={{
            minHeight: "70vh"
        }}
    >
        <Grid container item display={'flex'} md={12}> 
            <Typography fullWidth variant='h6'
                sx={{
                    marginTop: "40px"
                }}
            >How much will my fixed rate mortgage payment be?</Typography >
             <Typography fullWidth variant='body1'
                    sx={{
                        marginY: "20px"
                    }}
                >This calculator computes the payments (principal and interest) for a fixed rate loan.</Typography>
            <Card md={6}>
               
            <Paper elevation={1} 
                sx={{
                    padding: "10px",
                    minHeigth: "800px"
                }}
            >
            <TextField 
                variant="outlined" 
                type="number" 
                fullWidth
                margin="normal" 
                label="Home Price"
                placeholder="Home Price"
                name="homePrice" 
                onChange={(event)=>setTcal({...tcal, homePrice: event.target.value})}
                value={tcal.homePrice || ''} 
            />
            <TextField 
                variant="outlined" 
                type="number" 
                fullWidth
                margin="normal" 
                label="Down Payment"
                placeholder="Down Payment"
                name="downPayment" 
                onChange={(event)=>setTcal({...tcal, downPayment: event.target.value})}
                value={tcal.downPayment || ''} 
            />
            <TextField 
                variant="outlined" 
                type="number" 
                fullWidth
                margin="normal" 
                label="Loan Term"
                placeholder="Enter your Loan Term"
                name="loadTerm" 
                onChange={(event)=>setTcal({...tcal, loadTerm: event.target.value})}
                value={tcal.loadTerm || ''} 
            />
            <TextField 
                variant="outlined" 
                type="text" 
                fullWidth
                margin="normal" 
                label="Interest Rate"
                placeholder="Interest Rate"
                name="interestRate" 
                onChange={(event)=>setTcal({...tcal, interestRate: event.target.value})}
                value={tcal.interestRate || ''} 
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
                
                onClick={(()=>onSent())}
            >
               Compute
            </Button>
        </Paper>
            </Card>
        </Grid>
    </Container>
)}

export default Mortgage;