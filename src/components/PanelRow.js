import React, {Component} from 'react';
import Panel from './Panel'


class PanelGrid extends Component {

    render() {
        const items = [];

        for (let r = 1; r < 21; r ++) {
            items.push(<Panel key={r} row={r} col={this.props.col}></Panel>)
        }

        return (
            <div className='panel-row-div'>
                {items}
            </div>
        )
    }
}

export default PanelGrid