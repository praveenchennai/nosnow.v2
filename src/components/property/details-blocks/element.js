import React from 'react';
import { Grid, Typography, } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

const Element = (props) =>{
    const {label, value, para, half, color} = props.value;
    const {xsSize, smSize, mdSize, lgSize, xlSize} = useSelector(state=>state.design)



    return (
        <Grid container item md={para?12:half?6:3} xs={para?12:half?12:6} direction="column"
            sx={{
                padding: "30px",
                //opacity: .9,
            }}
        >
            <Typography sx={{fontSize: "14px",  fontWeight: "400"}}>{label}</Typography>
            {half?
                <Typography variant="paragraph" 
                    sx={{
                        fontSize: "15px", 
                        fontWeight: "600",
                        textAlign: "justify",
                        lineHeight: "25px"
                    }}
                >
                    {value || ''}
                </Typography>
            :
                <Typography sx={{fontSize: "16px",  fontWeight: "bold"}}>{value || ''}</Typography>
            }
        </Grid>    
    );
}

export default Element;