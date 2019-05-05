import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';

// class App extends Component {
//   render() {
//     return <div>{this.props.children}</div>;
//   }
// }

const App = (props) => {
  return <div>{props.children}</div>;
}

export default App;
