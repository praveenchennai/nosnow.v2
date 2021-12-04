import React from 'react';
import Header from './header';
import HeaderHome from './header-home';

const HeaderRoutes = (props) => {
    return (
        <React.Fragment>
            {props?.location?.pathname==='/'?<HeaderHome />:<Header />}
        </React.Fragment>
    )
}

export default HeaderRoutes;