import React, { Component } from 'react';

class Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: {
                row: props.row,
                col: props.col
            },
            isActive: false,
            render: this.props.render,
            renderUris: this.getUris()
        }
        this.loadMarkdown();
        this.setActive = this.setActive.bind(this);
    }

    loadMarkdown() {

    }

    getUris() {
        const panelPos = ''+(((this.props.row-1)*10)+this.props.col);
        return {
            R2: this.props.images.filter(image => image.default.includes('2nd-Render-'+panelPos.padStart(2,'0')))[0].default
        }    
            
        

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
                    src={this.state.renderUris.R2}/>                 
            </div>
        )
    }
}

export default Panel