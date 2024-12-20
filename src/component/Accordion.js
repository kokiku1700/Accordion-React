import "./Accordion.css";
import plus from "../img/plus.png";
import minus from "../img/minus.png"
import AccordionItem from "./AccordionItem";
import { useState } from "react";

const Accordion = ({ title, sub }) => {
    const [show, setShow] = useState("none");
    const [img, setImg] = useState(plus);

    const onClickShow = () => {
        // 클릭시 서브메뉴가 없다면 보여줌. 
        // 서브메뉴가 보이는 상태에서 누르면 사라짐짐
        setShow(show === "none" ? "block" : "none");
        // 클릭시 메뉴 끝 이미지 변경
        setImg(img === plus ? minus : plus);
    }

    return (
        <div className="Accordion">
            <div className="mainWrap" onClick={onClickShow}>
                <div className="Wrap">
                    <p>{title}</p>
                    <p>({sub.length})</p>
                    <img src={img} alt="img" />
                </div>  
            </div>
            <div className="subWrap" style={{display: show}}>
                <AccordionItem sub={sub} />
            </div>
        </div>
    )
}

export default Accordion;