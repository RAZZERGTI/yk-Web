import styles from "./form.module.scss";

let k = "<Заповнюй форму and let’s gooo!>";

export default function Form() {
  return (
    <>
        <section className={styles.container}>
          <div className={styles.box}>
            <h3 className={styles.title}>
              ХОЧЕТЕ <span>ПРОКАЧАТИ</span>
              СВІЙ БІЗНЕС?
            </h3>
            <p className={styles.sub}>{k}</p>
          </div>

          <form action="@/app/components/Form/Form" className={styles.form__box}>
            <div className={styles.head}>
              <div className={styles.left}>
                <label htmlFor="">Ім'я</label>
                <input placeholder="Пес Патрон" type="text" />
              </div>
              <div className={styles.right}>
                <label htmlFor="">Номер телефону:</label>
                <input placeholder="" type="text" />
              </div>
            </div>
            <div className={styles.bottom}>
              <label htmlFor="">E-mail:</label>
              <input placeholder="example@gmail.com" type="text" />
            </div>
            <button className={styles.btn}>let’s gooo!</button>
          </form>
        </section>
    </>
  );
}
