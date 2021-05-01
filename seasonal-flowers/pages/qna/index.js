import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function qna() {
    return(
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>💌 Q & A</h1>
                <p className={styles.description}>
                    문의사항을 남겨 주세요!
                    {/*<code className={styles.code}>pages/index.js</code>*/}
                </p>
            </main>
        </div>
    )
}