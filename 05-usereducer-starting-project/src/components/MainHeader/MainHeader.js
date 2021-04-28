import React, { useContext } from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import context from '../../store/common-store';

const MainHeader = (props) => {
  const coxt = useContext(context);
  return (
      <header className={classes['main-header']}>
        <h1>{coxt.isValid}</h1>
        <h1>A Typical Page</h1>
        <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
      </header>
    )
};

export default MainHeader;
