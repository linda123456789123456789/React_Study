import React from "react";
import ComponentA from "../components/componentA";
import ComponentB from "../components/componentB";

function Memo() {
  // const condition = true;
  const condition = false;

  return (
    <div>
      <h1>引入 CSS ： 外部引入</h1>
      <h2>使用與限制</h2>
      <h3>實際撰寫</h3>
      <ul>
        <li>用習慣的方式撰寫 CSS</li>
        <li>屬性不用改小駝峰寫法</li>
        <li>可以實現 hover 、 media-query</li>
        <li className="example">在要用的元件 import ，並搭配 className 套用</li>
        <li>搭配三元運算子判斷條件，再套用樣式</li>
        <p className={condition ? "example" : ""}>example 1</p>
        <p className={`example2 ${condition ? "example" : ""}`}>example 2</p>
        {/* 需要在字串中插入變數或條件運算時，用反引號``搭配 ${} -> `${}` */}
      </ul>
      <h3>注意</h3>
      <ul>
        <li>CSS 不會只對應到引入的元件</li>
        <ComponentB />
        <ComponentA />
        {/* 引入到同一個畫面，重名的css會被覆蓋，優先使用被import的 */}
        <li>CSS 載入的順序依照被 import 的順序，不是元件使用的順序</li>
      </ul>
    </div>
  );
}

export default Memo;
