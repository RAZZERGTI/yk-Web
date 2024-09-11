// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from '@/app/[locale]/page.module.scss';
import Header from "@/app/[locale]/components/header/Header";
import MainTitle from "@/app/[locale]/pages/main-page/first-part/main-title/MainTitle";
import Questions from "@/app/[locale]/pages/main-page/first-part/questions/Questions";
import DevOption from "@/app/[locale]/pages/main-page/first-part/dev-option/DevelopOption";
import Portfolio from "@/app/[locale]/pages/main-page/first-part/portfolio/Portfolio";
import Banner from "@/app/[locale]/pages/main-page/second-part/banner/Banner";
import Reviews from "@/app/[locale]/pages/main-page/second-part/reviews/Reviews";
import FormBox from "@/app/[locale]/pages/main-page/second-part/form/FormBox";
import Footer from "@/app/[locale]/components/Footer/Footer";
import { ScrollProvider } from "@/app/[locale]/components/scroll-context/UseScroll";
import Loader from "@/app/[locale]/components/preloader/Preloader"; // Import the Loader component

export default function Home() {
    const [loading, setLoading] = useState(true);

    const handleLoaderComplete = () => {
        setLoading(false); // Hide the loader and show the main content
    };
    return (
        <main className={styles.main}>
            {loading ? (
                <Loader onComplete={handleLoaderComplete} /> // Show loader while loading
            ) : (
                <>
                    <ScrollProvider>
                        <Header />
                        <div className={styles.container}>
                            <MainTitle />
                            <Questions />
                            <DevOption />
                            <Portfolio />
                        </div>
                    </ScrollProvider>
                    <Banner />
                    <Reviews />
                    <FormBox />
                    <Footer />
                </>
            )}
        </main>
    );
}
