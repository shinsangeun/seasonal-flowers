import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function location() {
    return(
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>⛳️ 지역 선택</h1>
                <p className={styles.description}>
                    원하시는 지역을 선택해 주세요!
                    {/*<code className={styles.code}>pages/index.js</code>*/}
                </p>
            </main>
        </div>
    )
}