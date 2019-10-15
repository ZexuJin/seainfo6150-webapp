import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleImage.module..css';

const ArticleImage = props => (
    <section>
        <img className={styles.articleImage} src={props.url} alt={props.title}/>
    </section>
);

ArticleImage.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleImage;
