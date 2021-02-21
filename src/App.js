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
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };
  // https://ko.reactjs.org/docs/react-component.html
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentDidMount(){
    console.log("component rendered- 컴포넌트가 처음 render 되었을 때 호출");
  }
  // return이 아닌 render 메소드를 사용해서 html을 리턴함
  // render는 refresh를 지원하지 않음. 따라서 setState를 사용해서 갱신해줘야함
  render(){
    console.log("render");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
  componentDidUpdate() {
    console.log("updating");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
}

export default App;
