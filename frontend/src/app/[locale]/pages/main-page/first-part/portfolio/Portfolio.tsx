'use client'
import styles from './Portfolio.module.scss';
import React,  from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Sliding from "@/app/[locale]/pages/main-page/first-part/portfolio/swiper/Swiper";
import {useScroll} from "@/app/[locale]/components/scroll-context/UseScroll";
const Portfolio: React.FC = ({ locale }: any) => {
    const { portfolioSectionRef } = useScroll();

    return (
        <div className={styles.portfolio} ref={portfolioSectionRef} id="portfolio">
            <div className={styles.title}>
                <p className={styles.text}>
                    Долаємо поверхню, копаємо глибше, де наші продукти перетворюють ваш бізнес на digital phenomenon!</p>
                <h3 className={styles.main}>
                    <span className={styles.red}>
                        наше&nbsp;
                        <span className={styles.white}>
                            портфоліо
                        </span>
                    </span>
                </h3>
            </div>
            <div className={styles.slider}>
                <Sliding localeValue={locale}/>
            </div>
        </div>
    );
};

export default Portfolio;
