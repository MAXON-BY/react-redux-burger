import React from 'react';
import classes from './SideDrawer.module.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import AuxHoc from "../../../../hoc/AuxHoc";
import Backdrop from "../../Backdrop/Backdrop";

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <AuxHoc>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </AuxHoc>
    );
};

export default SideDrawer;