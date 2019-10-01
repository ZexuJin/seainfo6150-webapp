import React from 'react';
import PropTypes from 'prop-types';

const ArticleListItems = ({title, shortText, pubDate, slug}) => {
    const showMessage = () => {
        alert(slug);
    };
    const handleClick = () => {
        setTimeout(showMessage, 3000);
    };

    return(
    <article>
        <header>
            <h2>{title}</h2>
        </header>
        <p>
            {shortText}<br/><br/>
            <time dateTime={pubDate}>{pubDate}</time>
            <button onClick={handleClick}>show article slug</button>
        </p>

    </article>
    )
};

ArticleListItems.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleListItems;