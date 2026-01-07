import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);
  const handleSubmit = (e) => {
    e.preventDefault(); // 防止表單的預設行為（頁面重載）
    const data = {
      name,
      email,
      msg,
    };
    fetch("http://localhost:8000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("success");
      setName("");
      setEmail("");
      setMsg("");
    });
  };
  return (
    <div className="box" style={{ backgroundColor: "#e3c3d1" }}>
      <h2>聯繫我們</h2>
      {/* 用post方式送出，所以用ionSubmit */}
      {/* 觸發：點擊表單內的 <button> 或 按下 Enter 鍵 */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="contactName">姓名</label>
        <input
          type="text"
          id="contactName"
          onChange={(e) => setName(e.target.value)}
          // onChange是input的監聽器，當輸入框內容改變時觸發
          // e.target.value 取得輸入框的值，並更新到name這個state
          // 因為我要取input的值，所以用需要用參數e
        />
        <label htmlFor="contactEmail">Email</label>
        <input
          type="text"
          id="contactEmail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="contactMsg">意見</label>
        <textarea
          name="contactMsg"
          id="contactMsg"
          cols="30"
          rows="10"
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <div className="text-center">
          <button>送出</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
