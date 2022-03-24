import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import { Paper} from '@mui/material';
import HeaderRoutes from './header/routes';
import FooterRoutes from './footer/footer';

const Search = lazy(() => import('components/search/main'));
const Home = lazy(() => import('components/home/main'));
const PropertyMain = lazy(()=>import('components/property/main'));
const LotMain = lazy(()=>import('components/lot/main'));
const ResultRoutes = lazy(()=>import('components/results/routes'));
const CommunityContent = lazy (()=>import('components/communities/details'))

const About = lazy(()=>import('components/content/about'));
const ParlanteVideo = lazy(()=>import('components/content/parlante-video'));
const Tcalc = lazy(()=>import('components/content/tcalc'));

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
                        
                        <Route path="/search/:type" render = {()=><Search />} />
                        <Route path="/details/:id" render={()=> <PropertyMain />} />
                        <Route path="/lots/:id" render={()=> <LotMain />} />
                        <Route path="/result" render={()=> <ResultRoutes />} />
                        <Route path="/community/:seo" render={()=> <CommunityContent />} />
                        <Route path="/content/about" render = {()=><About />} exact/>
                        <Route path="/content/tcalc" render = {()=><Tcalc />} exact/>
                        <Route path="/content/parlante-video" render={()=> <ParlanteVideo />} exact/>
                    </Switch>
                </Suspense>
                <Footer {...props}/>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Routes;