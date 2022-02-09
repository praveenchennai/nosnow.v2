import React from 'react';
import { Grid, Divider, Typography} from '@mui/material';

const Remarks = (props) => {
    var {
        PublicRemarks

    } = props;

    return ( 
        <React.Fragment>
            <Grid container item md={12} display="flex" direction="column"
                sx={{
                    backgroundColor: "#56516b",
                    color: "#fff",
                    padding: "10px!important",
                    right: 0
                }}
            >
                <Typography 
                    sx={{
                        fontSize: "14px", 
                        fontWeight: "700",
                    }}
                >
                    Remarks
                </Typography>
            </Grid>
            <Grid container item md={12} alignItems="center" justifyContent="space-between"
                sx={{
                    padding: "5px"
                }}
            > 
                <Typography 
                    sx={{
                        fontSize: "15px", 
                        fontWeight: "500",
                        textAlign: "justify",
                        lineHeight: "25px",
                        margin: "5px"
                    }}
                >
                    {PublicRemarks}
                </Typography>
            </Grid>
        </React.Fragment>
    );
}

export default Remarks;