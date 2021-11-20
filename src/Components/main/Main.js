import React from 'react';
import { mainRoutes } from '../../routes/mainRoutes';
import Content from '../contentNavigation/Content';

const Main = () => {
  return (
    <main>
      <Content routes={mainRoutes} />
    </main>
  );
};

export default Main;
