// components/StarBackground.js
import React from 'react';
import styles from './StarBackground.module.scss'; // импортируйте SCSS

const StarBackground = () => {
    return (
        <div className={styles.stars}>
            {[...Array(50)].map((_, index) => (
                <div key={index} className={styles.star}></div>
            ))}
        </div>
    );
};

export default StarBackground;
