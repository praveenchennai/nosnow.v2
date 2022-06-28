import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {Grid, Typography, Slider} from '@mui/material';
import {setLotSize} from 'api/lot';


const Acres = () => {
    const dispatch = useDispatch();
    const min = useSelector(state=>state.lot.LotSizeSquareFeet.min);
    const max = useSelector(state=>state.lot.LotSizeSquareFeet.max);
    const marks = useSelector(state=>state.lot.LotSizeSquareFeetOptions);
    const handleChange=(event, newValue)=>{
        dispatch(setLotSize(newValue));
    };

return ( 
    <React.Fragment>
        <Grid sm={1} xs={12} item />
        <Grid sm={4} xs={12} item>
            <Typography variant="body1" component="h2"
                sx={{
                    marginBottom: "30px"
                }}
            >Lot Size</Typography>
            <Slider
                sx={{
                    color: "#56516b",
                    '& .MuiSlider-thumb': {
                        backgroundColor: '#FE8200'
                    }
                }}
                value={[min, max]}
                onChange={handleChange}
                step={1}
                max={15}
                valueLabelDisplay="on"
                valueLabelFormat={value=>marks?.find(m=>m.value===value)?.label || '100 Acres'}
                //marks={marks}
            />
        </Grid>
        <Grid sm={1} xs={12} item />
    </React.Fragment>

)}

export default Acres;