import React from 'react';
import { Motion, spring, presets } from 'react-motion';
import '../styles/MyAnimation.css';

export default function(Com) {
  return class extends React.PureComponent {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     opacity: 0,
    //   };
    // };
    state = {
      height: 0,
    }
    componentDidMount() {
      this.setState({
        height: 300,
      })
    }

    render() {
      let defaultStyle = {};
      let style = {};
      for(let key in this.props.changeStyle) {
        defaultStyle[key] = this.props.changeStyle[key][0];
        style[key] = spring(this.props.changeStyle[key][1], key === 'opacity' ? {stiffness: 60, damping: 30} : {});
      }
      console.log(defaultStyle);
      console.log(style);
      return (
        <div >
          <Motion
            defaultStyle={defaultStyle}
            style={style}>
            {interpolatingStyle => {
              const newStyle = Object.assign({}, this.props.style, {position: 'relative'})
              return (
                <Com style={Object.assign({}, interpolatingStyle, newStyle)} childrenRender={this.props.childrenRender()}/>
              )
            }}
          </Motion>
        </div>
      )
    }
  }
}
