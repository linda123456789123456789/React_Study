import React from "react";
import { ButtonStyle, PrimaryButtonStyle } from "../ButtonStyle"; // 引入 ButtonStyle.js 裡的樣式元件
function Memo() {
  return (
    <div>
      <h1>Styled Components 與 props 、 extend 、共用元件</h1>
      <h3>props ：設定會不斷用到的主題色等</h3>
      <ButtonStyle>example 1</ButtonStyle>
      <ButtonStyle primary>example 2</ButtonStyle>
      <ButtonStyle secondary>example 3</ButtonStyle>
      <h3>extend ：套用他人已寫好的樣式，再客製化</h3>
      <PrimaryButtonStyle>example</PrimaryButtonStyle>
    </div>
  );
}

export default Memo;
