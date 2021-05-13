import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'
import Select from 'react-select'
import {Link} from 'next/link'

const options = [
    {id: "", value: "👉🏻 선택"},
    {id: "spring", value: "🌸 봄 (3~5월)"},
    {id: "summer", value: "🍀️ 여름 (6~8월)"},
    {id: "autumn", value: "🍂 가을 (9~11월)"},
    {id: "winter", value: "☃️ 겨울 (12~2월)"}
]

const handleChange = (obj) => {
    console.log("obj:", obj.target.value)
}

const handleClick = (obj) => {
    console.log("111:", obj);

    return
}

const season = () => {
    return(
        <>
            <title className="App-title">🌸 계절별 꽃 개화시기: 계절 선택</title>
            <button className={seasonStyles.button}>
                <a href="/">🏠 Home</a>
            </button>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>☀️ 계절 선택</h1>
                    <p className={styles.description}>
                        원하시는 계절을 선택해 주세요!
                    </p>

                    <br />

                    <select id="weather" onChange={handleChange}>
                    {options.map((data, index) => (
                        <option id={options[index].id} key={options[index].id}>
                            {options[index].value}
                        </option>
                        ))}
                    </select>
                    <button onClick={(e) => handleClick(e)}>확인</button>
                </main>
            </div>
        </>
    )
}

export default season;