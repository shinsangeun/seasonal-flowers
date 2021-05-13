import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'
import Link from 'next/link';

export default function qna() {
    return(
        <>
            <title className="App-title">💌 계절별 꽃 개화시기: Q&A</title>
            <button className={seasonStyles.button}>
                <a href="/">🏠 Home</a>
            </button>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>💌 Q & A</h1>
                    <p className={styles.description}>
                        문의사항을 남겨 주세요!
                        {/*<code className={styles.code}>pages/index.js</code>*/}
                    </p>

                    <b>Github > issue</b>
                    <br />

                    <button className={seasonStyles.buttonLink}>
                        <Link href="https://github.com/shinsangeun/seasonal-flowers/issues/new" className={styles.title}>
                            👉🏻 이곳에 남겨 주세요!
                        </Link>
                    </button>
                </main>
            </div>
        </>
    )
}