import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyText from './componets/MyText';
import MyTextRenderProps from './componets/MyTextRenderProps';
import ComponetsText from './componets/componetsText';
import MyAnimation from './componets/MyAnimation';


class AnimationBox extends Component {
  render() {
    const {childrenRender, ...rest} = this.props
    return <div {...rest}>{childrenRender}</div>;
  }
}
const Ani = MyAnimation(AnimationBox);

class App extends Component {

  // AnimationRender = () => {
  //   return (
  //     <div style={{color: '#FFF',width: 50,backgroundColor: '#FFF'}}>
  //       123
  //     </div>
  //   )
  // }

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
        <MyTextRenderProps // renderprops组件 鼠标移入的效果
          style={{color: '#FFF'}}
          hoverStyle={{color: '#0F0'}}
          title={'hello, Hoc'}
        >
          {(props) => {
              const { title, ...rest } = props;
              return (
                  <div {...rest}>{title}</div>
              )
          }}
        </MyTextRenderProps>
        <MyTextRenderProps
          style={{color: '#FFF'}}
          hoverStyle={{color: '#ff29ef'}}
          title='鼠标移入啊'
        >
          {props => {
            const {title, ...rest} = props;
            return (
              <div {...rest}>
                <div>{title}</div>
                <div>{title}</div>
                <div>{title}</div>
                <div>{title}</div>
              </div>
            )
          }}
        </MyTextRenderProps>
        {/*<Ani*/}
          {/*changeStyle={{*/}
            {/*top: [200, 0],*/}
            {/*opacity: [0, 1],*/}
          {/*}}*/}
          {/*style={{color: '#F00',backgroundColor: '#FFF',}}*/}
          {/*childrenRender={() => {*/}
            {/*return (*/}
              {/*<button style={{}}>123</button>*/}
            {/*)*/}
          {/*}}*/}
        {/*>*/}
        {/*</Ani>*/}
        <Ani
          changeStyle={{
            top: [200, 0],
            opacity: [0, 1],
          }}
          style={{backgroundColor: '#ffe837'}}
          childrenRender={() => {
            return (
              <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-around'}}>
                <div style={{width: 100,height: 100,backgroundColor: '#ff1b78'}}></div>
                <div style={{width: 100,height: 100,backgroundColor: '#ff1b78'}}></div>
                <div style={{width: 100,height: 100,backgroundColor: '#ff1b78'}}></div>
              </div>
            )
          }}
        />
        {/*<Ani*/}
          {/*changeStyle={{*/}
            {/*left: [200, 0],*/}
            {/*opacity: [0, 1],*/}
          {/*}}*/}
          {/*style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}*/}
          {/*childrenRender={() => {*/}
            {/*return (*/}
              {/*<div style={{backgroundColor: '#c47b47',width: 30, height:30, marginTop: 20,}}></div>*/}
            {/*)*/}
          {/*}}*/}
        {/*/>*/}
      </div>
    );
  }
}

export default App;
