import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import styled from 'styled-components'
import locationOptions from '../src/components/data/locationOptions';
import weatherOptions from '../src/components/data/weatherOptions';
import flowerOptions from '../src/components/data/flowerOptions';

const SearchBtn = styled.button`
    border: none;
    border-radius: 4px;
    height: 40px;
    width: 200px;
    font-size: 20px;
    background-color: #FF7493;
    color: white;
    :hover{
        background-color: #99c6f5;
    }
`;

const QnaBtn = styled.button`
    border: none;
    border-radius: 4px;
    height: 25px;
    font-size: 15px;
    background-color: black;
    color: white;
    :hover{
        background-color: #FF7493;
    }
`;

const Title = styled.h2`
    text-align: center;
`;

const Box = styled.div`
    border: none;
    padding:10px;
    border-bottom: 3px solid #FFCAD5;
    height: 150px;
    width: 700px;
    float: left;
`;

const handleChange = (obj) => {
    console.log("obj:", obj.target.value)
}

const Home = () => {
    return (
        <>
            <Head>
                <title>계절별 꽃 개화 시기🌸</title>
            </Head>

            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>계절별 꽃 개화 시기🌸</h1>
                    <br/>

                    <Box>
                        <Title>☀️ 계절 선택</Title>
                        <p style={{'textAlign': 'center'}}>원하시는 계절을 선택해 주세요! &nbsp;&nbsp;
                            <select id="weather" onChange={handleChange}>
                                {weatherOptions.map((data, index) => (
                                    <option id={weatherOptions[index].id} key={weatherOptions[index].id}>
                                        {weatherOptions[index].value}
                                    </option>
                                ))}
                            </select>
                        </p>
                    </Box>

                    <Box>
                        <Title>⛳️ 지역 선택</Title>
                        <p style={{'textAlign': 'center'}}>원하시는 지역을 선택해 주세요! &nbsp;&nbsp;
                            <select id="location" onChange={handleChange}>
                                {locationOptions.map((data, index) => (
                                    <option id={locationOptions[index].id} key={locationOptions[index].id}>
                                        {locationOptions[index].value}
                                    </option>
                                ))}
                            </select>
                        </p>
                    </Box>

                    <Box>
                        <Title>💐 꽃 선택</Title>
                        <p style={{'textAlign': 'center'}}>원하시는 꽃을 선택해 주세요! &nbsp;&nbsp;
                            <select id="flowers" onChange={handleChange}>
                                {flowerOptions.map((data, index) => (
                                    <option id={flowerOptions[index].id} key={flowerOptions[index].id}>
                                        {flowerOptions[index].value}
                                    </option>
                                ))}
                            </select>
                        </p>
                    </Box>

                    <br/>
                    <div>
                        <SearchBtn><Link href="/season">검색 (Click!) </Link></SearchBtn> &nbsp;
                    </div>
                </main>
                <footer className={styles.footer}>
                    <a href="https://github.com/shinsangeun/seasonal-flowers">
                        Powered by&nbsp;<b>sangeun-shin 🙋🏻‍♀️</b> &nbsp;&nbsp;
                        <QnaBtn><Link href="/qna">문의 (Q&A) </Link></QnaBtn>
                    </a>
                </footer>
            </div>
        </>
    )
}

export default Home;
