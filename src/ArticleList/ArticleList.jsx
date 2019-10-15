import React from "react";
import PropTypes from 'prop-types';
import ArticleListItems from './ArticleListItems';
import styles from './ArticleList.module.css';

const ArticleList = props => {
  return (
      <div className={ArticleList}>
          <ul className={styles.articleList}>
              {props.articles.map(article => (
                <li key={article.slug}>
                  <ArticleListItems title={article.title}
                                    pubDate={article.pubDate}
                                    shortText={article.shortText}
                                    slug = {article.slug}
                                    author = {article.author}
                                    url = {article.image._url}/>
                </li>
              ))}
          </ul>
      </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
