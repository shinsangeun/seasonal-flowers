import {useRouter} from "next/router";
import seasonStyles from '../../styles/season.module.css'
import styles from '../../styles/Home.module.css'

const season = () => {
    const router = useRouter();
    console.log("season:", router.query.season);

    return(
        <>
            <title className="App-title">🌸 계절별 꽃 개화시기: {router.query.season}</title>
            <button className={seasonStyles.button}>
                <a href="/">🏠 Home</a>
            </button>

            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>☀️ 계절 선택</h1>
                    <p className={styles.description}>
                        "{router.query.season}"을 선택 하셨네요!
                    </p>
                </main>
            </div>


        </>
    )
}

export default season;