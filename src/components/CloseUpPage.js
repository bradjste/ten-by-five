import React, { Component } from 'react';
import panelFrame from '../img/V-GROUP_Panel.svg';
import secondRender from '../img/IMG-5_2nd-Render.png';
import thirdRender from '../img/IMG-4_3rd-Render.png';


class CloseUpPage extends Component {

    render() {
        return(
            <div id='close-up-page-div' onClick={()=>this.props.closePanelCloseUpPage()}>
                {/* <img src={this.props.uri} alt='Close up of selected panel'/> */}
                <div style={{position: 'relative',textAlign:'center',paddingRight:'70%'}}>
                    {/* <img id="panel-frame" alt="panel frame" src={panelFrame}/> */}
                    <img style={{position: 'absolute',filter:"blur(0.8px)",outline: '3px solid orange'}} alt="second render" src={secondRender}/>
                    <img style={{position: 'absolute'}}  alt="third render" src={thirdRender}/>
                    <div style={{height:'50px'}}></div>
                </div>
            </div>
        )
    }
}

export default CloseUpPage