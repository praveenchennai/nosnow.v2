import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Header = lazy(() => import('./header'));
const HeaderHome = lazy(()=>import('./header-home'));


const HeaderRoutes = (props) => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Suspense fallback={<div />}>
                    <Switch>
                        <Route path="/" render = {()=><HeaderHome />} exact/>
                        <Route path="*" render = {()=><Header />}/>
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default HeaderRoutes;