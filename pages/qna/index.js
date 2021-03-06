import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import seasonStyles from '../../styles/season.module.css'
import Link from 'next/link';
import styled from 'styled-components'

const SearchBtn = styled.button`
    border: none;
    border-radius: 4px;
    height: 45px;
    width: 300px;
    font-size: 18px;
    background-color: #FF7493;
    color: white;
    :hover{
        background-color: #99c6f5;
    }
`;

const qna = () => {
    return(
        <>
            <title className="App-title">π κ³μ λ³ κ½ κ°νμκΈ°: Q&A</title>
            <button className={seasonStyles.button}>
                <a href="/">π  Home</a>
            </button>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>π Q & A</h1>
                    <p className={styles.description}>
                        λ¬Έμ λ° κ±΄μμ¬ν­μ΄ μμΌμλ©΄,
                        {/*<code className={styles.code}>pages/index.js</code>*/}
                    </p>

                    <SearchBtn>
                        <Link href="https://github.com/shinsangeun/seasonal-flowers/issues/new" className={styles.title}>
                            ππ» μ΄κ³³μ λ¨κ²¨ μ£ΌμΈμ!
                        </Link>
                    </SearchBtn>
                </main>
            </div>
        </>
    )
}

export default qna;