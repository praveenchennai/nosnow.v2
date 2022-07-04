import React, {useEffect} from 'react';
import Base from './components/layout/base'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './App.css';
import Routes from 'components/routes'
import customStyle from './common/style/custom-style';
import { useSelector, useDispatch } from 'react-redux';
import {signIn} from 'api/auth';
import * as service from './service';



const THEME = createTheme(customStyle());



const App = () => {
  const dispatch = useDispatch();



  useEffect(()=>{
    service.updateSessions()
    .then(result=>{ 
      if(result?.email){
        dispatch(signIn({
          isSignedIn: true, 
          cognitoId: result.sub,
          email: result.email, 
          firstName: result.firstName, 
          lastName: result.lastName, 
          phone: result.phone
        }));
      }
    })
    .catch(err=>console.log(err));
  }, [])

return (
    <React.Fragment>
      <ThemeProvider theme={THEME}>
          <Base>
            <Routes />
          </Base>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
