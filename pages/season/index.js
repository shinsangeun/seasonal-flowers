import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'
import Link from 'next/link'
import styled from 'styled-components'
import locationOptions from '../../src/components/data/locationOptions'

const SearchBtn = styled.button`
    border: none;
    border-radius: 4px;
    height: 25px;
    font-size: 18px;
    background-color: #74b9ff;
    color: white;
    :hover{
        background-color: #99c6f5;
    }
`;

const handleChange = (obj) => {
    console.log("obj:", obj.target.value)
}

const handleClick = (obj) => {
    console.log("111:", obj.target);
    <Link to={obj.target.value} />
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
                    <h2 className={styles.title}>🌹 여행지 추천</h2>

                    <h2>⛳️ 지역 선택</h2>
                    <div>
                        <p>원하시는 지역을 선택해 주세요! &nbsp;&nbsp;
                            <select id="location" onChange={handleChange}>
                                {locationOptions.map((data, index) => (
                                    <option id={locationOptions[index].id} key={locationOptions[index].id}>
                                        {locationOptions[index].value}
                                    </option>
                                ))}
                            </select>
                        </p>
                    </div>
                    <SearchBtn><Link href="/location">검색</Link></SearchBtn>
                </main>
            </div>
        </>
    )
}

export default season;