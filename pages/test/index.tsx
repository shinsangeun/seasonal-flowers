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
        const regExp = /[???-??????-??????-???]/g;
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
                alert('?????? ????????? ?????? ???????????????.')
                // @ts-ignore
                document.getElementById('attachFile').value = "";
                setIsAttach(false);
            }else{
                // @ts-ignore
                setAttach(e.target.files[0]);
                setIsAttach(true);

                // ????????????
                const iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
                if(iOS) {
                    // @ts-ignore
                    setAttachFilename("1?????? ?????????");
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
        if(window.confirm("????????? ?????? ???????????????????")){
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

        if(!isName) return alert("????????? ??????????????????.");
        if(!isKor) return alert("????????? ????????? ????????? ?????????.");
        if(!isPhone) return alert("????????? ????????? ??????????????????.");
        if(email.length > 0 && !isEmail){
            return alert("????????? ????????? ?????? ??????????????????.");
        }
        if(!isTitle) return alert("????????? ??????????????????.");
        if(!isContent) return alert("????????? ??????????????????.");
        if(!isChecked) return alert("?????? ?????? ?????? ????????? ??????????????????.");
        if(!isNewsChecked) return alert("?????? ??????2??? ??????????????????.");

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
            <h1>????????? ??????</h1>
            <Text type="text" name="name" onChange={onChangeName} placeholder={"*??????"}/>
            {/*<Text type="number" name="phone" onChange={onChangePhone} placeholder={"*?????????"}/>*/}
            {/*<Text type="text" name="email" onChange={onChangeEmail} placeholder={"?????????"}/>*/}
            <Text type="text" name="title" onChange={onChangeTitle} placeholder={"*??????"}/>
            {/*@ts-ignore*/}
            <Contents type="text" name="content" onChange={onChangeContent} placeholder={"*??????"}/>
            {/*@ts-ignore*/}
            <FileWrap>
                <Text type="file" id="attachFile" name="attachFile" onChange={onChangeAttach} accept="video/*" placeholder={"????????????"} />
                <div className="text">{attachFilename === '' ? '????????? ??????????????????' : attachFilename}</div>
                <div className="btn"><span>????????????</span></div>
            </FileWrap>
            {/*/!*@ts-ignore*!/*/}
            {(attach !== '' && isAttach)|| attachFilename !== '' ? <Close onClick={onReset}/>: <></>}
            <ConsentDescription className={"description"}>????????? ?????? 1???, 300MB ?????? ?????? ?????????.</ConsentDescription><br/>
            {/*<input style={{display: 'inline-block'}} className={"input-txt"} type="checkbox" id="check" onChange={e => {changeHandler(e.currentTarget.checked, 'check')}}/>*/}
            {/*<p style={{display: 'inline-block'}}>?????? ?????? ??????</p>*/}
            {/*@ts-ignore*/}
            <Submit onClick={() => onSubmit()}>
                <SubmitText>??????</SubmitText>
            </Submit>
        </>
    )
}

export default index;