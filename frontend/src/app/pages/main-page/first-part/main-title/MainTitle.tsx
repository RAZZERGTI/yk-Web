'use client'
import styles from './MainTitle.module.scss';
import React from 'react';

const MainTitle: React.FC = () => {

    return (
        <div className={styles.mainTitle}>
            <div className={styles.textPart}>
                <h1 className={styles.title}>
                    <span className={styles.red}>розробка та </span>
                    <span className={styles.red}>&nbsp; &nbsp;дизайн&nbsp;<span className={styles.white}> для</span></span>
                    <span className={styles.white}>амбіційних</span>
                </h1>
                <div className={styles.imagePartPhone}>
                    <div>
                        <img className={styles.crystal} src="/mainTitle/crystal.png" alt="crystal"/>
                        <img className={styles.platform} src="/mainTitle/platform.png" alt="platform"/>
                    </div>
                    <div className={styles.text}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                            <path d="M20 1H5.34286V13M5.34286 13L9.68571 8.42857M5.34286 13L0.999999 8.42857" stroke="#929292"/>
                        </svg>
                        <p>Гортай вниз</p>
                    </div>

                </div>
                <div className={styles.txtBtn}>
                    <p className={styles.subtitle}>
                        Кожен наш проєкт - це маленька революція, адже ми докладаємо всіх зусиль для найкращого профіту, і зрештою, досягаюємо його!
                    </p>
                    <button className={styles.btn}>
                        познайомитися з нами
                    </button>
                </div>
            </div>
            <div className={styles.imagePart}>
                <div>
                    <img className={styles.crystal} src="/mainTitle/crystal.png" alt="crystal"/>
                    <img className={styles.platform} src="/mainTitle/platform.png" alt="platform"/>
                </div>
                <div className={styles.text}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                        <path d="M20 1H5.34286V13M5.34286 13L9.68571 8.42857M5.34286 13L0.999999 8.42857" stroke="#929292"/>
                    </svg>
                    <p>Гортай вниз</p>
                </div>

            </div>
        </div>
    );
};

export default MainTitle;
