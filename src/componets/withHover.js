import React from 'react'

export default function (Componets) {
    return class extends React.PureComponent {
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
            const { hoverStyle, style, ...rest } = this.props;
            return (
                <Componets
                    style={this.state.isHover ? this.props.hoverStyle : this.props.style}
                    onMouseEnter={this.handleHoverState}
                    onMouseLeave={this.handleHoverEnd}
                    {...rest}
                />
            )
        }
    }
}
