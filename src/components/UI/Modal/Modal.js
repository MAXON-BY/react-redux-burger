import React from 'react';
import classes from './Modal.module.css'
import AuxHoc from "../../../hoc/AuxHoc";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => (
    <AuxHoc>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </AuxHoc>
);

export default Modal