'use client'
import styles from './MainTitle.module.scss';
import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import {motion} from "framer-motion";
const MainTitle: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.mainTitle} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.textPart}>
                <h1 className={styles.title}>
                    <span className={styles.red}>розробка та </span>
                    <span className={styles.red}>&nbsp; &nbsp;дизайн&nbsp;<span className={styles.white}> для</span></span>
                    <span className={styles.white}>
                        <ReactTyped
                            strings={['амбіційних', 'найкращих', 'бізнесів']}
                            typeSpeed={100}
                            backSpeed={100}
                            loop
                        />
                    </span>
                </h1>
                <div className={styles.imagePartPhone}>
                    <div>
                        <img className={styles.crystal} src="/mainTitle/crystal.png" alt="crystal" />
                        <img className={styles.platform} src="/mainTitle/platform.png" alt="platform" />
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
                        Кожен наш проєкт - це маленька революція, адже ми докладаємо всіх зусиль для найкращого профіту, і зрештою, досягаємо його!
                    </p>
                    <motion.button
                        className={styles.btn}
                        // initial={{ y: 100, opacity: 0 }} // Start below and invisible
                        // animate={{ y: 0, opacity: 1 }}  // Move to its final position
                        transition={{ duration: 0.5, ease: 'easeOut' }} // Adjust timing as needed
                        whileHover={{ backgroundColor: '#FFF', color: '#D0142C' }} // Change to white on hover, and text to red
                        whileTap={{ scale: 0.95 }} // Optional: add a scale effect when clicking the button
                    >
                        познайомитися з нами
                    </motion.button>
                </div>
            </div>
            <div className={styles.imagePart}>
                <div>
                    <img className={styles.crystal} src="/mainTitle/crystal.png" alt="crystal" />
                    <img className={styles.platform} src="/mainTitle/platform.png" alt="platform" />
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
