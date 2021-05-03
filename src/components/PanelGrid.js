import React, {Component} from 'react';
import Panel from './Panel';

class PanelGrid extends Component {

    render() {
        function importAll(r) {
            return r.keys().map(r);
        }
        const images = importAll(require.context('../cms/images', false, /\.(png|jpe?g|svg)$/));
        const panels = [];

        for (let r = 1; r < 6; r++) {
            for (let c = 1; c < 11; c++) {
                const panelPos = ''+(((r-1)*10)+c);
                const panelImg = images.filter(image => image.default.includes('2nd-Render-'+panelPos.padStart(2,'0')));
                if (panelImg.length > 0) {
                    panels.push(<Panel openPanelDetail={this.props.openPanelDetail} key={'panel-' + r + '-' + c} col={c} row={r} uri={panelImg[0].default}></Panel>);
                }
            }
        }
        
        return (
            <div>
                <div id='panel-grid-div'>
                
                    {panels}
                </div>   
            </div>
        )
    }
}

export default PanelGrid