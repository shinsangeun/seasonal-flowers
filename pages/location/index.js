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

const Menu5 = styled.div`
    height: 100px;width: 80%;color: red;border: 1px solid blue;font-size: 20px;position: absolute;margin: 20px;
`;

const Menu6 = styled.div`
    height: 50px;width: 50%;color: red;font-size: 20px;border: 1px solid blue;position: relative;margin: 10px;left: 20px;
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

const handleLink = (event, type) => {
    event.stopPropagation();
    if(type === "blog"){
       window.location.href = "https://shinsangeun.github.io/";
    }else{
       window.location.href = "https://github.com/shinsangeun";
    }
}

const location = () => {
    return(
        <>
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
            <Menu5 onClick={(event) => handleLink(event, "blog")}>
                블로그 링크 이동!
                <Menu6 onClick={(event) => handleLink( event,"github")}>
                    github 링크 이동!
                </Menu6>
            </Menu5>
        </>
    )
}

export default location;