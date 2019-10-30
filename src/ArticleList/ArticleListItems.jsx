import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItems.module.css';
import SluggButton from './SlugButton';
import ArticleImage from './ArticleImage';

const ArticleListItems = props =>{
    return(
        <article className={styles.ArticleListItems}>

            <div>
                <ArticleImage url={props.url} />
            </div>

            <header className={styles.ArticleHeader}>
                <h2>{props.title}</h2>
            </header>

            <p>
                <section className={styles.ArticleContent}>
                    {props.shortText}
                </section>
                <br/>
                <footer className={styles.ArticleFooter}>
                    <time dateTime={props.pubDate}>{props.pubDate}</time>
                    <br/>
                    <SluggButton slug={props.slug} author={props.author}/>
                </footer>
            </p>

        </article>
    )
}

ArticleListItems.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleListItems;