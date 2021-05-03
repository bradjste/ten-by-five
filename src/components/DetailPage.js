import React, { Component } from 'react';
import Panel from './Panel.js'

class DetailPage extends Component {

    componentDidMount() {
        document.getElementById('main-page-div').classList.add('blur');
        document.getElementById('detail-page-div').classList.add('opaque');
    }

    componentWillUnmount() {
        document.getElementById('main-page-div').classList.remove('blur');
        document.getElementById('detail-page-div').classList.remove('opaque');
    }

    render() {
        return(
            <div id='detail-page-div' onClick={()=>{this.props.closePanelDetail()}}>
                <DetailTitle {...this.props}/>
                <DetailPanel {...this.props}/>
                <div id='detail-page-panel-div'>
                    <p>hi</p>
                </div>
                <div id='detail-page-backline'/>
            </div>
        )
    }
}

function DetailTitle(props) {
    return(
        <div id='detail-title'>
            <p id='detail-title-coord'>{props.activePanel.state.position.col + " - " + String.fromCharCode(64+props.activePanel.state.position.row)}</p>
            <div id='detail-title-text'>
                <p>This is the panel title</p>
            </div>
        </div>
    );
}

function DetailPanel(props) {
    return(
        <div id='detail-page-panel-div'>
            <Panel {...props.activePanel.props}></Panel>
        </div>
    );
}

export default DetailPage