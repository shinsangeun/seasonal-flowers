import {useRouter} from "next/router";
import seasonStyles from '../../styles/season.module.css'
import styles from '../../styles/Home.module.css'

const season = () => {
    const router = useRouter();
    console.log("season:", router.query.season);

    return(
        <>
            <title className="App-title">πΈ κ³μ λ³ κ½ κ°νμκΈ°: {router.query.season}</title>
            <button className={seasonStyles.button}>
                <a href="/">π  Home</a>
            </button>

            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>βοΈ κ³μ  μ ν</h1>
                    <p className={styles.description}>
                        "{router.query.season}"μ μ ν νμ¨λ€μ!
                    </p>
                </main>
            </div>


        </>
    )
}

export default season;