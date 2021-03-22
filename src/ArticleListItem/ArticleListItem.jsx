import React, {useState} from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import {Link} from "react-router-dom";
import styles from "c://Users/ababb/Desktop/Northeastern/Information_Systems/INFO5100/seainfo6150-webapp/src/ArticleListItem/ArticleListItem.module.css"; 

const ArticleListItem = (props) => {

    const [showInfo, setShowInfo] = useState(false);

    let buttonText = "Show more"; 

    if (showInfo){
        buttonText = "Show less"; 
    }

    const onClick = () => {
        setShowInfo(!showInfo);
      };

  return (
    <li>
      <article className = {styles.listItem}>
      <Link className = {styles.link} to={'/articlelist/'+ props.article.slug}>
      <h2>{props.article.title}</h2>
      </Link>
        {showInfo && (
        <div>
          <time className = {styles.timeInfo} dateTime = {props.article.timeStamp}>
          {props.article.displayDate}
        </time>
        <p>{props.article.shortText}</p>
        </div>
      )}
        <ArticleTextToggleButton onClick = {onClick} buttonText = {buttonText}/>
      </article>
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
