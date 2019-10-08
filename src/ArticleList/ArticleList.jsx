import React from "react";
import PropTypes from 'prop-types';
import ArticleListItems from './ArticleListItems';
import SluggButton from "./SlugButton";
import styles from './ArticleList.module.css';

const ArticleList = props => {
  return (
      <div className={ArticleList}>
          <ul className={styles.articleList}>
              {props.articles.map(article => (
                <li key={article.slug}>
                  <ArticleListItems title={article.title}
                                    pubDate={article.pubDate}
                                    shortText={article.shortText}/>
                   <SluggButton slug = {article.slug}
                                author = {article.author}/>
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
