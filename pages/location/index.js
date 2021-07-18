import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'
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
                        {locationOptions.map((data, index) => (
                            <option id={locationOptions[index].id} key={locationOptions[index].id}>
                                {locationOptions[index].value}
                            </option>
                        ))}
                    </select>
                </main>
            </div>
        </>
    )
}

export default location;