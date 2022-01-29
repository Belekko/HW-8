import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
    return (
        <div>
            <div onClick={props.onConfirm} className={classes.backdrop} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    {props.children}
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;
