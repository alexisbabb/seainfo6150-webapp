import React from "react";
import HTMLText from "../HTMLText/HTMLText.jsx";
import { Link } from "react-router-dom";
import styles from "c://Users/ababb/Desktop/Northeastern/Information_Systems/INFO5100/seainfo6150-webapp/src/DynamicArticle/DynamicArticle.module.css"; 


const DynamicArticle = (props) => {
  return (
    <div>
      <Link to="/articlelist" className = {styles.backLink} >Back</Link>
      <article className = {styles.individualArticle}>
        <header>
          <h1>{props.article.title}</h1>
          <address>
            by {props.article.author} (
            <a href={`mailto:${props.article.authorEmail}`}>
              {props.article.authorEmail}
            </a>
            )
            <br />
          </address>
          <time dateTime={props.article.timeStamp}>
            {props.article.displayDate}
          </time>
        </header>
        <HTMLText text={props.article.text} />
      </article>
    </div>
  );
};

export default DynamicArticle;
