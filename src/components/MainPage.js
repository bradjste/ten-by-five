import React, { Component } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import title from '../img/banner.png';
import subtitle from '../img/subheader.png';
import PanelGrid from './PanelGrid.js';
import About from './About.js';

class MainPage extends Component {

    render() {
        const numbers = [0,1,2,3,4]
        return(
            <div id='main-page-div'>
                <img src={title} alt='title graphic' className='main-banner'/>
                <br />
                <img src={subtitle} alt='subtitle graphic' className='main-subheader'></img>
                <PanelGrid openPanelDetail={this.props.openPanelDetail}/>
                <About />
                <div style={{'display':'flex','flexDirection':'row','paddingLeft':'0px'}}>
                    {numbers.map((number) =>
                        <Player
                        autoplay
                        loop
                        src="https://assets5.lottiefiles.com/private_files/lf30_kanwuonz.json"
                        style={{ height: '300px', width: '300px' }}/>
                    )}
                </div>
                
                <br/>
            </div>
        )
    }
}
  
export default MainPage