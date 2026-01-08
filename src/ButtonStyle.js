import styled, { css } from "styled-components";
// Memo (父) → 傳 primary 給 ButtonStyle (子)
// ButtonStyle (子) → 收到 props.primary
// 內部檢查條件並套用對應樣式
// 渲染成帶樣式的 <button>
// 顯示在 Memo 的畫面中
const ButtonStyle = styled.button`
  background: transparent;
  border: 1px solid #369;
  color: #369;
  font-size: 10px;
  &:hover {
    background: #369;
    color: #fff;
  }
  ${(props) =>
    (props.primary &&
      css`
        background: transparent;
        border: 1px solid #456;
        color: #456;
        font-size: 10px;
        &:hover {
          background: #456;
          color: #fff;
        }
      `) ||
    (props.secondary &&
      css`
        background: transparent;
        border: 1px solid #789;
        color: #789;
        font-size: 10px;
        &:hover {
          background: #789;
          color: #fff;
        }
      `)}
`;
const PrimaryButtonStyle = styled(ButtonStyle)` // extend 用法 -> styled(已存在的樣式元件)
  // 會繼承 ButtonStyle 的所有樣式，再做修改
  font-weight: bold;
  font-size: 32px;
`;

export { ButtonStyle, PrimaryButtonStyle };
