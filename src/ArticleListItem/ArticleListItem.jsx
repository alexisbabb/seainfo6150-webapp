import React from 'react'; 

const ArticleListItem = (props) => {
    return (
        <div>
            <h2>{props.article.title}</h2>
            <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
            <p> {props.article.shortText}</p>
        </div>
); 

}; 

export default ArticleListItem; 

