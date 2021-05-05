import React, { Component } from 'react';

class CloseUpPage extends Component {

    render() {
        return(
            <div id='close-up-page-div' onClick={()=>this.props.closePanelCloseUpPage()}>
                <img src={this.props.uri} alt='Close up of selected panel'/>
            </div>
        )
    }
}

export default CloseUpPage