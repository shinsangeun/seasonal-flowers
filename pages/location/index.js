import Head from 'next/head'
import Image from 'next/image'
// import styles from '../../styles/Home.module.css'
// import seasonStyles from '../../styles/season.module.css'
import styled from 'styled-components';
import locationOptions from '../../src/components/data/locationOptions'

const Menu1 = styled.div`
    display: inline;width: 450px;color: red;border: 1px solid blue;font-size: 20px;
`;

const Menu2 = styled.div`
    display: inline;height: 250px;width: 450px;color: red;font-size: 20px;border: 1px solid blue;
`

const Menu3 = styled.div`
    display: inline;height: 250px;width: 450px;color: red;font-size: 20px;border: 1px solid blue;
`
const Menu4 = styled.div`
    display: inline;height: 200px;width: 450px;color: red;font-size: 20px;border: 1px solid blue;
`

const handle = () => {
    if (navigator.share) {
        navigator.share({
            title: '기록하며 성장하기',
            text: 'Hello World',
            url: 'https://shinsangeun.github.io',
        });
    }else{
        alert("공유하기가 지원되지 않는 환경 입니다.")
    }
}

const location = () => {
    return(
        <div>
            <ul style={{display: 'inline-block'}}>
                <Menu1>Menu 1</Menu1>
                <Menu2>Menu 2</Menu2>
                <Menu3>Menu 3</Menu3>
                <Menu4>Menu 4</Menu4>
                <button onClick={handle}>
                    공유하기
                </button>
                <Image
                    src="https://image-component.nextjs.gallery/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmountains.cd25efdd.jpg&w=1920&q=75"
                    width="850px"
                    height="400px"
                    placeholder="blur"
                    blurDataURL="yellow"
                />
            </ul>
        </div>
    )
}

export default location;