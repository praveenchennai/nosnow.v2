import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import { Paper} from '@mui/material';
import HeaderRoutes from './header/routes';
import FooterRoutes from './footer/footer';

const Search = lazy(() => import('components/search/main'));
const Home = lazy(() => import('components/home/main'));
const PropertyMain = lazy(()=>import('components/property/main'));
const ResultRoutes = lazy(()=>import('components/results/routes'));

const Routes = (props) => {
    const Header = withRouter(props => <HeaderRoutes {...props}/>);
    const Footer = withRouter(props => <FooterRoutes {...props}/>);
    return (
        <React.Fragment>   
            <BrowserRouter>
                <Header {...props}/>
                <Suspense fallback={<Paper 
                            sx={{
                                minHeight: "100vh"
                            }}
                />}>
                    <Switch>
                        <Route path="/" render = {()=><Home />} exact/>
                        <Route path="/search" render = {()=><Search />} exact/>
                        <Route path="/property" render={()=> <PropertyMain />} />
                        <Route path="/result" render={()=> <ResultRoutes />} />
                    </Switch>
                </Suspense>
                <Footer {...props}/>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Routes;