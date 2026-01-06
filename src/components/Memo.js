import React from 'react';
import { useState } from 'react';
import Booking from "./Booking";

function Memo() {
  const [parentData, setParentData] = useState("父元件創立的資料");
  const change = (parameter) =>{
    setParentData(parameter)
  }
  return (
    <div>
      <h1>Props</h1>
      <h2>「單向傳遞」父元件到子元件的資料</h2>
      <h3>實際撰寫</h3>
      <p>父元件： {parentData}</p>
      <Booking data={parentData} setParentData={setParentData} change={change}/> 
      {/* 子元件={父元件} */}
      <h3>注意</h3>
      <ul>
        <li>單向傳遞原則</li>
        <li>和 State 的差別</li>
         <table>
          <thead>
            <tr>
              <td></td>
              <td>State</td>
              <td>Props</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>控制</td>
              <td>自己本身</td>
              <td>讓父元件來控制自己</td>
            </tr>
            <tr>
              <td>改變</td>
              <td>可被改變</td>
              <td>唯讀、不可改變</td>
            </tr>
          </tbody>
        </table> 
      </ul>
    </div>
  )
}

export default Memo
