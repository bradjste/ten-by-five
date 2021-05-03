import React, { Component } from 'react';

class Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: {
                row: props.row,
                col: props.col
            },
            isActive: false
        }
        this.loadMarkdown();
        this.setActive = this.setActive.bind(this);
    }

    loadMarkdown() {

    }

    setActive() {
        this.setState(()=>{
            return(
                {
                    isActive: true
                }
            )
        })
        console.log("Panel (" + this.state.position.row + ',' + this.state.position.col + ") has been activated.")
    }

    render() {
        return(
            <div className = 'panel-div' onClick={()=>this.props.openPanelDetail(this)}>
                <img 
                    className='panel-thumbnail' 
                    alt={"Panel (" + this.props.row + "," + this.props.col + ")"} 
                    src={this.props.uri}/>                
            </div>
        )
    }
}

export default Panel