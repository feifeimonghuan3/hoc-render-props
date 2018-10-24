import React from 'react';

class ComponetsText extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { title, ...rest } = this.props;
        return (
            <div {...rest}>
                {title}
            </div>
        )
    }
}

export default ComponetsText;
