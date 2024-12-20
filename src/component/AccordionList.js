import './AccordionList.css';
import Accordion from './Accordion';

const AccordionList = ({ select }) => {

    return (
        <div className='AccordionList'>
            {select.map(e => (
                Object.entries(e).map(([k, v], idx) => {
                    return <Accordion title={k} sub={v} key={idx} />
                })
            ))}
        </div>
    );
};

export default AccordionList;