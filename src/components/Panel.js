import React, { Component } from 'react';

class Panel extends Component {

    constructor(props) {
        super(props);
        this.loadMarkdown();
    }

    loadMarkdown() {

    }

    render() {
        return(
            <div className = 'panel-div'>
                <img className='panel-thumbnail' alt={"Panel (" + this.props.row + "," + this.props.col + ")"} src={this.props.uri}/>                
            </div>
        )
    }
}

export default Panel