import React from 'react';
import PropTypes from "prop-types" 
import ArticleListItem from '../ArticleListItem/ArticleListItem';

const ArticleList = (props) => {

    let displayContent; 

    if (props.article.length){
        displayContent = (
            <ul>
            {props.article.map((item) => (
              <li key={item.slug}><ArticleListItem article = {item}/></li>
            ))}
          </ul>
        ); 
    } 

    else {
        displayContent = <p>"You have no data!"</p> 
    }; 

    return (
        <p>{displayContent}</p>
    );   

}; 

ArticleList.propTypes = {
    article: PropTypes.array.isRequired
  };

export default ArticleList; 

