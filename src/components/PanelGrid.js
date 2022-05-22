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
                panels.push(
                    <Panel openPanelDetail={this.props.openPanelDetail} 
                        key={'panel-' + r + '-' + c} 
                        col={c} 
                        row={r} 
                        render={1}
                        images={images}
                    ></Panel>);
            
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