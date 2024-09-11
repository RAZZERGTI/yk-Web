'use client'
import styles from "./case.module.scss";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Case() {
  let [state, setState] = useState<any[]>([]);
  // const pathname = usePathname();
  // const t = useTranslations("new");
  // const id = pathname.split("/").pop(); // Получить id из пути
  // const idNum = parseInt(id);
  // let locale = useLocale();
  let [hidden, setHidden] = useState(true);
  // let newStr: string = id ? id.slice(0, -2) : "";

  const [loading, setLoading] = useState(true);
  let [data, setData] = useState("");

  useEffect(() => {
    // if (locale === "ua") {
    //   locale = "uk";
    // }
    try {
      axios
        .get(``)
        .then((res) => {
          setState(res.data);
          // console.log(newStr);
        })
        .catch((err) => {});
    } catch (error) {
      console.log("error", error);
    }
  }, []);
  return (
    <>
      <div className={styles.photobox}>
        <div className={styles.wrapper}>
          <Image
            alt=""
            layout="fill"
            src="/Notebook.png"
            className={styles.image}
          ></Image>
          <div className={styles.namebox}>
            <p className={styles.name}>PrimaDent</p>
            <p className={styles.type}>Стоматологічна клініка</p>
          </div>
        </div>
      </div>

      <div className={styles.infobox}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.box}>
              <p
                className={styles.label}
                style={{
                  color: "#F7F7F7",
                }}
              >
                Tools
              </p>
              <ul>
                <li>Figma</li>
                <li>InVision</li>
                <li>Javascript, React, jQuery, Python, Flask</li>
              </ul>
            </div>

            <div className={styles.box}>
              <p
                className={styles.label}
                style={{
                  color: "#F7F7F7",
                }}
              >
                Дедлайн
              </p>
              <p className={styles.dead}>10 днів</p>
            </div>

            <div className={styles.box}>
              <div
                className={styles.label}
                style={{
                  color: "#D0142C",
                }}
              >
                Виконавці
              </div>
              <ul>
                <li>Віка (UX/UI designer)</li>
                <li>Юрій (Backend + TG Bot)</li>
                <li>Гліб (Frontend)</li>
                <li>Олексій (Frontend)</li>
              </ul>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.box}>
              <p
                className={styles.label}
                style={{
                  color: "#D0142C",
                }}
              >
                завдання
              </p>
              <p className={styles.text}>
                Розробити вебсайт для стоматологічної клініки PrimaDent з
                наступними сторінками: головна, послуги, портфоліо. Сайт мусив
                викликати довіру до клініки у користувача, бути зручним і
                простим для відповідної широкої групи цільової авдиторії
              </p>
            </div>

            <div className={styles.box}>
              <div
                className={styles.label}
                style={{
                  color: "#F7F7F7",
                }}
              >
                Етапи роботи
              </div>
              <ul>
                <li>
                  research (аналіз ринку, дослідження самої клініки, аналіз ЦА)
                </li>
                <li>wireframe </li>
                <li>design</li>
                <li>тестування</li>
              </ul>
            </div>

            <a href="">переглянути сайт</a>
          </div>
        </div>
      </div>

      <div className={styles.videobox}>
        <div className={styles.wrapper}>тут має бути відео</div>
      </div>
    </>
  );
}
