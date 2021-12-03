import React from 'react';
import Base from './components/layout/base'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './App.css';
import Routes from 'components/routes'
import customStyle from './common/style/custom-style';

const THEME = createTheme(customStyle());


const App = () => {

  console.log('env is:', process.env.NODE_ENV)
return (
    <React.Fragment>
      <ThemeProvider theme={THEME}>
          <Base >
            <Routes />
          </Base>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
