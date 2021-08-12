import React, { Component } from 'react';
import '../css/detail-page.css';
import closeBoxImg from '../img/V_Switch-Active.svg';
import titleImg from '../img/IMG-2_Subtitle.png';
import titleSig from '../img/IMG-3_Proprieter.png';
import titlePlacard from '../img/V-GROUP_Placard.svg';
import titleStuff from '../img/V-GROUP_Static-1.svg';
import panelFrame from '../img/V-GROUP_Panel.svg';
import secondRender from '../img/IMG-5_2nd-Render.png';
import thirdRender from '../img/IMG-4_3rd-Render.png';
import swatchA from '../img/IMG-8_Swatch-A.png';
import swatchB from '../img/IMG-8_Swatch-B.png';
import swatchC from '../img/IMG-8_Swatch-C.png';
import swatchBox from '../img/V-8_Box.svg';
import fig1 from '../img/V-8_Fig-1.svg';
import fig2 from '../img/V-8_Fig-2.svg';
import fig3 from '../img/V-8_Fig-3.svg';
import dottedSwatchLine from '../img/V_Dotted-Segment.svg';
import priceIcon from '../img/V_Switch-Inactive.svg';
import assetValue from '../img/V-13_Asset-Value.svg';
import printValue from '../img/V-12_Print-Value.svg';
import centerFrame from '../img/V-GROUP_Ribbon.svg';
import swatchBracket from '../img/V-9_Bracket.svg';
import paletteWheel from '../img/V-9_Subject-Ratio.svg';
import paletteLine from '../img/V-14_Color-Bar.svg';
import bubble from '../img/V-10_Bubble.svg';
import wineUp from '../img/V-10_Theme-1.svg';
import wineDown from '../img/V-10_Theme-2.svg';
import centerTag2 from '../img/V-9_Label.svg';
import centerTag1 from '../img/V-10_Label.svg';
import castOuter from '../img/V-11_Icon.svg';
import cast1 from '../img/V-11_Cast-1.svg';
import cast2 from '../img/V-11_Cast-2.svg';
import cast1Hover from '../img/V-11_Cast-1-Hover.svg';
import cast2Hover from '../img/V-11_Cast-2-Hover.svg';
import castBaby from '../img/V-11_Baby.svg';
import fourthRenderBox from '../img/V-15_4th-R-Frame.svg';
import fourthRenderLabel from '../img/V-15_Label.svg';
import fourthRender from '../img/IMG-15_4th-Render.png';
import ratingTag from '../img/V-16_Tag.svg';
import rating from '../img/IMG-16_Penmanship.png';












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
                                <img className="imgLayeringTop3" alt="title info" src={titleSig}/>
                            </div>
                        </div>
                        
                        <div id="option-buttons">
                            <input className="option" type='checkbox' name='thing1' defaultChecked id="thing1"/><label for="thing1"></label>
                            <input className="option" type='checkbox' name='thing2' defaultChecked id="thing2"/><label for="thing2"></label>
                        </div>
                    </div>
                    <div id="panel-col">
                        <div style={{position: 'relative'}}>
                            <img id="panel-frame" alt="panel frame" src={panelFrame}/>
                            <img style={{width:'380px',position: 'absolute',top:"15px",left:"74px",filter:"blur(0.8px)"}} alt="second render" src={secondRender}/>
                            <img style={{width:'380px',position: 'absolute',top:"15px",left:"74px"}}  alt="third render" src={thirdRender}/>
                        </div>
                    </div>
                    <div id="stats-col">
                        <div id='upper-block'>
                            <div>
                                <div style={{display:'flex'}}>
                                    <div className="swatch-block" style={{paddingTop:'20px'}}>
                                        <div style={{display:'flex',position: 'relative'}}>
                                            <img className="swatch-fig" alt="swatch img" src={fig1}/>
                                            <img className="swatch-box" alt="swatch img" src={swatchBox}/>
                                            <img className="swatch" alt="swatch img" src={swatchA}/>
                                        </div>
                                        <div style={{display:'flex',position: 'relative'}}>
                                            <img className="swatch-fig" alt="swatch img" src={fig2}/>
                                            <img className="swatch-box" alt="swatch img" src={swatchBox}/>
                                            <img className="swatch" alt="swatch img" src={swatchB}/>
                                        </div>
                                        <div style={{display:'flex',position: 'relative'}}>
                                            <img className="swatch-fig" alt="swatch img" src={fig3}/>
                                            <img className="swatch-box" alt="swatch img" src={swatchBox}/>
                                            <img className="swatch" alt="swatch img" src={swatchC}/>
                                            <img style={{width:'70px',position: 'relative',top:'-8px',left:'-120px'}} alt="dotted line" src={dottedSwatchLine}/>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{position:'relative'}}>
                                            <img style={{width:'180px',position: 'absolute',left:"-20px",top:"100px"}} alt="center frame" src={centerFrame}/>
                                            <img style={{width:'45px',position: 'absolute',left:"-60px",top:"10px"}} alt="swatch grouping" src={swatchBracket}/>
                                            <img style={{width:'90px',position: 'absolute',left:"10px",top:"123px"}} alt="palette wheel" src={paletteWheel}/>
                                            <img style={{width:'90px',position: 'absolute',left:"162px",top:"159px"}} alt="character study box" src={centerTag1}/>
                                            <img style={{width:'120px',position: 'absolute',left:"58px",top:"91px"}} alt="themes box" src={centerTag2}/>
                                            <img style={{width:'70px',position: 'absolute',left:"120px",top:"190px"}} alt="wine holder" src={bubble}/>
                                            <img style={{width:'20px',position: 'absolute',left:"136px",top:"197px"}} alt="wine up" src={wineUp}/>
                                            <img style={{width:'20px',position: 'absolute',left:"210px",top:"197px"}} alt="wine down" src={wineDown}/>
                                            <img style={{width:'50px',position: 'absolute',left:"10px",top:"35px"}} alt="cast outer" src={castOuter}/>
                                            <img style={{width:'30px',position: 'absolute',left:"80px",top:"38px"}} alt="cast 1" src={cast1}/>
                                            <img style={{width:'27px',position: 'absolute',left:"120px",top:"38px"}} alt="cast 2" src={cast2}/>
                                            <img style={{width:'80px',position: 'absolute',left:"160px",top:"8px"}} alt="cast baby" src={castBaby}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="value-block" style={{display:'flex',justifyContent:'space-between'}}>
                                    <div className="value-block-item">
                                        <img className="value-text" alt='asset-text' src={assetValue}/>
                                        <div className="value-price">
                                            <img className="price-icon" alt='asset-icon' src={priceIcon}/>
                                            <img alt='asset-price'/>
                                        </div>
                                    </div>
                                    <div className="value-block-item">
                                    <img className="value-text" alt='print-text' src={printValue}/>
                                        <div className="value-price">
                                            <img className="price-icon" alt='print-icon' src={priceIcon}/>
                                            <img alt='print-price'/>
                                        </div>
                                    </div>
                                </div>
                            </div>          
                        </div>
                        <div id='lower-block'>
                            <img style={{width:'66px',position: 'relative',top:'135px',left:'-38px'}} alt="dotted line" src={dottedSwatchLine}/>
                            <div style={{display: "flex"}}>
                                <img style={{marginRight: '15px'}} className="price-icon" alt='palette icon' src={priceIcon}/>
                                <img alt="pallete line" src={paletteLine}/>
                            </div>
                            <img style={{width:'195px',position: 'absolute',top:'55px',left:'27px'}} alt="fourth render box" src={fourthRenderBox}/>
                            <img style={{width:'193px',position: 'relative',top:'22px',left:'28px'}} alt="fourth render" src={fourthRender}/>
                            <img style={{width:'110px',position: 'absolute',top:'80px',left:'225px'}} alt="fourth render tag" src={fourthRenderLabel}/>
                            <img style={{width:'66px',position: 'absolute',top:'153px',left:'223px'}} alt="dotted line" src={dottedSwatchLine}/>
                            <img style={{width:'70px',position: 'absolute',top:'130px',left:'290px'}} alt="rating box" src={ratingTag}/>
                            <img style={{width:'70px',position: 'absolute',top:'120px',left:'300px'}} alt="rating" src={rating}/>
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