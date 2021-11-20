import React from 'react';
import NavigationItem from './navigationItem/NavigationItem';
import { navList } from './Navigation.module.css';

const Navigation = ({ routes }) => {
  return (
    <nav>
      <ul className={navList}>
        {routes.map(({ name, path, exact }) => (
          <NavigationItem name={name} path={path} exact={exact} key={path} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
