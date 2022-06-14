import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'
import styled from 'styled-components'

const SearchBtn = styled.button`
    margin: 10px;border: none;border-radius: 4px;height: 25px;font-size: 18px;background-color: #74b9ff;color: white;
    :hover{background-color: #99c6f5;}
`;

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

const flowers = () => {
    return(
        <>
            <title className="App-title">💐 계절별 꽃 개화시기: 꽃 선택</title>
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
                    <SearchBtn>검색</SearchBtn>
                </main>
            </div>
        </>
    )
}