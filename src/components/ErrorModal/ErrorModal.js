import React from "react";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    function modalCloseHandler(){
        props.setState(undefined);
    }
  return (
    <div className={styles.background} onClick={modalCloseHandler}>
      <div className={styles.modal}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <button onClick={modalCloseHandler}>Close</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
