import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props)=> (

  <ul className={classes.NavigationItems}>
     <NavigationItem link="/" exact >Datasets</NavigationItem>
  </ul>
);
export default navigationItems;