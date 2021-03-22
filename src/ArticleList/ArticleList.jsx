import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";
import styles from "c://Users/ababb/Desktop/Northeastern/Information_Systems/INFO5100/seainfo6150-webapp/src/ArticleList/ArticleList.module.css"; 

const ArticleList = (props) => {
  return (
    <div className = {styles.articleList}>
      <ul className = {styles.listType}>
        {props.articles.map((article) => (
          <ArticleListItem article={article} key={article.slug} />
        ))}
      </ul>
    </div>
  );
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}
export default ArticleList;