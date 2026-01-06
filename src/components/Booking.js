import { useState } from 'react';
const Booking = (props) => {  
  // console.log(props.data); 只印出 data 這個單一屬性的值
  // console.log(props); 印出整個 props 物件，裡面包含父元件傳進來的所有屬性
  const [childData, setChildData] = useState(props.data)
  const change = () =>{
    setChildData('子元件改變的資料')
  //   props.setParentData('子元件改變的資料')
  }
  return (
    <div className='child'>
      <p>子元件： {props.data}</p>
      <p>子元件： {childData}</p>
      <button onClick={change}>click</button>
      {/* <button onClick={()=>props.change('子元件傳遞的參數')}>click</button> */}
    </div>
  );
};
export default Booking;
