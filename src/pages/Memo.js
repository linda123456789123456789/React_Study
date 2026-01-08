import React from "react";
import { Button } from "react-bootstrap";
import styled, { css } from "styled-components";

function Memo() {
  return (
    <div>
      <h1>在 React 中如何使用 Bootstrap</h1>
      <h3>介紹 Bootstrap</h3>
      <h3>安裝</h3>
      <a href="https://react-bootstrap.github.io/getting-started/introduction/">
        React Bootstrap 官網
      </a>
      <p>npm install react-bootstrap bootstrap</p>
      <h3>實際撰寫</h3>
      {/* 引入 */}
      <Button>test1</Button>
      {/* 客製化 variant & extend */}
      <Button variant="secondary">test2</Button>
      {/* variant 是 react-bootstrap 的 Button 元件提供的內建 prop，用來指定按鈕的樣式風格 */}
      <CustomButton>test2</CustomButton>
      {/* global styles */}
      <a href="https://react-bootstrap.github.io/getting-started/introduction/">
        {" "}
        test link
      </a>
      {/* hover */}
      <CustomButton>test2</CustomButton>
      {/* props & theme */}
      <div>
        <CustomButton2 theme={theme}>test2</CustomButton2>
      </div>
    </div>
  );
}
const theme = {
  primary: "black",
  secondary: "red",
};

const CustomButton = styled(Button)`
  font-weight: bold;
  font-size: 32px;
  &:hover {
    background: #000 !important; // react-bootstrap 的按鈕 hover 會有預設樣式，需要用 !important 覆蓋
  }
`;
const CustomButton2 = styled(Button)`
  background: ${(props) => props.theme.secondary};
`; //可以透過extend更改boostrap按鈕顏色
export default Memo;
