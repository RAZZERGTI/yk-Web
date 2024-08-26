"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./reviews.module.scss";

export default function ReviewsBtns() {
  const swiper = useSwiper();

  return (
    <div className={styles.btns}>
      <div onClick={() => swiper.slidePrev()}  className={styles.btn}>
        <img
          style={{
            transform: "rotate(-180deg)",
          }}
          src="/arrow.svg"
          alt=""
        />
      </div>
      <div onClick={() => swiper.slideNext()} className={styles.btn}>
        <img src="/arrow.svg" alt="" />
      </div>
    </div>
  );
}
