import React, { Component } from 'react'
export class Booking2 extends Component {
  state = {
    data: 'data'
  }
  handleClick(){
    this.setState({
      ...this.state,
      data: 'new data'
    })
  }
  // 只有第一次渲染才會執行
  componentDidMount(){
    console.log('first render')
  }
  // 每次重新渲染都會執行
  componentDidUpdate(){
    console.log('re render')
  }
  // 元件被移除之前會執行
  componentWillUnmount(){
    console.log('unmount')
  }
  render() {
    return (
      <div>
        <p>開啟 console 面板</p>
        <button onClick={()=>this.handleClick()}>click</button>
      </div>
    )
  }
}

export default Booking2
