import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {
  navListItem,
  navItemLink,
  navItemLinkActive,
} from './NavigationItem.module.css';

const NavigationItem = ({ name, path, exact }) => {
  return (
    <li className={navListItem}>
      <NavLink
        to={path}
        className={navItemLink}
        activeClassName={navItemLinkActive}
        exact={exact}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default withRouter(NavigationItem);
