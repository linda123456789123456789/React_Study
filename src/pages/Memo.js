import React, { useState } from "react";

function Memo() {
  // const condition = true;
  const condition = false; // 這是寫死的條件
  const [show, setShow] = useState(false); // 可以更改事件true或false，像是透過button觸發onClick事件更改true或false
  const styles = { fontSize: "20px", color: "#333" };
  // style物件也能抽出單獨撰寫
  return (
    <div>
      <h1>引入 CSS ： inline-style</h1>
      <h2>使用與限制</h2>
      <div>
        <h3>實際撰寫</h3>
        <ul>
          {/* 外層{}是寫JS語法都要包， */}
          <li style={{ color: "#333" }}>外層包大括號＋大括號</li>
          {/* 原本css語法是font-size，但js改成fontSize的小駝峰寫法 */}
          <li style={{ fontSize: "20px" }}>屬性有 dash 的改小駝峰寫法</li>
          <li style={{ lineHeight: 1.8 }}>以數字或字串傳遞值</li>
          <li>搭配三元運算子判斷條件，再套用樣式</li>
          <p style={{ color: condition ? "#333" : "#600" }}>example 1</p>
          <p style={{ fontSize: "20px", color: condition ? "#333" : "#600" }}>
            example 2
          </p>
          <p style={condition ? { fontSize: "20px", color: "#333" } : {}}>
            example 3
          </p>
          <li style={styles}>樣式物件也能抽出單獨撰寫</li>
        </ul>
        <h3>注意</h3>
        <ul>
          <li>能不渲染就不渲染</li>
          {/* 比較差的做法：網頁需要做好幾件事（渲染、判斷、加樣式）才能達成目的 */}
          <p style={{ display: show ? "inline" : "none" }}>Hello</p>
          {/* 比較好的做法：不符合條件的話一開始就不渲染 */}
          {show && <p>Hi</p>}
          <li>無法實現 hover 、 media-query</li>
        </ul>
      </div>
    </div>
  );
}

export default Memo;
