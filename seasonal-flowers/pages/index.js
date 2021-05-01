import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>계절별 꽃 개화 시기🌸</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>계절별 꽃 개화 시기🌸</h1>

        <p className={styles.description}>
          사진충들을 위한 계절별 꽃 개화 시기 및 사진 명소 추천
          {/*<code className={styles.code}>pages/index.js</code>*/}
        </p>

        <div className={styles.grid}>
          <a href="/season" className={styles.card}>
            <h2>☀️ 계절 선택 &rarr;</h2>
            <p>원하는 계절을 선택해 주세요!</p>
          </a>

          <a href="/location" className={styles.card}>
            <h2>⛳️ 지역 선택 &rarr;</h2>
            <p>원하는 지역을 선택해 주세요!</p>
          </a>

          <a href="/flowers" className={styles.card}>
            <h2>💐 꽃 선택 &rarr;</h2>
            <p>원하는 꽃을 선택해 주세요!</p>
          </a>

          <a href="/qna" className={styles.card}>
            <h2>💌 Q&A &rarr;</h2>
            <p>문의 사항이 있으시면 여기로!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/shinsangeun/seasonal-flowers">
          Powered by&nbsp;<b>sangeun-shin 🙋🏻‍♀️</b>
        </a>
      </footer>
    </div>
  )
}
