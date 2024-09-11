import styles from "./formbox.module.scss";
import Form from "@/app/[locale]/components/Form/Form";

let k = "<Заповнюй форму and let’s gooo!>";

export default function FormBox() {
  return (
    <>
      <div className={styles.form}>
        <div className={styles.box}>
          <h3 className={styles.title}>
            ХОЧЕТЕ <span>ПРОКАЧАТИ</span>
            СВІЙ БІЗНЕС?
          </h3>
          <p className={styles.sub}>{k}</p>
        </div>

        {/* <form action="" className={styles.form__box}>
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
          </form> */}
        <Form></Form>
      </div>
    </>
  );
}
