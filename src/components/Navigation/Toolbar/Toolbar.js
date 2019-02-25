import React from 'react';
import classes from './Toolbar.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
       <div className={classes.Logo}>
           <Logo/>
       </div>
       <nav className={classes.Nav}>
           <NavigationItems />
       </nav>
    </header>
);
export default Toolbar;

