'use client'
import styles from './DevelopOption.module.scss';
import React, {useEffect, useState} from 'react';
import PlusToCrossButton from "@/app/[locale]/components/btn-plus/PlusToCrossButton";
import {useScroll} from "@/app/[locale]/components/scroll-context/UseScroll";

const DevOption: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<number | null>(0);
    const { devSectionRef } = useScroll();

    const toggleButton = (index: number) => {
        setActiveCategory(index === activeCategory ? null : index);
    };

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation(); // Останавливаем всплытие события клика
        // Здесь можно добавить логику для обработки клика по кнопке


        console.log("Button clicked!");
    };

    const categories = [
        "Вебдизайн/сайти",
        "APP/Застосунки",
        // "Frontend/Backend розробка",
        "Чат-боти",
        "Motion Design/Відео",
        "Дизайн соц. мереж",
    ];

    const additionalTexts = [
        ["Лендинг", "Корпоративний сайт", "Інтернет магазин", "Редизайн", "UI/UX", "Сайт візитка"],
        ["APP дизайн", "APP для IOS","APP для Android"],
        // ["Back-end: Python, Django, FastAPI, Flask, SQL, MySQl,\nSQLaclhemy, Postresql, SQLite, MongoDB.","Front-end: JavaScript, Next, Nest, NodeJs, React, jQuery, TypeScript."],
        ["Бот для отримання інформації","Ігровий бот","Фінансовий бот","Бот для замовлення послуг","Навігаційний бот","Бот для мовлення","Бот для навчання"],
        ["Анімація логотипа", "Відео презентація", "Анімована графіка","Монтаж відео","Звуковий супровід"],
        ["Instagram: дизайн постів, обкладинок актуальних та креативів для таргетованої реклами","Telegram: дизайн постів для каналів","Facebook: дизайн постів та іншого граф. контенту","Комплексне створення єдиного стилю для соц.мереж бренду/бізнесу/експерта",],
    ];

    return (
        <div className={styles.devOption} ref={devSectionRef} id='dev'>
            <h3 className={styles.title}>
                <span className={styles.white}>
                    що ми&nbsp;
                    <span className={styles.red}>
                        розробляємо?
                    </span>
                </span>
            </h3>
            <div className={styles.enum} >
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className={styles.category}
                        onClick={() => toggleButton(index)}
                    >
                        <div className={styles.wrapper}>
                            <div className={styles.hr}></div>
                            <div className={styles.allCategory}>
                                <span className={styles.txt}>{item}</span>
                                <PlusToCrossButton
                                    isCross={index === activeCategory}
                                    toggleButton={() => toggleButton(index)}
                                />
                            </div>
                        </div>
                        {index === activeCategory && additionalTexts[index].length > 0 && (
                            <div className={styles.description}>
                                <div className={styles.additionalText}>
                                    <ul>
                                        {additionalTexts[index].map((text, idx) => (
                                            <li key={idx}>
                                                <p>{text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.button}>
                                    <button
                                        className={styles.btn}
                                        onClick={handleButtonClick} // Обработчик клика с остановкой распространения
                                    >
                                        Замовити
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                <div className={styles.hr}></div>
            </div>
        </div>
    );
};

export default DevOption;
