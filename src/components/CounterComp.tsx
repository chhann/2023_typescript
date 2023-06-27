import React, { useState } from 'react'

// props의 값을 사용하기 위해서 interface 작성
interface CounterProps {
    startNumber : number;
    name? : string;
}

// 매개변수로 받아오는 props 타입지정
export default function CounterComp(props:CounterProps) {
    const [count, setCount] = useState<number>(props.startNumber);

    const data = [
      { id: "id", text: "text" },
      { id: 1, text: "one" },
      { id: 2, text: "two" },
    ];

    
    return (
      <div>
        <h3>Counter 컴포넌트</h3>
        <p>props 값으로 전달된 처음 값 : { props.startNumber }</p>
        <p>props값을 받아와 값을 수정하는 state 값 : { count }</p>

        <label>수정할 숫자</label>
        <input
            type = "number"
            min = { 0 }
            onChange = { (e) => setCount(Number(e.target.value)) }
        />
        <hr />

        <ul>
          { data.map((item) => (
            <li key = { item.id }>
              { item.id } : { item.text }
            </li>
          )) }
        </ul>
      </div>
    )
}