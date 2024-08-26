'use client'
import Link from 'next/link';
import styles from './Header.module.scss';
import React, { useState, useEffect } from 'react';
import ToggleSwitch from "@/app/components/ToggleSwitch/ToogleSwitch";
import {useScroll} from "@/app/components/scroll-context/UseScroll";
import Select, { components } from "react-select";
import ReactDOM from "react-dom";
const selectStyles = (open) => ({
    singleValue: (provided) => ({ ...provided, color: "white",}),
    control: (provided) => ({
        ...provided,
        backgroundColor: "#151515", // Change the background color when closed
        borderColor: "#444", // Border color
        boxShadow: 'none', // Remove default box shadow
        '&:hover': {
            borderColor: "#555", // Border color on hover
        },
    }),
    menu: (provided) => ({
        ...provided,
        marginTop: 0,
        color: "white",
        borderwidth: 10,
        fontSize: 12,
        height: open ? "100px" : "0px",
        overflow: "hidden",
        opacity: open ? 1 : 0,
        transition: "all 0.6s ease-in-out",
        visibility: open ? "visible" : "hidden",
        background: "#151515",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: "#151515", // Фон при наведении
        color: "#fff" , // Цвет текста при выборе
        '&:hover': {
            backgroundColor: "#D0142C", // Фон при наведении
            color: "white", // Цвет текста при наведении
        },
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "#888", // Цвет текста плейсхолдера
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
});

const countries = [
    { value: "1", label: "UA" },
    { value: "2", label: "EN" },
    { value: "3", label: "HU" },
];
const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState('ua');
    const [isChecked, setIsChecked] = useState(false);
    const [isWideScreen, setIsWideScreen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'ua' ? 'eng' : 'ua'));
    };

    const handleToggle = () => {
        setIsChecked(!isChecked);
        toggleLanguage();
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    useEffect(() => {
        if (isMenuOpen) {
            // Запретить прокрутку
            document.body.style.overflow = 'hidden';
        } else {
            // Разрешить прокрутку
            document.body.style.overflow = '';
        }

        return () => {
            // Убираем запрет на прокрутку при размонтировании компонента
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);
    useEffect(() => {
        const updateScreenWidth = () => {
            const currentWidth = window.innerWidth;
            setIsWideScreen(currentWidth > 1541);
        };

        updateScreenWidth();
        window.addEventListener('resize', updateScreenWidth);

        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);
    const { scrollToSection } = useScroll();

    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={() => window.location.reload()}>
                <span className={styles.yk}>y.k </span>
                <span className={styles.agency}>Agency</span>
            </div>
            <div className={styles.burgerMenu} onClick={toggleMenu}>
                <span></span>
                <span  className={isMenuOpen && styles.last}></span>
                <span></span>
            </div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                <ul className={styles.navList}>
                    {isWideScreen && (
                        <li className={styles.navItem}>
                            <button onClick={() => scrollToSection('quiz')}>
                                <p className={styles.navLink}>quiz розрахунок</p>
                            </button>
                        </li>
                    )}
                    <li className={styles.navItem}>
                        <button onClick={() => scrollToSection('dev')}>
                            <p className={styles.navLink}>послуги</p>
                            <div className={styles.hr}></div>
                        </button>
                    </li>
                    <li className={styles.navItem}>
                        <button onClick={() => scrollToSection('portfolio')}>
                            <p className={styles.navLink}>портфоліо</p>
                            <div className={styles.hr}></div>
                        </button>
                    </li>
                    <li className={styles.navItem}>
                        <button onClick={() => scrollToSection('')}>
                            <p className={styles.navLink}>наша команда</p>
                            <div className={styles.hr}></div>
                        </button>
                    </li>
                    <li className={styles.navItem}>
                        <button onClick={() => scrollToSection('')}>
                            <p className={styles.navLink}>хочу проєкт!</p>
                            <div className={styles.hr}></div>
                        </button>
                    </li>
                </ul>
                <div className={styles.languageSwitcher}>
                    <div onClick={() => setOpen(!open)}>
                        <Select
                            defaultValue={countries[0]}
                            options={countries}
                            isSearchable={false}
                            onBlur={() => setOpen(false)}
                            menuIsOpen
                            styles={selectStyles(open)}
                        />
                    </div>
                    {/*<span*/}
                    {/*    className={`${styles.lang} ${language === 'ua' ? styles.active : styles.inactive}`}*/}
                    {/*>*/}
                    {/*    ua*/}
                    {/*</span>*/}
                    {/*<ToggleSwitch checked={isChecked} onChange={handleToggle} />*/}
                    {/*<span*/}
                    {/*    className={`${styles.lang} ${language === 'eng' ? styles.active : styles.inactive}`}*/}
                    {/*>*/}
                    {/*    eng*/}
                    {/*</span>*/}
                </div>
            </nav>
        </header>
    );
};

export default Header;
