import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const ResultsMain = lazy(()=>import('components/results/main'));
const SearchMain = lazy(()=>import('../search/main'));
const PropertyMain = lazy(()=>import('../property/main'));

const ResultRoutes = (props) => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Suspense fallback={<div />}>
                    <Switch>
                        <Route path="/result/:type" render={()=> <ResultsMain />} />
                        <Route path="/result/:type/:a" render={()=> <ResultsMain />} />
                        <Route path="/details/:id" render={()=> <PropertyMain />} />
                        <Route path="/search" render={()=> <SearchMain />} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default ResultRoutes;