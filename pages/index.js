import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const handleChange = (obj) => {
    console.log("obj:", obj.target.value)
}

const weatherOptions = [
    {id: "", value: "👉🏻 선택"},
    {id: "spring", value: "🌸 봄"},
    {id: "summer", value: "🍀️ 여름"},
    {id: "autumn", value: "🍂 가을"},
    {id: "winter", value: "☃️ 겨울"}
]

const flowerOptions = [
    {id: "", value: "👉🏻 선택"},
    {id: "random", value: "🌠 랜덤"},
    {id: "cherryBlossom", value: "🌸 벚꽃"},
    {id: "magnolia", value: "🐚 목련"},
    {id: "forsythia", value: "🌼 개나리"},
    {id: "rhododendron", value: "🌺 진달래"},
    {id: "tulipa", value: "🌷 튤립"},
    {id: "rose", value: "🌹 장미"},
    {id: "sunflower", value: "🌻 해바라기"},
    {id: "daisy", value: "🌼 데이지"},
    {id: "hydrangea", value: "🌻 수국"}
]

export default function Home() {
    return (
        <>
            <Head>
                <title>계절별 꽃 개화 시기🌸</title>
                <meta name="description" content=""/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>계절별 꽃 개화 시기🌸</h1>
                    <h2>☀️ 계절 선택</h2>
                    <p>원하시는 계절을 선택해 주세요!</p>
                    <select id="weather" onChange={handleChange}>
                        {weatherOptions.map((data, index) => (
                            <option id={weatherOptions[index].id} key={weatherOptions[index].id}>
                                {weatherOptions[index].value}
                            </option>
                        ))}
                    </select>

                    <br/><br/>
                    <h2>💐 꽃 선택</h2>
                    <p>원하시는 꽃을 선택해 주세요!</p>
                    <select id="flowers" onChange={handleChange}>
                        {flowerOptions.map((data, index) => (
                            <option id={flowerOptions[index].id} key={flowerOptions[index].id}>
                                {flowerOptions[index].value}
                            </option>
                        ))}
                    </select>
                    <br/>
                    <button><Link href="/season">검색</Link></button>
                </main>
                <footer className={styles.footer}>
                    <a href="https://github.com/shinsangeun/seasonal-flowers">
                        Powered by&nbsp;<b>sangeun-shin 🙋🏻‍♀️</b>
                    </a>
                </footer>
            </div>
        </>
    )
}
