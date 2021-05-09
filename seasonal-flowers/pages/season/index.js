import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'
import Select from 'react-select'

const options = [
    {id: "", value: "👉🏻 선택"},
    {id: "spring", value: "🌸 봄 (3~5월)"},
    {id: "summer", value: "🍀️ 여름 (6~8월)"},
    {id: "autumn", value: "🍂 가을 (9~11월)"},
    {id: "winter", value: "☃️ 겨울 (12~2월)"}
]

const handleChange = (obj) => {
    console.log("obj:", obj)
    return console.log("1")
}

const season = () => {
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

                    <select id="weather" onChange={handleChange}>
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

export default season;