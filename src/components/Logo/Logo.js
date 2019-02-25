import React from 'react';
import classes from './Logo.scss';
import Logo  from '../assets/images/logo.gif';


const logo = (props) => (
   <div className={classes.Logo} style={{height:props.height}}>
    <img src={Logo} alt="World Bank Logo"/>
   </div>
);
export default logo;