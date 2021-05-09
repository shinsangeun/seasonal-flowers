import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'

const options = [
    {id: "", value: "👉🏻 선택"},
    {id: "cherryBlossom", value: "🌸 벚꽃"},
    {id: "magnolia", value: "목련"},
    {id: "forsythia", value: "🌼 개나리"},
    {id: "rhododendron", value: "🌺 진달래"},
    {id: "tulipa", value: "🌷 튤립"},
    {id: "rose", value: "🌹 장미"},
    {id: "sunflower", value: "🌻 해바라기"}
]

const handleChange = (obj) => {
    console.log("obj:", obj)
    return console.log("1")
}

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

                    <select id="flowers" onChange={handleChange}>
                        {options.map((data, index) => (
                            <option id={options[index].id} key={options[index].id}>
                                {options[index].value}
                            </option>
                        ))}
                    </select>
                </main>
            </div>
        </>
    )
}