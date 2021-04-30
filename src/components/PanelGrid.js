import React, {Component} from 'react';
import Panel from './Panel'


class PanelGrid extends Component {

    render() {
        const items = [];

        for (let r = 1; r < 6; r++) {
            for (let c = 1; c < 11; c++) {
                items.push(<Panel key={(c+r*10)-10} col={c} row={r}></Panel>)
            }
        }

        return (
            <div className='panel-grid-div'>
                {items}
            </div>
        )
    }
}

export default PanelGrid