import { useState, useEffect } from "react";

const Booking = () => {
  const [num, setNum] = useState(0);
  const handleNum = (type) => {
    if (type === "minus") {
      setNum(num - 1);
      console.log("set:", num); // 這行會顯示更新"前"的值
    } else {
      setNum(num + 1);
    }
  };
  // useEffect(() => { , [] });
  useEffect(() => {
    console.log("useEffect:", num); // 這行會顯示更新"後"的值
  }, [num]);
  useEffect(() => {
    console.log("first render");
    return () => {
      console.log("unmount");
    };
  }, []);
  return (
    <div>
      <p>創始店訂位人數</p>
      <button onClick={() => handleNum("minus")}>-</button>
      {num}
      <button onClick={() => handleNum("plus")}>+</button>
    </div>
  );
};
export default Booking;
