import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'

export default function qna() {
    return(
        <>
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

                    <br />
                    <table>
                        <th>
                            순서
                        </th>
                        <th>
                            제목
                        </th>
                        <th>
                            내용
                        </th>
                        <tbody>
                        <td>
                            1
                        </td>
                        <td>
                            2
                        </td>
                        <td>
                            3
                        </td>
                        </tbody>
                    </table>
                </main>
            </div>
        </>
    )
}