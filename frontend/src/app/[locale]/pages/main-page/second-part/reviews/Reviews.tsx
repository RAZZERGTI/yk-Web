import styles from "./reviews.module.scss";
import SwiperReviews from "./SwiperReviews";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Reviews() {
  return (
    <>
      <div className={styles.reviews}>
        <section className={styles.container}>
          <div className={styles.head}>
            <h3 className={styles.left}>
              ЩО <span>КЛІЄНТИ</span> ГОВОРЯТЬ ПРО НАС
            </h3>
            <p className={styles.right}>
              Наша команда допомогла досягти небувалих висот нашим партнерам і
              замовникам! Відгуки тому доказ. Не зволікай, і так само зможеш
              досягти неможливого з нами!!!
            </p>
          </div>

          <SwiperReviews></SwiperReviews>
        </section>
      </div>
    </>
  );
}
