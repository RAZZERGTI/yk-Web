'use client';
import React, {useRef, useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import './swiper.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Sliding.module.scss';
import {Navigation, Pagination} from 'swiper/modules';
import SwiperCore from 'swiper/core';
import { Swiper as SwiperType } from 'swiper/types';
SwiperCore.use([Navigation, Pagination]);
import { SwiperNavButtons } from './SwiperNavButton'
export default function Sliding() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    // Определяем ширину окна
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize(); // Устанавливаем текущую ширину при монтировании компонента
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const shouldRenderLastSlides = windowWidth > 1249;
    return (
        <div className="container" style={{ borderRadius: '16px' }} >
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                modules={[ Navigation, Pagination]}
                className="mySwiper"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                    320:{
                        slidesPerView: 1,
                        spaceBetween: 10,
                        // loop: true
                    },
                    425: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    },
                    1249: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    },
                }}
            >
                <SwiperSlide
                    // onMouseEnter={handleMouseEnter}
                    //          onMouseLeave={handleMouseLeave}
                    className='slide'
                    style={{width: "822px !important"}}
                >
                    <div className='photo-container'>
                        <div className={'hoverTxt'}>
                            <p>Побачити більше</p>
                            <div className={'circle'}>
                                <img src="/arrowRightUp.svg" alt=""/>
                            </div>
                        </div>
                        <img className='image' src={'/timosha.png'} alt={'timosha'} style={{ borderRadius: '16px' }} />
                    </div>
                    <p className={styles.name}>Усмішка Тимоші</p>
                    <p className={styles.description}>Благодійна організація, яка допомагає дітям</p>
                    {!shouldRenderLastSlides && (
                        <button className={styles.btn}>
                            Побачити більше
                        </button>
                    )}
                </SwiperSlide>
                <SwiperSlide
                    className='slide'

                    style={{width: "800px"}}
                >
                    <div className='photo-container'>
                        <div className={'hoverTxt'}>
                            <p>Побачити більше</p>
                            <div className={'circle'}>
                                <img src="/arrowRightUp.svg" alt=""/>
                            </div>
                        </div>
                        <img src={'/clinic.png'} alt={'clinic'} style={{ borderRadius: '16px' }}  />
                    </div>

                    <p className={styles.name}>Primadent</p>
                    <p className={styles.description}>Багатосторінковий сайт для стоматологічної клініки</p>
                    {!shouldRenderLastSlides && (
                        <button className={styles.btn}>
                            Побачити більше
                        </button>
                    )}
                </SwiperSlide>
                <SwiperSlide
                    className='slide'
                >
                    <div className='photo-container'>
                        <div className={'hoverTxt'}>
                            <p>Побачити більше</p>
                            <div className={'circle'}>
                                <img src="/arrowRightUp.svg" alt=""/>
                            </div>
                        </div>
                        <img src={'/bot.png'} alt={'bot'} style={{ borderRadius: '16px' }} />
                    </div>
                    <p className={styles.name}>Primadent bot</p>
                    <p className={styles.description}>Бот який може запланувати прийом, познайомити більше з клінікою та допоможе дізнатися цікаві пропозиції</p>
                    {!shouldRenderLastSlides && (
                        <button className={styles.btn}>
                            Побачити більше
                        </button>
                    )}
                </SwiperSlide>
                <SwiperSlide
                    className='slide'
                >
                    <div className='photo-container'>
                        <div className={'hoverTxt'}>
                            <p>Побачити більше</p>
                            <div className={'circle'}>
                                <img src="/arrowRightUp.svg" alt=""/>
                            </div>
                        </div>
                        <img src={'/smokeDevil.png'} alt={'botSmokeDevil'} style={{ borderRadius: '16px' }}  />
                    </div>
                     <p className={styles.name}>Smoke devil bot</p>
                    <p className={styles.description}>Допоможе тобі швитко придбати одноразові тютюнові вироби та рідини</p>
                    {!shouldRenderLastSlides && (
                        <button className={styles.btn}>
                            Побачити більше
                        </button>
                    )}
                </SwiperSlide>
                {shouldRenderLastSlides && (
                    <>
                        <SwiperSlide className='slide'>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                        </SwiperSlide>
                    </>
                )}
                <SwiperNavButtons swiperRef={swiperRef} />
            </Swiper>
        </div>
    );
}