import React from 'react';
// https://www.npmjs.com/package/prop-types
import PropTypes from 'prop-types';

// Java 처럼 react component를 상속받아 사용하는 느낌
// states를 사용하기 위해 class component를 사용
class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  // return이 아닌 render 메소드를 사용해서 html을 리턴함
  render(){
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
