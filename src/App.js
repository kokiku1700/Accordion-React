import './App.css';
import AccordionList from './component/AccordionList';
import Input from './component/Input';
import { useState } from 'react';

function App() {
  const [select, setSelect] = useState([
    {"과일": ["사과", "참외"]}, {"채소": ["가지"]}, {"고기": ["돼지고기", "양고기", "소고기"]}
  ]);

  const addAccordion = ( main, sub ) => {
    let check = false;

    select.map((e, i) => (
      // 배열안 객체를 순회하기 위한 방법
      // Object.entries()를 사용 
      // map()안 변수를 키와 값을 나눠 받으려면 배열 형태로 받아야 함
      // 구조분해할당을 하지 않으면 원하는 값을 얻을 수 없음음
      Object.entries(e).map(([k, v]) => {
        if ( k === main ) {
          check = true;
          // 객체 안 배열을 수정하기 위해 복사본을 하나 만든다.
          let items = [...select];
          // 현재 인덱스에 있는 현재 키의 값을 수정
          items[i][k] = [...v, sub];
          // 수정본을 다시 추가
          return setSelect(items);
        } else {
          return true;
        }
      })
    ))

    if ( check === false ) {
      //객체 키 값에 변수를 넣기 위해선 대괄호로 감싸면 된다.
      setSelect([...select, {[main]: [sub]}])
    }
  };

  return (
    <div className="App">
      <Input select={select} addAccordion={addAccordion} />
      <AccordionList select={select} />
    </div>
  );
}

export default App;
