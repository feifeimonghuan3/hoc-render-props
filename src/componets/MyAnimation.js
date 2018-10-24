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
      console.log(this.props);
      return (
        <div >
          <Motion defaultStyle={{top: this.props.changeStyle.top[0], opacity: this.props.changeStyle.opacity[0],}}
                  style={{top: spring(this.props.changeStyle.top[1]), opacity: spring(this.props.changeStyle.opacity[1], {stiffness: 60, damping: 30})}}>
            {interpolatingStyle => {
              console.log(interpolatingStyle);
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
