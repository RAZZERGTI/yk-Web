'use client'
import Cookies from "js-cookie";
import Link from 'next/link';
import styles from './Header.module.scss';
import {motion} from "framer-motion";

import React, { useState, useEffect } from 'react';
import ToggleSwitch from "@/app/[locale]/components/ToggleSwitch/ToogleSwitch";
import { useScroll } from "@/app/[locale]/components/scroll-context/UseScroll";
import Select from "react-select";
import { components } from 'react-select';
import {usePathname, useRouter} from "@/navigation";
const selectStyles = (open) => ({
    singleValue: (provided) => ({
        ...provided,
        color: "white",
        display: "flex",
        alignItems: "center",
    }),
    control: (provided) => ({
        ...provided,
        backgroundColor: "#151515",
        borderColor: "#444",
        boxShadow: 'none',
        '&:hover': {
            borderColor: "#555",
        },
    }),
    menu: (provided) => ({
        ...provided,
        marginTop: 0,
        color: "white",
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
        backgroundColor: "#151515",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        '&:hover': {
            backgroundColor: "#D0142C",
            color: "white",
        },
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "#888",

    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
});

const CustomOption = (props) => (
    <components.Option {...props}>
        {props.data.label}
        <img
            src={props.data.icon}
            alt=""
            style={{ width: '15px', marginLeft: '8px' }}
        />
    </components.Option>
);

const CustomSingleValue = (props) => (
    <components.SingleValue {...props}>
        {props.data.label}
        <img
            src={props.data.icon}
            alt=""
            style={{ width: '15px', marginLeft: '8px' }}
        />
    </components.SingleValue>
);

const countries = [
    { value: "1", label: "UA", icon: "/ua.png" },
    { value: "2", label: "EN", icon: "/en.png" },
    { value: "3", label: "HU", icon: "/hu.png" },
];

const Header: React.FC = ({ locale }: any) => {
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState('ua');
    const [isChecked, setIsChecked] = useState(false);
    const [cookiesAccepted, setCookiesAccepted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isWideScreen, setIsWideScreen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);

    // const handleLanguageChange = (selectedOption) => {
    //     setLanguage(selectedOption.label);
    //     // Записываем выбранный язык в куки
    //     document.cookie = `language=${selectedOption.label}; path=/; max-age=31536000`; // 1 год
    // };
    type Locale = "ua" | "en" | "hu";
    const handleLanguageChange = async (
        event
    ) => {
        console.log('asd- ',event.label)
        const newLanguage = event.label.toLowerCase() as Locale; // Cast to the Locale type
        setLanguage(newLanguage as string); // Ensure newLanguage is a string

        if (cookiesAccepted) {
            Cookies.set("selectedLanguage", newLanguage as string, { expires: 365 }); // Ensure newLanguage is a string
        }

        router.push(pathname, { locale: newLanguage }); // This now expects newLanguage to be of type Locale
        console.log(pathname)
        await router.refresh();
    };
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
        const languageFromCookie = Cookies.get("selectedLanguage");
        const cookiesAcceptedFromCookie = Cookies.get("cookieConfirmation");

        if (languageFromCookie) {
            console.log(languageFromCookie)
            setLanguage(languageFromCookie);
            setLoading(false);
        } else {
            const browserLanguage = navigator.language;
            console.log(browserLanguage);
            const defaultLanguage = browserLanguage.substring(0, 2).toUpperCase();
            console.log(defaultLanguage);
            setLanguage(defaultLanguage);
            setLoading(false);
        }

        if (cookiesAcceptedFromCookie) {
            setCookiesAccepted(true);
        }
    }, []);
    // useEffect(() => {
    //     if (isMenuOpen) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = '';
    //     }
    //
    //     return () => {
    //         document.body.style.overflow = '';
    //     };
    // }, [isMenuOpen]);
    if (loading) {
        return null;
    }
    // useEffect(() => {
    //     const updateScreenWidth = () => {
    //         const currentWidth = window.innerWidth;
    //         setIsWideScreen(currentWidth > 1541);
    //     };
    //
    //     updateScreenWidth();
    //     window.addEventListener('resize', updateScreenWidth);
    //
    //     return () => {
    //         window.removeEventListener('resize', updateScreenWidth);
    //     };
    // }, []);

    const { scrollToSection } = useScroll();

    return (
        <header className={`${styles.header} ${isScrolled ? styles.fixed : styles.static}`}>
            <div className={styles.logo} onClick={() => window.location.reload()}>
                <span className={styles.yk}>y.k </span>
                <span className={styles.agency}>Agency</span>
            </div>
            <div className={styles.burgerMenu} onClick={toggleMenu}>
                <span></span>
                <span className={isMenuOpen && styles.last}></span>
                <span></span>
            </div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <button onClick={() => scrollToSection('dev')}>
                            {/*<p className={styles.navLink}>*/}
                                <motion.p
                                    className={styles.navLink}
                                    whileHover={{ y: [-100, 0] }}
                                    transition={{  type: 'tween', duration: 0.5 }}
                                >
                                послуги
                                </motion.p>
                            {/*</p>*/}
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
                            value={countries.find((option) => option.label.toLowerCase() === language)}
                            options={countries}
                            onChange={handleLanguageChange}
                            isSearchable={false}
                            onBlur={() => setOpen(false)}
                            menuIsOpen
                            styles={selectStyles(open)}
                            components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
