// @ts-ignore
import styled from "styled-components";
import {useState, useCallback} from "react";
import axios from "axios";

const Text = styled.input`
    display:block; width:100%; height:44px; margin-top:12px; padding:9px 11px; font-size:15px; border: 1px solid #DDDEE4; box-sizing:border-box;
    -moz-appearance:none;-webkit-appearance:none;-o-appearance:none;border-radius:0;
    &:nth-child(2) {margin-top:0;}
    &:focus {outline: none;}
    &::placeholder {color: #222;}
`;

const FileWrap = styled.div`
    & {position:relative; height:42px; margin-top:12px; border:1px solid #dddee4;}
    input {z-index:1; position:absolute; left:-1px; top:-1px; width:109px; height:44px; opacity:0;}
    .btn {position:relative; left:0px; top:-18px; width:100px; height:41px; background-color:#99c6f5; text-align:center;float: right;}
    .btn span {position:relative; top:11px; display:inline-block; color:#fff; font-size:15px; font-weight:700; line-height:21px; letter-spacing:-0.15px; vertical-align:0;}
    .text {position:relative; top:11px; overflow:hidden; color:#222; margin:0 10px; font-size:14px;vertical-align:0;
        text-overflow:ellipsis; white-space:nowrap;
    }
`;

const Contents = styled.textarea`
    display:block; width: 100%; height:134px; margin-top:12px; padding:9px 11px; font-size:15px; border: 1px solid #DDDEE4; box-sizing:border-box;
    -moz-appearance:none;-webkit-appearance:none;-o-appearance:none;border-radius:0;
    &:focus {outline: none;}
    &::placeholder {color: #222;}
`;

const Submit = styled.button`
    position:relative; width:100%; height:52px; margin-top:25px; background-color:#99c6f5; text-align:center;border: 0px;
`;

const SubmitText = styled.span`
    font-size: 15px;color: #fff;
`;

const ConsentDescription = styled.span`
    color: #666666;font-size: 13px;line-height: 19px;letter-spacing: -0.65px;margin: 0px 0;display:block;
    p {margin-top:6px;}
    p:first-child {margin-top:10px;}
    &.description {color: #99c6f5;font-size: 12px;line-height: 13px;letter-spacing: -0.12px;padding: 0; margin-top:5px;}
`;

const Close = styled.button`
    width: 41px; height: 42px; background:url('/assets/images/common/delete.png') center center / cover no-repeat;display: inline-block;float:right;right: 0px;margin-top: -43px;margin-right: 1px; z-index: 5; position:relative;
`;

