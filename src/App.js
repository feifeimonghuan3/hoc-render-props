import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyText from './componets/MyText';
import MyTextRenderProps from './componets/MyTextRenderProps';
import ComponetsText from './componets/componetsText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyText //HOC组件
            style={{color: '#FFF'}}
            hoverStyle={{color: '#F00'}}
            title={'hello, Hoc'}
        />
        <MyTextRenderProps // renderprops组件
            style={{color: '#FFF'}}
            hoverStyle={{color: '#feff12'}}
            title={'hello, Hoc'}
        >
            {(props) => {
              return (
                  <ComponetsText {...props}></ComponetsText>
              )
            }}
        </MyTextRenderProps>
      </div>
    );
  }
}

export default App;
