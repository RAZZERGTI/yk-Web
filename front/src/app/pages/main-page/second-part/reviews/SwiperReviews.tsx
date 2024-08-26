"use client";
import styles from "./reviews.module.scss";
import { SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import ReviewsBtns from "./ReviewsBtns";
import { Swiper } from "swiper/react";
import "swiper/css";

export default function SwiperReviews() {
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
        <SwiperSlide className={styles.slide}>
          <div className={styles.head}>
            <p className={styles.rating}>0.5</p>
            <img src="/stars.png" alt="" />
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
            <p className={styles.rating}>0.5</p>
            <img src="/stars.png" alt="" />
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
            <p className={styles.rating}>0.5</p>
            <img src="/stars.png" alt="" />
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
            <p className={styles.rating}>0.5</p>
            <img src="/stars.png" alt="" />
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
            <p className={styles.rating}>0.5</p>
            <img src="/stars.png" alt="" />
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

        <ReviewsBtns></ReviewsBtns>
      </Swiper>
      {/* <section className={styles.swiper}>
        <div className={styles.slide}>
          <div className={styles.head}>
            <p className={styles.rating}>0.5</p>
            <img src="/stars.png" alt="" />
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
        </div>
        <div className={styles.slide}>
          <div className={styles.head}>
            <p className={styles.rating}>0.5</p>
            <img src="/stars.png" alt="" />
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
        </div>
        <div className={styles.slide}>
          <div className={styles.head}>
            <p className={styles.rating}>0.5</p>
            <img src="/stars.png" alt="" />
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
        </div>
      </section> */}
    </>
  );
}
