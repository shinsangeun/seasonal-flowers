import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'

const options = [
    {id: "", value: "👉🏻 선택"},
    {id: "seoul", value: "서울"},
    {id: "gyunggi", value: "경기"},
    {id: "incheon", value: "인천"},
    {id: "jeju", value: "제주"}
]

let content = '';

const handleChange = (e) => {
    console.log("e:", e.target.value)

    content.concat(e.target.value);
    return content;
}

const location = () => {
    return(
        <>
            <title className="App-title">⛳ 계절별 꽃 개화시기: 지역 선택</title>
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

                    <select id="location" onChange={handleChange} value={content}>
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

export default location;