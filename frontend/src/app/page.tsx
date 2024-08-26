import styles  from './page.module.scss'
import Header from "@/app/components/header/Header";
import MainTitle from "@/app/pages/main-page/first-part/main-title/MainTitle";
import Questions from "@/app/pages/main-page/first-part/questions/Questions";
import DevOption from "@/app/pages/main-page/first-part/dev-option/DevelopOption";
import Portfolio from "@/app/pages/main-page/first-part/portfolio/Portfolio";
import Banner from "@/app/pages/main-page/second-part/banner/Banner";
import Reviews from "@/app/pages/main-page/second-part/reviews/Reviews";
import FormBox from "@/app/pages/main-page/second-part/form/FormBox";
import Footer from "@/app/components/Footer/Footer";
import {ScrollProvider} from "@/app/components/scroll-context/UseScroll";

export default function Home() {
  return (
    <main className={styles.main}>
        <ScrollProvider>
            <Header />
            <div className={styles.container}>
                    <MainTitle/>
                    <Questions/>
                    <DevOption/>
                    <Portfolio/>
            </div>
        </ScrollProvider>
        {/*<Banner></Banner>*/}
        {/*<Reviews></Reviews>*/}
        {/*<FormBox></FormBox>*/}
        {/*<Footer></Footer>*/}
    </main>
  );
}
