import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div id='about-div'>
                <h2 style={{'marginBottom':'4px',}}>About</h2>
                <div style={{'width':'20%',
                             'height':'2px',
                             'marginLeft':'40%',
                             'marginTop':'4px',
                             'backgroundColor':'orange'}}/>
                <p>This is the about section!.</p>
                <h3 style={{'fontStyle':'italic',}}>you dig?</h3>
            </div>
        )
    }
}

export default About