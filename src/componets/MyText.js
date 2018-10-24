import React from 'react';
import withHover from './withHover';

class MyText extends React.Component{
    render() {
        return (
            <div
                {...this.props} // 直接写自定义props会不执行 得在 自定义组件中写 props传了两层 App(<MyText/>) -> MyText.js -> withHover;
            >
                {this.props.title}
            </div>
        )
    }
}


export default withHover(MyText);
