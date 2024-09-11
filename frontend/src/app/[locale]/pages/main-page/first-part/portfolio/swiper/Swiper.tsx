'use client';
import React, {useRef, useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import './swiper.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Sliding.module.scss';
import {Mousewheel, Navigation, Pagination} from 'swiper/modules';
import SwiperCore from 'swiper/core';
import { Swiper as SwiperType } from 'swiper/types';
SwiperCore.use([Mousewheel, Navigation, Pagination]);
import { SwiperNavButtons } from './SwiperNavButton'
import axios from "axios";
import {useRouter} from "@/navigation";
export default function Sliding({ localeValue }) {
    const swiperRef = useRef<SwiperType | null>(null);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [allowScroll, setAllowScroll] = useState(true);  // Флаг для переключения между скроллингом Swiper и страницы
    const [cases, setCases] = useState([]);
    const router = useRouter();
    // Включаем скроллинг страницы после достижения конца Swiper
    const handleMouseWheel = (event) => {
        if (isAtEnd && event.deltaY > 0 && allowScroll) {
            setAllowScroll(false);  // Отключаем Swiper скроллинг и включаем страницу
        }
    };

    useEffect(() => {
        if (isAtEnd && !allowScroll) {
            // Отключаем Swiper от обработки скролла
            window.addEventListener('wheel', handleMouseWheel);
        } else {
            // Если не на конце или Swiper снова активен, удаляем слушатель
            window.removeEventListener('wheel', handleMouseWheel);
        }

        return () => {
            window.removeEventListener('wheel', handleMouseWheel);
        };
    }, [isAtEnd, allowScroll]);
    useEffect(() => {
        const fetchCases = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/cases/${localeValue}`);
                console.log(response.data)
                setCases(response.data);  // Предполагается, что данные приходят в виде массива
            } catch (error) {
                console.error('Error fetching cases:', error);
            }
        };

        fetchCases();
    }, [localeValue]);
    const handleClick = (slug: string) => {
        router.push(`/${slug}`);  // Redirect to the dynamic page
    };
    // const shouldRenderLastSlides = windowWidth > 1249;
    return (
        <div className="container" style={{ borderRadius: '16px' }} >
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop
                modules={[Navigation, Pagination]}
                className="mySwiper"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onReachEnd={() => setIsAtEnd(true)}
                onFromEdge={() => {
                    setIsAtEnd(false);
                    setAllowScroll(true);
                }}
            >
                {cases.map((caseItem) => (
                    <SwiperSlide key={caseItem.id} className='slide'>
                        <div className='photo-container' onClick={() => handleClick(caseItem.slug)}>
                            <div className={'hoverTxt'}>
                                <p>Побачити більше</p>
                                <div className={'circle'}>
                                    <img src="/arrowRightUp.svg" alt=""/>
                                </div>
                            </div>
                            <img className='image' src={`http://127.0.0.1:8000/${caseItem.image}`} alt={caseItem.project_name} style={{ color: "white",borderRadius: '16px' }} />
                        </div>
                        <p className={styles.name}>{caseItem.project_name}</p>
                        <p className={styles.description}>{caseItem.project_sphere}</p>
                    </SwiperSlide>
                ))}
                <SwiperNavButtons swiperRef={swiperRef} />
            </Swiper>
        </div>
    );
}