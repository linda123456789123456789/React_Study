import { useState } from 'react';

const Booking = () => {
  const [num, setNum] = useState(0)
  const handleNum = (type) =>{
    if(type=== 'minus'){
      // setNum(num-1)
      setNum((pre)=>pre-1) //同一個事件內可能連續更新，這種寫法比較保險
    }else{
      // setNum(num+1)
      setNum((pre)=>pre+1) //同一個事件內可能連續更新，這種寫法比較保險
    }
  }
  return (
    <div>
      <p>創始店訂位人數</p>
      <button onClick={()=>handleNum('minus')}>-</button>
        {num}
      <button onClick={()=>handleNum('plus')}>+</button>
    </div>
  );
};
export default Booking;
