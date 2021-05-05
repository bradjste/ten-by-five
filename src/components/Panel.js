import React, { Component } from 'react';

class Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: {
                row: props.row,
                col: props.col
            },
            closeUpActive: false,
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
        console.log(panelPos)

        if (this.props.images) {            
            const imageUri1 = this.props.images.filter(image => image.default.includes('1st-Render-'+panelPos.padStart(2,'0')));
            const imageUri2 = this.props.images.filter(image => image.default.includes('2nd-Render-'+panelPos.padStart(2,'0')));
            if (imageUri1[0] && imageUri2[0]) {
                return {
                    R1: imageUri1[0].default,
                    R2: imageUri2[0].default
                }   
            } else {
                return {
                    R1: '1',
                    R2: '2'
                }
            }
        }
    }

    setActive() {
        this.setState(()=>{
            return(
                {
                    closeUpActive: true
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
                    src={this.state.renderUris.R1 ? this.state.renderUris.R1 : '11'}/>
                
                <img 
                    className='panel-thumbnail-preview' 
                    alt={"Panel (" + this.props.row + "," + this.props.col + ")"} 
                    src={this.state.renderUris.R2 ? this.state.renderUris.R2 : '11'}/>            
            </div>
        )
    }
}

export default Panel