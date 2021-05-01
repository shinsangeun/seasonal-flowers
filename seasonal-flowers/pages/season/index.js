import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'

export default function season() {
    return(
        <>
            <button className={seasonStyles.button}>
                <a href="/">🏠 Home</a>
            </button>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>☀️ 계절 선택</h1>
                    <p className={styles.description}>
                        원하시는 계절을 선택해 주세요!
                        {/*<code className={styles.code}>pages/index.js</code>*/}
                    </p>

                    <br />
                    <select>
                        <option id="">👉🏻 선택 </option>
                        <option id="spring">봄 (3~5월)</option>
                        <option id="summer">여름 (6~8월)</option>
                        <option id="autumn">가을 (9~11월)</option>
                        <option id="winter">겨울 (12~2월)</option>
                    </select>
                </main>
            </div>
        </>
    )
}