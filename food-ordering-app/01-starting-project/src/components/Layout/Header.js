import React from 'react';

import image from "../../assets/meals.jpg"
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCardButton';

const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>HCL Meals on Wheels</h1>
                <HeaderCartButton />
                </header>
            <div className={classes['main-image']}>
                <img src={image} alt='table full of food'/>
            </div>
        </React.Fragment>

    );

};

export default Header;