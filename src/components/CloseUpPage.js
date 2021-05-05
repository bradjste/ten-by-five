import React, { Component } from 'react';
import Panel from './Panel.js'

class CloseUpPage extends Component {

    // componentDidMount() {
    //     document.getElementById('detail-page-div').classList.add('blur');
    //     document.getElementById('close-up-page-div').classList.add('opaque');
    // }

    // componentWillUnmount() {
    //     document.getElementById('main-page-div').classList.remove('blur');
    //     document.getElementById('detail-page-div').classList.remove('opaque');
    // }

    render() {
        return(
            <div id='close-up-page-div' onClick={()=>this.props.closePanelCloseUpPage()}>
                <img src={this.props.uri} />
            </div>
        )
    }
}

export default CloseUpPage