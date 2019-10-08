import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItems.module.css';

const ArticleListItems = ({title, shortText, pubDate}) => {

    return(
    <article className={styles.ArticleListItems}>
        <header className={styles.ArticleHeader}>
            <h2>{title}</h2>
        </header>
        <p>
            <section className={styles.ArticleContent}>
                {shortText}
            </section>
            <br/><br/>
            <footer className={styles.ArticleFooter}>
                <time dateTime={pubDate}>{pubDate}</time>
            </footer>
        </p>

    </article>
    )
};

ArticleListItems.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleListItems;