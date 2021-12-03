import React from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';


const MyContainer = styled(Container)(
    
    { 
        padding: "0px!important",
        backgroundColor: "aliceblue",
        fontFamily: 'Ubuntu'
    }
);

const Base = (props) => {

    return(
        <MyContainer maxWidth= 'false'>
            {props.children}
        </MyContainer>
    )
}

export default Base;