import React from "react";
import styled from "styled-components";

function componentA() {
  return <Same>A</Same>; //使用 const Same 樣式元件
}
const Same = styled.div.attrs({ className: "sameA" })` // attrs 設定 className可以方便除錯，因為沒有寫的話會是亂數
  padding: 1rem;
  background-color: #3dd;
`;
export default componentA;
