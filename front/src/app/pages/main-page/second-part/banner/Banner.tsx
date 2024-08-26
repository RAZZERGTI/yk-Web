import styles from "./banner.module.scss";

export default function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <section className={styles.container}>
          <div className={styles.info}>
            <h3 className={styles.title}>КОНСУЛЬТАЦІЯ
                <div className={styles.cash}>0 грн</div>
            </h3>
            <p className={styles.text}>
              При замоленні будь-якої послуги ви отримаєте безкоштовну
              консультацію, яка допоможе у діджиталізації та автоматизації
              вашого бізнесу
            </p>
            <button className={styles.btn}>let’s gooo!</button>
          </div>

          <img className={styles.cube} src="/cube.png" alt="" />
        </section>
      </div>
    </>
  );
}
