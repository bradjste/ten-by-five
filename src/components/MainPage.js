import React, { Component } from 'react';
import title from '../banner.png';
import subtitle from '../subheader.png';
import PanelGrid from './PanelGrid.js';
import About from './About.js';



class MainPage extends Component {

    render() {
        return(
            <div className = 'landing-page-div'>
                <img src={title} className='main-banner'></img>
                <br />
                <img src={subtitle} className='main-subheader'></img>
                <PanelGrid />
                <About />
            </div>
        )
    }
}

export default MainPage