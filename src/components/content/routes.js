import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const About = lazy(()=>import('./about'));

const ContentRoutes = (props) => {
    console.log('contentRoutes')
    return (
        <React.Fragment>
            <BrowserRouter>
                <Suspense fallback={<div />}>
                    <Switch>
                        <Route path="/content/about" render={()=> <About />} />
                        <Route path="/content/:page" render={()=> <About />} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default ContentRoutes;