import React, {Component} from 'react';
import Panel from './Panel';

class PanelGrid extends Component {

    getRender(r, c, render) {
        const panel =  this.props.panels
            .filter(({row}) => row === r)
            .find(({column}) => column === c)

        return panel ? panel[`render${render}`] : null
    }

    render() {
        const panels = []
        for (let r = 1; r < 6; r++) {
            for (let c = 1; c < 11; c++) {
                panels.push(
                    <Panel openPanelDetail={this.props.openPanelDetail} 
                        key={'panel-' + r + '-' + c} 
                        col={c} 
                        row={r} 
                        render1={this.getRender(r, c, 1)}
                        render2={this.getRender(r, c, 2)}
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