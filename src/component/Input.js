import { useState, useRef } from "react";
import "./Input.css";

const Input = ({ select, addAccordion }) => {
    const [main, setMain] = useState("");
    const [sub, setSub] = useState("");
    const mainRef = useRef();
    const subRef = useRef();
    
    const onChangeMain = (e) => {
        setMain(e.target.value);
    };

    const onChangeSub = (e) => {
        setSub(e.target.value);
    };

    const onClickSubmit = () => {
        // trim()을 이용해 띄어쓰기만 입력하는 것을 방지지
        if ( main.trim().length === 0 ) {
            mainRef.current.focus();
        } else if ( sub.trim().length === 0 ) {
            subRef.current.focus();
        } else {
            // 양 쪽 공백을 추가 할 경우 공백을 모두 지움움
            addAccordion(main.trim(), sub.trim());
            setMain("");
            setSub("");
        }
    }

    const onClickSelect = (e) => {
        setMain(e.target.value);
    }

    return(
        <div className="Input">
            <select onClick={onClickSelect}>
                {select.map(e => (
                    Object.entries(e).map(([v,], idx) => {
                        return <option value={v} key={idx} >{v}</option>
                    })
                ))}
            </select>
            <div className="input-wrap">
                <span>주제 : </span> 
                <input value={main} onChange={onChangeMain} ref={mainRef}/>
            </div>
            <div className="input-wrap">
                <span>내용 : </span>
                <input value={sub} onChange={onChangeSub} ref={subRef}/>
            </div>
            <button onClick={onClickSubmit}>추가</button>
        </div>
    )
};

export default Input;