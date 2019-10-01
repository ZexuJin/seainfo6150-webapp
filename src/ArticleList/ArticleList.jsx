import React from "react";
import PropTypes from 'prop-types';
import ArticleListItems from './ArticleListItems';

const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => (
        <li key={article.slug}>
          <ArticleListItems title={article.title}
                            pubDate={article.pubDate}
                            shortText={article.shortText}
                            slug={article.slug}/>
        </li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
