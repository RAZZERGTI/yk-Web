'use client';
import React, { createContext, useContext, useRef } from 'react';

interface ScrollContextType {
    quizSectionRef: React.RefObject<HTMLDivElement>;
    portfolioSectionRef: React.RefObject<HTMLDivElement>;
    devSectionRef: React.RefObject<HTMLDivElement>;
    scrollToSection: (section: 'quiz' | 'portfolio' | 'dev') => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const quizSectionRef = useRef<HTMLDivElement>(null);
    const portfolioSectionRef = useRef<HTMLDivElement>(null);
    const devSectionRef = useRef<HTMLDivElement>(null);

    const headerOffset = 120;

    const scrollToSection = (section: 'quiz' | 'portfolio' | 'dev') => {
        const sectionRefs = {
            quiz: quizSectionRef,
            portfolio: portfolioSectionRef,
            dev: devSectionRef,
        };

        const targetRef = sectionRefs[section];

        if (targetRef.current) {
            const elementPosition = targetRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        } else {
            console.warn(`ScrollProvider: Ссылка на раздел ${section} недоступна.`);
        }
    };

    return (
        <ScrollContext.Provider value={{ quizSectionRef, portfolioSectionRef, devSectionRef, scrollToSection }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = (): ScrollContextType => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScroll должен быть использован внутри ScrollProvider");
    }
    return context;
};
