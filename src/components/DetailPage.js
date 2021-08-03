import React, { Component } from 'react';
import '../css/detail-page.css';
import closeBoxImg from '../img/V_Switch-Active.svg';
import titleImg from '../img/IMG-2_Subtitle.png';
import titlePlacard from '../img/V-GROUP_Placard.svg';
import titleStuff from '../img/V-GROUP_Static-1.svg';
import panelFrame from '../img/V-GROUP_Panel.svg';
import swatchA from '../img/IMG-8_Swatch-A.png';
import swatchB from '../img/IMG-8_Swatch-B.png';
import swatchC from '../img/IMG-8_Swatch-C.png';


// import CloseUpPage from './CloseUpPage';

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
        // document.getElementById('main-page-div').classList.add('blur');
        document.getElementById('detail-page-div').classList.add('opaque');
    }

    componentWillUnmount() {
        // document.getElementById('main-page-div').classList.remove('blur');
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
                <div id="detail-action-button-div">
                    <img className="detail-action-button" src={closeBoxImg} onClick={()=>this.props.closePanelDetail()} alt='detail page close button'></img>
                    <img className="detail-action-button" src={closeBoxImg} onClick={()=>this.props.closePanelDetail()} alt='detail page close button'></img>
                </div>
                <div id="main-content">
                    <div id="title-col">
                        <p id="panel-coord">2-B</p>
                        {/* <p>OR</p> */}
                        <div>
                            <div className="imgLayering">
                                <img className="imgLayering" alt="title placard" id="panel-title-img" src={titlePlacard}/>
                                <img className="imgLayeringTop" alt="title img" src={titleImg}/>
                                <img className="imgLayeringTop2" alt="title info" src={titleStuff}/>
                            </div>
                        </div>
                        
                        <div id="option-buttons">
                            <input class="option" type='checkbox' name='thing1' defaultChecked id="thing1"/><label for="thing1"></label>
                            <input class="option" type='checkbox' name='thing2' defaultChecked id="thing2"/><label for="thing2"></label>
                        </div>
                    </div>
                    <div id="panel-col">
                        <img id="panel-frame" alt="panel frame" src={panelFrame}/>
        
                    </div>
                    <div id="stats-col">
                        <div upper-block>
                            <div className="swatch-block">
                                <img className="swatch" alt="swatch img" src={swatchA}/>
                                <img className="swatch" alt="swatch img" src={swatchB}/>
                                <img className="swatch" alt="swatch img" src={swatchC}/>
                            </div>
                            <div cast-roster>
                            </div>
                        </div>
                        <div lower-block>
                        </div>
                    </div>
                </div>
                {/* <DetailTitle {...this.props}/>
                <DetailPanel {...this.props} openPanelCloseUpPage={this.openPanelCloseUpPage}/> */}
                {/* {this.state.closeUpActive && <CloseUpPage closePanelCloseUpPage={this.closePanelCloseUpPage} uri={this.props.activePanel.state.renderUris.R2}/>}                  */}
            </div>
        )
    }
}

// function DetailTitle(props) {
//     return(
//         <div id='detail-title'>
//             <p id='detail-title-coord'>{props.activePanel.state.position.col + " - " + String.fromCharCode(64+props.activePanel.state.position.row)}</p>
//             <div id='detail-title-text'>
//                 <p style={{'paddingLeft':'30px','paddingRight':'30px'}}>"No Chance in Hell, My Friend!"</p>
//                 <div id='detail-page-backline'/>
//             </div>
//         </div>
//     );
// }

// function DetailPanel(props) {
//     return(
//         <div id='detail-page-panel-div' >
//             <img src={props.activePanel.state.renderUris.R2} onClick={()=>{props.openPanelCloseUpPage()}} alt='Currently selected panel'/>
//         </div>
//     );
// }

export default DetailPage