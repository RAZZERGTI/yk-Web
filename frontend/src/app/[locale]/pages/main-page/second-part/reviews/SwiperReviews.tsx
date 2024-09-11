"use client";
import styles from "./reviews.module.scss";
import { SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import ReviewsBtns from "./ReviewsBtns";
import { Swiper } from "swiper/react";
import "swiper/css";

import { useEffect } from "react";
import axios from "axios";

export default function SwiperReviews() {
  // const t = useTranslations("mReviews");
  // let localeValue = locale;
  let [state, setState] = useState<any[]>([]);

  function componentDidMount() {
    try {
      let data;
      axios
        .get(`http://localhost:8000/api/reviews/ua`)
        .then((res) => {
          data = res.data;
          setState(data);
        })
        .catch((err) => {});
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    componentDidMount();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        direction="horizontal"
        navigation={false}
        speed={800}
        className={styles.swiper}
      >
        {state.map((item: any, idx: any) => (
          <SwiperSlide className={styles.slide}>
            <div className={styles.head}>
              <p className={styles.rating}>{item.rating}</p>
              <img className={styles.stars} src="/stars.png" alt="" />
            </div>
            <p className={styles.slide__text}>{item.content}</p>
            <div className={styles.bottom}>
              <img src="/avatar.png" alt="" />
              <div className={styles.name__box}>
                <p className={styles.name}>{item.user_name}</p>
                <p className={styles.sub}>{item.company_name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide className={styles.slide}>
          <div className={styles.head}>
            <p className={styles.rating}>5.0</p>
            <img className={styles.stars} src="/stars.png" alt="" />
          </div>
          <p className={styles.slide__text}>
            Наша команда допомогла досягти небувалих висот нашим партнерам і
            замовникам! Відгуки тому доказ. Не зволікай❤️💚
          </p>
          <div className={styles.bottom}>
            <img src="/avatar.png" alt="" />
            <div className={styles.name__box}>
              <p className={styles.name}>Магдалена</p>
              <p className={styles.sub}>СЕО УЦОЯ</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.head}>
            <p className={styles.rating}>5.0</p>
            <img className={styles.stars} src="/stars.png" alt="" />
          </div>
          <p className={styles.slide__text}>
            Наша команда допомогла досягти небувалих висот нашим партнерам і
            замовникам! Відгуки тому доказ. Не зволікай❤️💚
          </p>
          <div className={styles.bottom}>
            <img src="/avatar.png" alt="" />
            <div className={styles.name__box}>
              <p className={styles.name}>Магдалена</p>
              <p className={styles.sub}>СЕО УЦОЯ</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.head}>
            <p className={styles.rating}>5.0</p>
            <img className={styles.stars} src="/stars.png" alt="" />
          </div>
          <p className={styles.slide__text}>
            Наша команда допомогла досягти небувалих висот нашим партнерам і
            замовникам! Відгуки тому доказ. Не зволікай❤️💚
          </p>
          <div className={styles.bottom}>
            <img src="/avatar.png" alt="" />
            <div className={styles.name__box}>
              <p className={styles.name}>Магдалена</p>
              <p className={styles.sub}>СЕО УЦОЯ</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.head}>
            <p className={styles.rating}>5.0</p>
            <img className={styles.stars} src="/stars.png" alt="" />
          </div>
          <p className={styles.slide__text}>
            Наша команда допомогла досягти небувалих висот нашим партнерам і
            замовникам! Відгуки тому доказ. Не зволікай❤️💚
          </p>
          <div className={styles.bottom}>
            <img src="/avatar.png" alt="" />
            <div className={styles.name__box}>
              <p className={styles.name}>Магдалена</p>
              <p className={styles.sub}>СЕО УЦОЯ</p>
            </div>
          </div>
        </SwiperSlide> */}

        <ReviewsBtns></ReviewsBtns>
      </Swiper>
    </>
  );
}
