import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Tabs, Tab, Button, Box, TextField, Grid,  Typography} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import SwipeableViews from 'react-swipeable-views';

const theme = createTheme();

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };


    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }


const Box2 = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
      };
    

    return (
        <React.Fragment>
            <Paper elevation={4} 
                sx={{
                    display: { xs: 'none', md: 'block' },
                    width: "850px",
                    backgroundColor: "#fff",
                    opacity: ".9"

                }}
            >
                <Grid container item
                    direction="column" 
                    justifyContent="center" 
                    alignItems="center" 
                    sx={{
                        backgroundColor: "#56516b",
                        color: "#fff"
                    }}
                >
                    <Typography 
                    component={'span'}
                        sx={{
                            color:"#fff",
                            fontWeight: "500",
                            fontSize: "20px",
                            padding: "10px"
                        }}

                    >
                        Already Know the address? Start here.
                    </Typography>
                </Grid>
                
                <Grid container item
                    display="flex"
                    direction="column" 
                    justifyContent="center" 
                    alignItems="center" 
                    sx={{
                        color: "#fff",
                        marginBottom: "20px"
                    }}
                >
                    <Typography 
                        component={'span'}
                        sx={{
                            color:"#56516b",
                            fontWeight: "500",
                            fontSize: "20px",
                            paddingBottom: "2px!important",
                            padding: "10px",
                        }}
                    >
                       Search over 10,000 Properties in South West Florida
                    </Typography>
                </Grid>

                <Grid container item
                    md={12}
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                >
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Residential" />
                        <Tab label="Lots & Land" />
                    </Tabs>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <TextField fullWidth placeholder="Enter Either MLS#, Address, Community, Sub Division, Zip, City or Any keyword" variant="outlined" />
                            <Grid container item
                                direction="column" 
                                justifyContent="center" 
                                alignItems="center" 
                                sx={{
                                    padding: "10px"
                                }}
                            >
                                <Button 
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#ff5722",
                                        color: "#fff",
                                        fontSize: "15px"
                                    }}
                                >
                                    Search
                                </Button>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <TextField fullWidth placeholder="Enter Either MLS#, Address, Community, Sub Division, Zip, City or Any keyword" variant="outlined" />
                            <Grid container item
                                direction="column" 
                                justifyContent="center" 
                                alignItems="center" 
                                sx={{
                                    padding: "10px"
                                }}
                            >
                                <Button 
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#ff5722",
                                        color: "#fff",
                                        fontSize: "15px"
                                    }}
                                >
                                    Search
                                </Button>
                            </Grid>
                        </TabPanel>
                  </SwipeableViews>
                    
                </Grid>
                
            </Paper>
        </React.Fragment>
    )
}

export default Box2;