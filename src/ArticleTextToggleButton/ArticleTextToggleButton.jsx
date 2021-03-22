import React from "react";
import styles from "c://Users/ababb/Desktop/Northeastern/Information_Systems/INFO5100/seainfo6150-webapp/src/ArticleTextToggleButton/ArticleTextToggleButton.module.css"; 

const ArticleTextToggleButton = (props) => {
    return (
        <button className = {styles.button} onClick={props.onClick}>{props.buttonText}</button>
    );
  };

  export default ArticleTextToggleButton;