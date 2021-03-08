import React from 'react';
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

export default ArticleList; 

