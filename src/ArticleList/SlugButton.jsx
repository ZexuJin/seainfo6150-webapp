import React from 'react';
import PropTypes from 'prop-types';
import styles from './SluggButton.module.css';

const SluggButton = ({slug, author}) => {
    const showMessage = () => {
        alert(slug);
    };
    const handleClick = () => {
        setTimeout(showMessage, 3000);
    };
    return(
            <button className={styles.SluggButtonStyles} onClick = {handleClick}>{author}</button>
            )
};

SluggButton.propTypes = {
  articles: PropTypes.array.isRequired
};
export default SluggButton;