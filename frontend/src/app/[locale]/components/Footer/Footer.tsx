import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            <span>Y.K </span>Agency
          </h2>

          <div className={styles.box}>
            <div className={styles.left}>
              <div className={styles.soc}>
                <a className={styles.btn__soc} href="@/app/[locale]/components/Footer/Footer">
                  <img src="/inst.png" alt="" />
                </a>
                <a className={styles.btn__soc} href="@/app/[locale]/components/Footer/Footer">
                  <img src="/tg.png" alt="" />
                </a>
                <a className={styles.btn__soc} href="@/app/[locale]/components/Footer/Footer">
                  <img src="/tt.png" alt="" />
                </a>
                <a className={styles.btn__soc} href="@/app/[locale]/components/Footer/Footer">
                  <img src="/be.png" alt="" />
                </a>
                <a className={styles.btn__soc} href="@/app/[locale]/components/Footer/Footer">
                  <img src="/ball.png" alt="" />
                </a>
              </div>
              <div className={styles.down}>
                <p className={styles.text}>Privacy Policy</p>
                <p className={styles.text}>2024 © Y.K Agency</p>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.column}>
                <h3 className={styles.name}>Навігація</h3>
                <ul className={styles.links}>
                  <li>
                    <a className={styles.link} href="@/app/[locale]/components/Footer/Footer">
                      послуги
                    </a>
                  </li>
                  <li>
                    <a className={styles.link} href="@/app/[locale]/components/Footer/Footer">
                      наша команда
                    </a>
                  </li>
                  <li>
                    <a className={styles.link} href="@/app/[locale]/components/Footer/Footer">
                      портфоліо
                    </a>
                  </li>
                  <li>
                    <a className={styles.link} href="@/app/[locale]/components/Footer/Footer">
                      хочу проєкт
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.column}>
                <h3 className={styles.name}>написати</h3>
                <ul className={styles.links}>
                  <li>
                    <a className={styles.link} href="@/app/[locale]/components/Footer/Footer">
                      yk.agency.info@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.column}>
                <h3 className={styles.name}>подзвонити</h3>
                <ul className={styles.links}>
                  <li>
                    <a className={styles.link} href="@/app/[locale]/components/Footer/Footer">
                      +380 95 610 37 61
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
