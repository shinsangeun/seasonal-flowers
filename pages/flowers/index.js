import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'
import styled from 'styled-components'

const SearchBtn = styled.button`
    margin: 10px;border: none;border-radius: 4px;height: 25px;font-size: 18px;background-color: #74b9ff;color: white;
    :hover{background-color: #99c6f5;}
`;

const options = [
    {id: "", value: "ππ» μ ν"},
    {id: "cherryBlossom", value: "πΈ λ²κ½"},
    {id: "magnolia", value: "λͺ©λ ¨"},
    {id: "forsythia", value: "πΌ κ°λλ¦¬"},
    {id: "rhododendron", value: "πΊ μ§λ¬λ"},
    {id: "tulipa", value: "π· ν€λ¦½"},
    {id: "rose", value: "πΉ μ₯λ―Έ"},
    {id: "sunflower", value: "π» ν΄λ°λΌκΈ°"}
]

const handleChange = (obj) => {
    console.log("obj:", obj)
    return console.log("1")
}

const flowers = () => {
    return(
        <>
            <title className="App-title">π κ³μ λ³ κ½ κ°νμκΈ°: κ½ μ ν</title>
            <button className={seasonStyles.button}>
                <a href="/">π  Home</a>
            </button>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>π κ½ μ ν</h1>
                    <p className={styles.description}>
                        μνμλ κ½μ μ νν΄ μ£ΌμΈμ!
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
                    <SearchBtn>κ²μ</SearchBtn>
                </main>
            </div>
        </>
    )
}