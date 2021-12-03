import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const ResultsRoutes = lazy(()=>import('components/results/main'));

const ResultRoutes = (props) => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Suspense fallback={<div />}>
                    <Switch>
                        <Route path="/result/:type" render={()=> <ResultsRoutes />} />
                        <Route path="/result/:type/:a" render={()=> <ResultsRoutes />} />
                        <Route path="/result/:type/:b" render={()=> <ResultsRoutes />} />
                        <Route path="/result/:type/:c" render={()=> <ResultsRoutes />} />
                        <Route path="/search" render={()=> <ResultsRoutes />} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default ResultRoutes;