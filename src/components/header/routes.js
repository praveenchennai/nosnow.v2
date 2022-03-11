import React from 'react';
import Header from './header';
import HeaderHome from './header-home';
import HeaderSearch from './header-search';

const HeaderRoutes = (props) => {
    return (
        <React.Fragment>
            {   
                props?.location?.pathname==='/'?
                    <HeaderHome />
                    
                : 
                    props?.location?.pathname.startsWith('/result')?
                        <HeaderSearch />
                    :
                        props?.location?.pathname.startsWith('/content')?
                        <HeaderHome />
                        :
                        <Header />
                        
            }
        </React.Fragment>
    )
}

export default HeaderRoutes;