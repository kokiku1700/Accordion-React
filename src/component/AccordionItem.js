import "./AccordionItem.css";

const AccordionItem = ({ sub }) => {

    return(
        <div className="AccordionItem">
            {sub.map(e => (
                <p className="sub">{e}</p>
            ))}
        </div>
    )
};

export default AccordionItem;