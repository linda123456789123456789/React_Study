import React from 'react'
import Booking from "./Booking";
import Booking2 from "./Booking2";
import Example from './Example';

function Memo() {
  return (
    <div>
      <h1>State</h1>
      <h2>資料初始化與改變資料</h2>
      <h3>實際撰寫</h3>
      <Example/>
      <Booking/>
      <Booking2/>
      <h3>注意</h3>
      <ul>
        <li>可以用 useState 裡帶的參數來初始化</li>
        <li>只能用 set 開頭的函式命名 setState ，他被呼叫的時候會負責更改 State 值</li>
        <li>State 被改變時，會觸發重新渲染</li>
        <li>State 是單獨存在於元件裡的，在其他元件抓不到</li>
      </ul>
    </div>
  )
}

export default Memo
