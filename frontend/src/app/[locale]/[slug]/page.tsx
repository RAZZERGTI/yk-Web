import React from "react";
import styles from './Case.module.scss'
import { useLocale } from "next-intl";
import Case from "@/app/[locale]/pages/case/Case";

export default function CasePage() {
    let locale = useLocale();
    return (
        <>
            <div className={styles.container}>
                <Case locale={locale} />
            </div>
        </>
    )
}