import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'

export default function location() {
    return(
        <>
            <button className={seasonStyles.button}>
                <a href="/">🏠 Home</a>
            </button>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>⛳️ 지역 선택</h1>
                    <p className={styles.description}>
                        원하시는 지역을 선택해 주세요!
                        {/*<code className={styles.code}>pages/index.js</code>*/}
                    </p>

                    <br />
                    <select>
                        <option id="">👉🏻 선택 </option>
                        <option id="spring">서울</option>
                        <option id="summer">경기</option>
                        <option id="autumn">인천</option>
                        <option id="winter">제주</option>
                    </select>
                </main>
            </div>
        </>
    )
}