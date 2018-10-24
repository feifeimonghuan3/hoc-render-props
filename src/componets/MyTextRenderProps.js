import React from 'react';

class MyTextRenderProps extends React.Component {
    static defaultProps = {
        hoverStyle: {},
    };
    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
        };
    }

    handleHoverState = () => {
        this.setState({
            isHover: true,
        })
    }

    handleHoverEnd = () => {
        this.setState({
            isHover: false,
        })
    }

    render() {
        const props = {
            style: this.state.isHover ? this.props.hoverStyle : this.props.style,
            onMouseEnter: this.handleHoverState,
            onMouseLeave: this.handleHoverEnd,
            title: this.props.title,
        }
        return this.props.children(props)
    }
}

export default MyTextRenderProps;
