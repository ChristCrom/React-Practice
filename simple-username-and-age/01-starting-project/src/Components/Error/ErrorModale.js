import React from "react";
import Card from "../UI/Card";
import classes from './ErrorModal.module.css'
import Button from '../UI/Button.module.css'

const ErrorModal = props => {
   return (
    <div className={classes.backdrop}>
        <Card>
            <header className={classes.header}>
            <h2>{props.title}</h2>
            </header>

            <div className={classes.content}>
                <p>{props.content}</p>
            </div>
            <footer className={classes.actions}>
                <button onClick={props.onError}className={Button.button}>Okay</button>
            </footer>
        </Card>
     </div>
   );

};

export default ErrorModal;