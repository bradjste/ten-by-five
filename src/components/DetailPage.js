import React, { Component } from 'react';
import closeBoxImg from '../img/closeBox.png';
import CloseUpPage from './CloseUpPage';

class DetailPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            closeUpActive: false
        }
        this.openPanelCloseUpPage = this.openPanelCloseUpPage.bind(this);
        this.closePanelCloseUpPage = this.closePanelCloseUpPage.bind(this);
    }

    componentDidMount() {
        document.getElementById('main-page-div').classList.add('blur');
        document.getElementById('detail-page-div').classList.add('opaque');
    }

    componentWillUnmount() {
        document.getElementById('main-page-div').classList.remove('blur');
        document.getElementById('detail-page-div').classList.remove('opaque');
    }

    openPanelCloseUpPage = function() {
        this.setState({closeUpActive: true},
            () => {console.log("Close up for panel (" +
             this.props.activePanel.state.position.row +
             ',' +this.props.activePanel.state.position.col +
             ") is now displaying.")}
        );
    }
    
    closePanelCloseUpPage = function() {
        this.setState({closeUpActive: false},
            () => {console.log("Close up for panel (" +
             this.props.activePanel.state.position.row +
             ',' +this.props.activePanel.state.position.col +
             ") is not displaying.")}
        );
    };


    render() {
        return(
            <div id='detail-page-div'>
                <DetailTitle {...this.props}/>
                <DetailPanel {...this.props} openPanelCloseUpPage={this.openPanelCloseUpPage}/>
                <img id='detail-page-close-box' src={closeBoxImg} onClick={()=>this.props.closePanelDetail()} alt='detail page close button'></img>
                {this.state.closeUpActive && <CloseUpPage closePanelCloseUpPage={this.closePanelCloseUpPage} uri={this.props.activePanel.state.renderUris.R2}/>}                 
            </div>
        )
    }
}

function DetailTitle(props) {
    return(
        <div id='detail-title'>
            <p id='detail-title-coord'>{props.activePanel.state.position.col + " - " + String.fromCharCode(64+props.activePanel.state.position.row)}</p>
            <div id='detail-title-text'>
                <p style={{'paddingLeft':'30px','paddingRight':'30px'}}>"No Chance in Hell, My Friend!"</p>
                <div id='detail-page-backline'/>
            </div>
        </div>
    );
}

function DetailPanel(props) {
    return(
        <div id='detail-page-panel-div' >
            <img src={props.activePanel.state.renderUris.R2} onClick={()=>{props.openPanelCloseUpPage()}} alt='Currently selected panel'/>
        </div>
    );
}

export default DetailPage