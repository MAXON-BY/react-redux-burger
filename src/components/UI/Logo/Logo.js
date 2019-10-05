import React from 'react'
import classes from './Logo.module.css'
import LogoImg from '../../../assets/images/burger-logo.png'

const Logo = () => (
    <div className={classes.Logo}>
        <img src={LogoImg} alt="Burger Builder"/>
    </div>
);

export default Logo