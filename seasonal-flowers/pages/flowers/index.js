import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'

export default function flowers() {
    return(
        <>
            <button className={seasonStyles.button}>
                <a href="/">🏠 Home</a>
            </button>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>💐 꽃 선택</h1>
                    <p className={styles.description}>
                        원하시는 꽃을 선택해 주세요!
                        {/*<code className={styles.code}>pages/index.js</code>*/}
                    </p>

                    <br />
                    <select>
                        <option id="">👉🏻 선택 </option>
                        <option id="spring">벚꽃</option>
                        <option id="summer">목련</option>
                        <option id="autumn">개나리</option>
                        <option id="winter">진달래</option>
                        <option id="winter">튤립</option>
                    </select>
                </main>
            </div>
        </>
    )
}