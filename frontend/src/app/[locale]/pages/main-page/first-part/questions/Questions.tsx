'use client'
import styles from './Questions.module.scss';
import React, {useEffect, useState} from 'react';
import BudgetSlider from "@/app/[locale]/pages/main-page/first-part/questions/BudjetSlider";
import Form from "@/app/[locale]/components/Form/Form";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './input.css'
import {useScroll} from "@/app/[locale]/components/scroll-context/UseScroll";
import axios from "axios";
const Questions: React.FC = () => {
    const [step, setStep] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [budgetValue, setBudgetValue] = useState(null);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [congrats, setCongrats] = useState(false);
    const { quizSectionRef } = useScroll();
    useEffect(() => {
        // Check if the URL contains the hash
        if (window.location.hash) {
            setTimeout(() => {
                const yOffset = -200; // Adjust this value based on the height of your fixed header
                const element = document.querySelector(window.location.hash);
                if (element) {
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 50); // Delay to ensure the page has loaded
        }
    }, []);
    const initialQuestions = [
        {
            id: 1,
            question: "#1 Який тип послуг вас цікавить?",
            answers: ["веб-сайт", "чат-бот", "моушн-дизайн", "візуал/креативи"],
        }
    ];

    const initialQuestionsVisCreat = [
        {},
        {
            id: 2,
            question: "#2 Конкретизуйте свій запит",
            answers: ["креативи на таргет", "візуал сторінки"],
        }
    ];
    const motionDesignQuestions = [
        {},
        {
            id: 2,
            question: "#2 Який тип моушн-дизайну вас цікавить?",
            answers: ["рекламний ролик", "анімація логотипу", "пояснювальне відео", "інше"],
        },
        {
            id: 3,
            question: "#3 Який формат відео вас цікавить?",
            answers: ["2D анімація", "3D анімація", "комбінація 2D і 3D"],
        },
        {
            id: 4,
            question: "#4 Які ви маєте терміни на створення моушн-дизайну?",
            answers: ["до 1 тижня", "до 2 тижнів", "до місяця", "більше місяця"],
        },
        {
            id: 5,
            question: "#5 Чи маєте ви готовий сценарій або референси?",
            answers: ["так, є готовий сценарій", "так, є референси", "ні, все з нуля"],
        },
        {
            id: 6,
            question: "#6 Який у вaс бюджет?",
            answers: ["від 200$ до 1000$", "від 1000$ до 5000$", "більше 5000$"],
        },
        {
            id: 7,
            question: "#7 Залиште свої контакти і ми зв’яжемося з вами протягом 2 робочих днів",
            answers: [],
        }
    ];

    const chatBotQuestions = [
        {},
        {
            id: 2,
            question: "#2 Який тип чат-боту вас цікавить?",
            answers: ["система запису на прийом", "інтернет-магазин", "АІ"],
        },
        {
            id: 3,
            question: "#3 Який функціонал має виконувати бот?",
            answers: [
                "запис на прийом: інтеграція з Google API",
                "інтернет-магазин: кошик, оплата онлайн, система оформлення замовлення",
            ],
        },
        {
            id: 4,
            question: "#4 Які ви маєте терміни на розробку чат-боту?",
            answers: ["до 5 днів", "тиждень", "два тижні", "місяць"],
        },
        {
            id: 5,
            question: "#5 Чи маєте ви готове ТЗ або mindmap?",
            answers: ["так, є готове ТЗ", "так, є mindmap", "ні, все з нуля"],
        },
        {
            id: 6,
            min:200,
            step:10,
            max:3000,
            question: "#6 Який у вас бюджет?",
            answers: ["від 200$ до 3000$"],
        },
        {
            id: 7,
            question: "#7 Залиште свої контакти і ми зв’яжемося з вами протягом 2 робочих днів",
            answers: [],
        }
    ];

    const websiteQuestions = [
        {},
        {
            id: 2,
            question: "#2 Який тип сайту вас цікавить?",
            answers: ["лендінг", "корпоративний", "CRM", "e-com"],
        },
        {
            id: 3,
            question: "#3 Чого ви чекаєте від співпраці?",
            answers: ["новий сайт з нуля", "редизайн існуючого сайту"],
        },
        {
            id: 4,
            question: "#4 Які ви маєте терміни на розробку сайту?",
            answers: ["від 1 місяця", "від 2 до 5 місяців", "від 5 місяців"],
        },
        {
            id: 5,
            question: "#5 Чи маєте ви готовий брендбук або стильові рішення?",
            answers: ["так, готовий брендбук", "так, деякі стильові рішення", "ні, все з нуля"],
        },
        {
            id: 6,
            min:500,
            step:100,
            max:15000,
            question: "#6 Який у вас бюджет?",
            answers: ["від 1000 доларів", "від 5000 доларів", "від 10000 доларів", "від 15000 доларів"],
        },
        {
            id: 7,
            question: "#7 Залиште свої контакти і ми зв’яжемося з вами протягом 2 робочих днів",
            answers: [],
        }
    ];

    const visualQuestions = [
        {},
        {},
        {
            id: 3,
            question: "#3 Чи є у вас маркетингові дослідження вашого бізнесу?",
            answers: ["так", "ні"],
        },
        {
            id: 4,
            question: "#4 Чи є у вас готовий брендбук/стильові рішення?",
            answers: ["так, готовий брендбук", "так, деякі стильові рішення", "ні, все з нуля"],
        },
        {
            id: 5,
            question: "#5 Вас цікавить постійна співпраця чи замовлення на конкретну кількість постів та оформлення сторінки?",
            answers: ["постійна співпраця", "разове оформлення сторінки"],
        },
        {
            id: 6,
            question: "#6 Який у вас бюджет?",
            answers: ["від 200 доларів до 1000 доларів"],
            min:200,
            step:10,
            max:1000,
        },
        {
            id: 7,
            question: "#7 Залиште свої контакти і ми зв’яжемося з вами протягом 2 робочих днів",
            answers: [],
        }
    ];

    const creativeQuestions = [
        {},
        {},
        {
            id: 3,
            question: "#3 Чи є у вас маркетингові дослідження вашого бізнесу?",
            answers: ["так", "ні"],
        },
        {
            id: 4,
            question: "#4 Чи є у вас готовий брендбук/стильові рішення?",
            answers: ["так, готовий брендбук", "так, деякі стильові рішення", "ні, все з нуля"],
        },
        {
            id: 5,
            question: "#5 Вас цікавить постійна співпраця чи замовлення на конкретну кількість креативів?",
            answers: ["постійна співпраця", "разове замовлення на фіксовану кількість"],
        },
        {
            id: 6,
            question: "#6 Чи є у вас таргетолог?",
            answers: ["так", "ні"],
        },
        {
            id: 7,
            question: "#7 Який у вас дедлайн на разове замовлення креативів/перше замовлення на постійній співпраці?",
            answers: ["від 1 тижня", "від 2 тижнів", "від місяця"],
        },
        {
            id: 8,
            question: "#8 Який у вас бюджет?",
            min:200,
            max:1000,
            step:100,
            answers: ["від 200 доларів до 1000 доларів"],
        },
        {
            id: 9,
            question: "#9 Залиште свої контакти і ми зв’яжемося з вами протягом 2 робочих днів",
            answers: [],
        }
    ];

    const handleBudgetChange = (value) => {
        setBudgetValue(value);
        handleAnswerClick(`${value}$`);
    };
    const handlePhoneChange = (value) => {
        setPhone(value)
        handleAnswerClick(`${value}$`);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);

        handleAnswerClick(value);

        console.log(name, value)
    };
    const handleNextClick = () => {
        if (step > 0 && budgetValue == null && !selectedAnswers[step - 1]) {
            setError("Будь ласка, оберіть відповідь, перш ніж продовжити.");
            return;
        }

        setError(null);

        if (step === 0) {
            setStep(1);
        } else if (step === 1) {
            setStep(2);
        } else if (step === 2 && (selectedAnswers[1] === 'креативи на таргет' || selectedAnswers[1] === 'візуал сторінки')) {
            setStep(3);
        } else if (step < currentQuestions.length) {
            setStep(step + 1);
        } else {
            handleSubmit();
        }
    };



    const handleAnswerClick = (answer: string) => {
        console.log('answer - ', answer)
        setSelectedAnswers(prevAnswers => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[step - 1] = answer;
            return updatedAnswers;
        });
        setError(null);
    };


    const handleSubmit = () => {
        // Формируем объект с данными для отправки
        const dataToSend = {
            name: name,           // Имя пользователя
            email: email,         // Электронная почта
            phone: phone,         // Номер телефона
            answers: selectedAnswers.join(', '), // Ответы, объединенные в строку
            language: 'ua'        // Язык пользователя
        };

        console.log(dataToSend); // Логирование данных для отладки

        // Выполняем POST запрос с помощью axios
        axios.post('http://localhost:8000/api/consultation/send-data/', dataToSend)
            .then(response => {
                console.log('Success:', response.data); // Обработка успешного ответа
                if (response.data.status === 'success'){
                    document.cookie = "quiz=true; path=/;";
                    setCongrats(true)
                }
                // Дополнительные действия по успешному ответу, например, уведомление пользователя
            })
            .catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message); // Обработка ошибок
                // Дополнительные действия по ошибке, например, уведомление пользователя
            });
    };


    const handleBackClick = () => {
        if (step > 1) {
            setStep(step - 1);
            setError(null);
        }
    };

    let currentQuestions =
        step === 1
            ? initialQuestions
            : selectedAnswers[0] === 'веб-сайт'
                ? websiteQuestions
                : selectedAnswers[0] === 'візуал/креативи'
                    ? initialQuestionsVisCreat
                    : selectedAnswers[0] === 'чат-бот'
                        ? chatBotQuestions
                        : selectedAnswers[0] === 'моушн-дизайн'
                            ? motionDesignQuestions
                            : [];

    if (step >= 3 && selectedAnswers[0] === 'візуал/креативи') {
        currentQuestions =
            selectedAnswers[1] === 'креативи на таргет'
                ? creativeQuestions
                : selectedAnswers[1] === 'візуал сторінки'
                    ? visualQuestions
                    : [];
    }
    console.log(currentQuestions)
    const currentQuestion = currentQuestions[step - 1];

    const renderQuestion = () => {
        if (!currentQuestion) return null;
        return (
            <>
                {step > 0 && (
                    <p className={styles.add} style={{textAlign: "center"}}>
                        {`${currentQuestion.id}/${currentQuestions.length}`}
                    </p>
                )}
                <p className={styles.headTxt} style={{width: "100%"}}>{currentQuestion.question}</p>
                <div className={currentQuestion.question === "#7 Залиште свої контакти і ми зв’яжемося з вами протягом 2 робочих днів" ?
                    styles.answersContacts : currentQuestion.question === "#9 Залиште свої контакти і ми зв’яжемося з вами протягом 2 робочих днів" ? styles.answersContacts:  currentQuestion.question === "#6 Який у вас бюджет?" ? styles.answersBudjet :
                        currentQuestion.question === "#8 Який у вас бюджет?" ? styles.answersBudjet :styles.answers}>
                    {currentQuestion.question === "#7 Залиште свої контакти і ми зв’яжемося з вами протягом 2 робочих днів" || currentQuestion.question === "#9 Залиште свої контакти і ми зв’яжемося з вами протягом 2 робочих днів" ? (
                        <div className={styles.wrapperForm}>
                            <div className={styles.nameNumber}>
                                <div className={styles.name}>
                                    <label htmlFor="">
                                        Ім’я
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Пес Патрон"
                                        value={name}
                                        onChange={handleChange}
                                    />
                                </div>
                                {/*<div className={styles.number}>*/}
                                <label htmlFor="" className={styles.number}>
                                    Номер телефону:
                                    <PhoneInput
                                        country={'ua'}
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        inputProps={{
                                            name: 'phone',
                                            required: true,
                                            placeholder: '+38'
                                        }}
                                        containerClass={styles.phoneContainer}
                                        inputClass={styles.phoneInput}
                                        buttonClass={styles.countryButton}
                                        dropdownClass={styles.countryDropdown}
                                    />
                                    </label>
                                {/*</div>*/}
                            </div>
                            <div className={styles.email}>
                                <label htmlFor="email">
                                    E-mail:
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    value={email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    ) : currentQuestion.question === "#6 Який у вас бюджет?" || currentQuestion.question === "#8 Який у вас бюджет?" ? (
                        <BudgetSlider min={currentQuestion.min} max={currentQuestion.max} step={currentQuestion.step}
                                      onValueChange={handleBudgetChange}/>
                    ) : (
                        currentQuestion.answers.map((answer, index) => (
                            <button
                                key={index}
                                className={`${styles.answer} ${selectedAnswers[step - 1] === answer ? styles.active : ''}`}
                                onClick={() => handleAnswerClick(answer)}
                            >
                                {answer}
                            </button>
                        ))
                    )}
                </div>
                {error && <p className={styles.error}>{error}</p>}
            </>
        );
    };
    return (
        <div className={styles.questions} ref={quizSectionRef} id="quiz">
            <div className={styles.title}>
                <p className={styles.text}>
                    Ми приготували для вас міні-бриф, аби ви змогли приблизно порахувати вартість свого замовлення. Пам’ятайте, остаточну ціну ми можемо порахувати лише після повного та детального брифу
                </p>
                <h3 className={styles.main}>
                    <span className={styles.red}>
                        порахуй&nbsp;
                        <span className={styles.white}>
                            вартість
                        </span>
                    </span>
                    <span className={styles.white}>
                        свого запиту&nbsp;
                        <span className={styles.red}>
                            за 1 хв
                        </span>
                    </span>
                </h3>
            </div>
            <div className={styles.wrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
                    <path d="M78.4411 62.9185C79.1931 62.8566 79.7871 62.3552 80.0514 61.6547C80.2883 61.0434 81.3558 58.0492 81.8965 57.1649C82.5797 56.0557 78.0684 45.7018 78.0839 45.731C77.8332 45.1164 77.3198 44.6408 76.6948 44.4486C70.5483 42.5092 70.0657 42.0921 64.9995 44.0275C63.5934 44.5479 62.7489 45.0699 62.7283 45.4544C62.6169 47.0082 67.0429 47.3924 69.6404 46.0169C70.6327 45.4914 75.4126 47.1082 75.5071 47.9924C75.5655 48.5967 77.3377 51.7315 79.1631 55.2492L78.2052 56.6159C77.6765 57.3817 77.1272 58.532 77.0106 59.2291C76.7875 60.4309 76.7292 60.4618 75.2355 60.3933C73.8156 60.3231 71.9632 61.3414 72.3187 62.0126C72.6278 62.5963 75.9071 63.214 77.7492 63.0233L78.4411 62.9185Z" fill="#D0142C" fill-opacity="0.83"/>
                    <path d="M78.8786 30.9252C78.4287 30.005 77.5564 29.3459 76.5623 29.1623C74.708 28.8363 73.2162 29.4768 72.9485 30.6649C72.1523 34.5245 62.7117 38.2906 51.6809 39.1244C44.101 39.7003 36.3462 42.2747 30.5419 46.1331C17.929 54.4939 19.4707 54.0886 38.0179 86.0083L39.8343 85.9806C41.6216 85.9684 41.7382 85.9066 45.2438 82.9292C50.8351 78.1746 61.2285 72.8203 68.0288 71.125C74.139 69.6084 75.1244 68.7876 71.7936 67.8608C65.6676 66.1721 48.2077 72.5779 42.8946 78.4931C41.8148 79.7001 40.7609 80.744 40.5566 80.8522C39.8562 81.2231 36.5175 71.743 26.2179 53.9162C26.2471 53.9007 37.9669 42.7244 50.9773 42.5239C58.0216 42.4184 65.7662 40.6715 70.8598 38.0116L75.7921 35.3997C88.3569 59.1272 89.8749 61.4997 89.0286 61.9479C88.6492 62.1488 86.2044 63.1071 83.5829 64.0842C78.5012 65.9905 77.8916 66.4627 79.5811 67.3244C81.2105 68.1432 87.8341 66.4668 91.6042 64.6946C95.0824 63.0769 94.4109 62.7972 93.4596 60.6478C92.2609 58.0314 93.1814 60.1224 78.8786 30.9252Z" fill="#D0142C" fill-opacity="0.83"/>
                    <path d="M35.558 56.8134C36.3391 56.1008 37.1906 53.9684 37.0514 53.0704C36.9672 52.6292 38.0625 52.0866 41.5905 50.7041C50.3307 47.309 44.7284 45.9035 42.9206 46.3003C40.8037 46.7486 38.0518 48.4674 35.0458 50.6945C34.4793 51.1066 33.997 51.96 33.997 52.5952C33.9971 53.2304 33.0873 54.7586 32.6634 56.2162C31.4688 60.0999 37.929 72.9345 40.5814 72.0157C42.7498 71.2412 43.5602 71.1484 45.0916 71.5706C46.9493 72.0442 47.0334 71.8502 55.3511 67.4456C56.4894 66.8429 55.6186 63.7165 48.3137 67.2111C45.3042 68.6553 44.5694 68.8202 43.0551 68.501C42.0902 68.302 41.1133 68.2214 40.909 68.3296C40.0043 68.8087 34.7615 57.4968 35.558 56.8134Z" fill="#D0142C" fillOpacity="0.83"/>
                    <path d="M61.2859 63.3344C61.3906 62.7558 60.7895 61.0562 60.7122 60.9103C60.6349 60.7644 61.5415 60.359 62.3655 59.5864C65.416 56.7378 63.0412 52.4647 58.3404 52.3382C57.0544 52.3091 53.3273 54.0213 52.6489 51.5405C52.1336 49.7206 53.653 49.6261 55.3063 49.5727C56.4274 49.5022 57.4627 49.5518 58.4671 49.5432C60.2543 49.531 59.236 47.6786 57.8848 47.3851C57.0384 47.1981 55.9293 47.1501 54.8821 47.2189C54.6606 47.224 54.5625 46.1923 53.9461 45.7339C52.6687 44.8035 50.624 45.1763 51.1959 46.2561C51.2731 46.402 51.6285 47.7086 51.6285 47.7086C51.5994 47.724 47.7485 47.9321 48.4048 51.9942C48.7329 54.0252 50.7917 56.1487 53.336 55.6609C55.3808 55.2881 58.8556 54.158 59.5803 56.0911C60.5884 58.7711 55.4155 59.3056 55.3863 59.321C51.9492 60.1695 50.4026 62.2591 54.8424 61.9633C55.6099 61.9306 57.1669 61.5545 57.5979 61.6626C58.0288 61.7707 58.5887 63.6043 58.7433 63.8961C59.4816 65.1494 61.0955 64.6685 61.2859 63.3344Z" fill="#D0142C" fillOpacity="0.83"/>
                </svg>

                {step === 0 ? (
                    <>
                        <p className={styles.headTxt}>
                            дізнайся, скільки коштує твій індивідуальний запит!
                        </p>
                        <p className={styles.add}>на вас чекає ≈7 питань</p>
                        <button className={styles.btn} onClick={handleNextClick}>
                            розрахувати
                        </button>
                    </>
                ) : !congrats ? (
                    <>
                        <div className={styles.question}>
                            {renderQuestion()}
                            <div className={styles.btns}>
                                {(step > 1 && step !== currentQuestions.length) || currentQuestion.question === "#2 Конкретизуйте свій запит" ? (
                                    <button className={styles.btnBack} onClick={handleBackClick}>
                                        назад
                                    </button>
                                ) : null}

                                <button className={styles.btnAnswer} onClick={handleNextClick}>
                                    {currentQuestion.question !== "#1 Який тип послуг вас цікавить?" && currentQuestion.question !== "#2 Конкретизуйте свій запит" && step === currentQuestions.length ? 'надіслати' : 'далі'}
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.congratulation}>
                            <div className={styles.mainTxt}>
                                Вітаємо  з успішним проходженням квізу!
                            </div>
                            <div className={styles.moreTxt}>
                                Ми надішлемо лист з орієнтованою ціною вам на пошту
                            </div>
                            <div className={styles.image}>
                                <img src="/star.png" alt="starImage"/>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Questions;