const index = () => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [attach, setAttach] = useState<string>('');
    const [attachFilename, setAttachFilename] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const [isName, setIsName] = useState<boolean>(false);
    const [isKor, setIsKor] = useState<boolean>(false);
    const [isPhone, setIsPhone] = useState<boolean>(false);
    const [isEmail, setIsEmail] = useState<boolean>(false);
    const [isTitle, setIsTitle] = useState<boolean>(false);
    const [isAttach, setIsAttach] = useState<boolean>(false);
    const [isContent, setIsContent] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isNewsChecked, setNewsChecked] = useState<boolean>(false);

    const checkKor = (str: string) => {
        const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
        return regExp.test(str);
    }

    const checkEng = (str: string) => {
        const regExp = /[a-zA-Z]/;
        return regExp.test(str);
    }

    const checkSpc = (str: string) => {
        const regExp = /[~!@#$%^&*()_+|<>?:{}]/;
        return regExp.test(str);
    }

    // @ts-ignore
    const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("name==>", e.target.value);

        if(e.target.value.length === 0){
            setIsName(false);
        }

        if(checkKor(e.target.value) && !checkEng(e.target.value) && !checkSpc(e.target.value) && (e.target.value.length > 1 && e.target.value.length <= 50)){
            setIsKor(true);
            setIsName(true);
        }

        if(!checkKor(e.target.value) || checkEng(e.target.value) || checkSpc(e.target.value) && (e.target.value.length > 1 && e.target.value.length <= 50)){
            setIsKor(false);
            setIsName(true);
        }

        if(checkKor(e.target.value) && (e.target.value.length > 1 && e.target.value.length <= 50)){
            setName(e.target.value);
            setIsName(true);
        } else if(e.target.value.length <= 1 && e.target.value.length > 50 || e.target.value.length === 0){
            setIsName(false);
        }
    }, [])

    // @ts-ignore
    const onChangePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if (regex.test(e.target.value) && e.target.value.length === 10 || e.target.value.length === 11) {
            setPhone(e.target.value);
            setIsPhone(true);
        } else {
            setIsPhone(false);
        }
    }, [])

    // @ts-ignore
    const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        if (regex.test(e.target.value)) {
            setEmail(e.target.value);
            setIsEmail(true);
        } else {
            setEmail(e.target.value);
            setIsEmail(false);
        }
    }, [])

    // @ts-ignore
    const onChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length > 1 && e.target.value.length <= 100){
            setTitle(e.target.value);
            setIsTitle(true);
        } else {
            setIsTitle(false);
        }
    }, [])

    // @ts-ignore
    const onChangeAttach = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const maxSize = 300 * 1024 * 1024;

        // @ts-ignore
        if(e.target.value.length > 1){
            // @ts-ignore
            if(e.target.files[0].size > maxSize){
                alert('파일 용량을 초과 하였습니다.')
                // @ts-ignore
                document.getElementById('attachFile').value = "";
                setIsAttach(false);
            }else{
                // @ts-ignore
                setAttach(e.target.files[0]);
                setIsAttach(true);

                // 파일이름
                const iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
                if(iOS) {
                    // @ts-ignore
                    setAttachFilename("1개의 비디오");
                } else {
                    // @ts-ignore
                    setAttachFilename(e.target.files[0].name);
                }
            }
        } else {
            setIsAttach(false);
        }
    }, [])

    // @ts-ignore
    const onChangeContent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length > 1 && e.target.value.length <= 1000){
            setContent(e.target.value);
            setIsContent(true);
        } else {
            setIsContent(false);
        }
    }, [])

    // @ts-ignore
    const onReset =  useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if(window.confirm("파일을 삭제 하시겠습니까?")){
            // @ts-ignore
            document.getElementById('attachFile').value = "";
            // @ts-ignore
            setIsAttach('');
            setAttachFilename('');
        }else{
            return false;
        }
    }, [])

    const onSubmit = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('file', attach);

        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };

        if(!isName) return alert("이름을 입력해주세요.");
        if(!isKor) return alert("이름을 한글로 입력해 주세요.");
        if(!isPhone) return alert("휴대폰 번호를 입력해주세요.");
        if(email.length > 0 && !isEmail){
            return alert("이메일 양식에 맞게 입력해주세요.");
        }
        if(!isTitle) return alert("제목을 입력해주세요.");
        if(!isContent) return alert("내용을 입력해주세요.");
        if(!isChecked) return alert("회원 가입 동의 여부에 동의해주세요.");
        if(!isNewsChecked) return alert("체크 박스2에 동의해주세요.");

       // const API_URL = process.env.baseAPI;

        if(isName && isPhone && isTitle && isContent && isChecked && isNewsChecked){
            try {
                await axios
                    .post(`/apiTest`, formData, config)
                    .then((res) => {
                        if (res.data.result === "success") {
                            location.href = "/submit";
                        }
                    })
            } catch (err) {
                console.error(err)
            }
        }
    }

    const changeHandler = (checked: boolean, id: string) => {
        if (checked && id === "check") {
            setIsChecked(true);
        } else if (!checked && id === "check") {
            setIsChecked(false);
        }
    }

    return(
        <>
            <h1>게시글 등록</h1>
            <Text type="text" name="name" onChange={onChangeName} placeholder={"*이름"}/>
            {/*<Text type="number" name="phone" onChange={onChangePhone} placeholder={"*휴대폰"}/>*/}
            {/*<Text type="text" name="email" onChange={onChangeEmail} placeholder={"이메일"}/>*/}
            <Text type="text" name="title" onChange={onChangeTitle} placeholder={"*제목"}/>
            {/*@ts-ignore*/}
            <Contents type="text" name="content" onChange={onChangeContent} placeholder={"*내용"}/>
            {/*@ts-ignore*/}
            <FileWrap>
                <Text type="file" id="attachFile" name="attachFile" onChange={onChangeAttach} accept="video/*" placeholder={"첨부파일"} />
                <div className="text">{attachFilename === '' ? '파일을 선택해주세요' : attachFilename}</div>
                <div className="btn"><span>파일선택</span></div>
            </FileWrap>
            {/*/!*@ts-ignore*!/*/}
            {(attach !== '' && isAttach)|| attachFilename !== '' ? <Close onClick={onReset}/>: <></>}
            <ConsentDescription className={"description"}>파일은 최대 1개, 300MB 까지 가능 합니다.</ConsentDescription><br/>
            {/*<input style={{display: 'inline-block'}} className={"input-txt"} type="checkbox" id="check" onChange={e => {changeHandler(e.currentTarget.checked, 'check')}}/>*/}
            {/*<p style={{display: 'inline-block'}}>회원 가입 동의</p>*/}
            {/*@ts-ignore*/}
            <Submit onClick={() => onSubmit()}>
                <SubmitText>등록</SubmitText>
            </Submit>
        </>
    )
}

export default index;