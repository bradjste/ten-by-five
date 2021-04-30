import React, { Component } from 'react';

class Panel extends Component {

    render() {
        return(
            <div className = 'panel-div'>
                <img alt={"Panel (" + this.props.row + "," + this.props.col + ")"} src={'../../public/img/1st-Render-' + this.props.key + '.png'}/>                
            </div>
        )
    }
}

export default Panel