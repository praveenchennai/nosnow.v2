import React from 'react';
import { Grid, Typography, Divider} from '@mui/material';

const Title = (props) =>{
    const {label} = props.value;
    return ( 
        <React.Fragment> 
            <Grid container item md={12} alignItems="center" justifyContent="space-between"
                sx={{
                    paddingLeft: "10px",
                    marginTop: "20px",
                    opacity: .8,
                    right: 0
                }}
            >
                <Typography sx={{fontSize: "15px", color: "#FF5722", fontWeight: "bold"}}>{label}</Typography>
             </Grid>
            <Divider 
                sx={{
                    marginTop: "10px", 
                    marginBottom: "0px",
                    color: "#000",
                    width: "100%"
                }}
            />
        </React.Fragment>
    );
}

export default Title;