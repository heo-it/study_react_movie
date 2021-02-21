import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Potato from './Potato';

ReactDOM.render(
  // React.StrictModesms 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구
  // 주석과 같이 사용 가능한데 뭘까
  // <React.StrictMode>
    // <App /><Potato/>,
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
