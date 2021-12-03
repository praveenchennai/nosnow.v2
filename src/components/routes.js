import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HeaderRoutes from './header/routes';
import Footer from './footer';

const Search = lazy(() => import('components/search/main'));
const Home = lazy(() => import('components/home/main'));
const PropertyMain = lazy(()=>import('components/property/main'));
const ResultRoutes = lazy(()=>import('components/results/routes'));

const Routes = (props) => {

    return (
        <React.Fragment>
            <HeaderRoutes {...props}/>
            <BrowserRouter>
                <Suspense fallback={<div />}>
                    <Switch>
                        <Route path="/" render = {()=><Home />} exact/>
                        <Route path="/search" render = {()=><Search />} exact/>
                        <Route path="/property" render={()=> <PropertyMain />} />
                        <Route path="/result" render={()=> <ResultRoutes />} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
            <Footer {...props}/>
        </React.Fragment>
    )
}

export default Routes;