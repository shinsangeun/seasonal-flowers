import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'
import {Link} from 'next/link'

const locationOptions = [
    {id: "", value: "👉🏻 선택"},
    {id: "seoul", value: "서울"},
    {id: "gyunggi", value: "경기도"},
    {id: "gyunggi", value: "강원도"},
    {id: "incheon", value: "인천"},
    {id: "incheon", value: "부산"},
    {id: "jeju", value: "제주"}
]

const handleChange = (obj) => {
    console.log("obj:", obj.target.value)
}

const handleClick = (obj) => {
    console.log("111:", obj.target);
    <Link to={obj.target.value} />
}

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const season = () => {
    return(
        <>
            <title className="App-title">🌸 계절별 꽃 개화시기: 계절 선택</title>
            <button className={seasonStyles.button}>
                <a href="/">🏠 Home</a>
            </button>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h2 className={styles.title}>🌹 여행지 추천</h2>
                    <p className={styles.description}>
                        🌷 선택하신 조건을 기반으로 추천 드리는 명소 입니다.
                    </p>

                    <h2>⛳️ 지역 선택</h2>
                    <p>원하시는 지역을 선택해 주세요!</p>
                    <select id="location" onChange={handleChange}>
                        {locationOptions.map((data, index) => (
                            <option id={locationOptions[index].id} key={locationOptions[index].id}>
                                {locationOptions[index].value}
                            </option>
                        ))}
                    </select> <button>검색</button>

                    <table>
                        <thead>
                            <th>
                                장소
                            </th>
                        </thead>
                        <tbody>
                            <td>
                                경기도 용인
                            </td>
                        </tbody>
                    </table>
                </main>
            </div>
        </>
    )
}

export default season;