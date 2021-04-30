import React, { Component } from 'react';

class Panel extends Component {

    render() {
        return(
            <div className = 'panel-div'>
                {"This is panel (" + this.props.row + "," + this.props.col + ")"}
            </div>
        )
    }
}

export default Panel