import React from 'react';
import { mainRoutes } from '../../routes/mainRoutes';
import Navigation from './navigationItem/Navigation';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        {/* <Link to={mainRoutes[0].path} exact={mainRoutes[0].exact}></Link> */}

        <Navigation routes={mainRoutes} />
      </header>
      <hr />
    </>
  );
};

export default Header;
