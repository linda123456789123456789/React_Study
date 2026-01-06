import React from 'react'
import OptionA from './OptionA'
import OptionB from './OptionB'

function JsxExample() {
  let option = 'A'
  function test1(){
    console.log('秀出來')
  }
  function test2(e){
    // e可以不寫
    console.log(e)
    // 如果console.log有指定數字，當click沒有指定時，就會自動顯示console裡面的初始值
  }
  return (
    <div>
      <h1>JSX</h1>
      <h2>JSX 是一種 JS 語法擴充、語法糖，用比較簡約的方式讓 JS 操控 DOM</h2>
      <h3>好處</h3>
      <ul>
        <li>寫起來比較簡單</li>
        <li>可以實現聲明式寫法</li>
        {option==='A'? <OptionA/>: <OptionB/>}
        <li>不需要像 Vue 那樣使用額外的模板語言</li>
      </ul>
      <h3>注意</h3>
      <ul>
        <li>最外層只能包一個根節點</li>
        <li>不是 class 而是 className</li>
        <p className='text-red'>一段文字</p>
        <li>撰寫 style 行內樣式</li> 
        <p style={styleObj}>一段文字</p>
        <li>事件處理</li>
        <button onClick={test1}>按鈕 1</button>
        <button onClick={()=>test2('2')}>按鈕 2</button>
        <button onClick={()=>console.log('秀出來')}>按鈕 3</button>
        <li>樣式可以搭配 ES6 擴展</li>
        <p style={{...styleObj, color: 'blue'}}>一段文字</p>
        <li>寫 JS 要用大括弧包覆</li>
        {option==='A'? <OptionA/>: <OptionB/>}
      </ul>
    </div>
  )
}
const styleObj = {color: 'red', fontSize: '1.2rem', lineHeight: 1.5}
export default JsxExample
