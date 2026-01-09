import React from "react";
import NormalExample from "../components/Normal";
import MemoExample from "../components/Memo";
import MemoExample2 from "../components/Memo2";
import EffectExample from "../components/Effect";
import EffectExample2 from "../components/Effect2";

import { useMemo, useState } from "react";

function Memo() {
  const [a, setA] = useState(0);
  const isEven = useMemo(() => {
    return a % 2 === 0;
  }, [a]);
  // 第一個參數是先去做true or false的計算，第二個參數是當a改變會重新判定isEven
  return (
    <div>
      <h1>useMemo</h1>
      <h3>寫法</h3>
      <h3>作用</h3>
      {/* <NormalExample /> */}
      <MemoExample />
      <h3>Referential Equality 與 React</h3>
      <h3>注意：</h3>
      <ul>
        <li>useMemo 代表的是將東西用 cache 存起來</li>
        <li>因為 cache 並不是非常穩定，所以不該把它用在絕不能重跑程式的場合</li>
      </ul>
      <h3>和 useEffect 的差異</h3>
      {/* <MemoExample />
      <EffectExample /> */}
      <MemoExample2 />
      <EffectExample2 />
      <ul>
        <li>
          觸發時間： useEffect 只會在第一次渲染後被呼叫， useMemo
          則會在渲染中、元件 return state 前就觸發
        </li>
        <li>
          使用場合： 如果是要跟 State 值有關的、或是操控 DOM，應使用 useEffect ;
          如果是優化速度，則應使用 useMemo
        </li>
      </ul>
    </div>
  );
}

export default Memo;
