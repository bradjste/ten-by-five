import React, { Component } from 'react';
import title from '../img/banner.png';
import subtitle from '../img/subheader.png';
import PanelGrid from './PanelGrid.js';
import About from './About.js';

class MainPage extends Component {

    render() {
        return(
            <div id='main-page-div'>
                <img src={title} alt='title graphic' className='main-banner'/>
                <br />
                <img src={subtitle} alt='subtitle graphic' className='main-subheader'></img>
                <PanelGrid openPanelDetail={this.props.openPanelDetail}/>
                <About />
            </div>
        )
    }
}
  
export default MainPage