import {Component} from 'react';
import MainPage from './components/MainPage';
import DetailPage from './components/DetailPage';
import './css/App.scss';

class App extends Component{

  constructor(props) {
    super(props);

    const images = this.importAll(require.context('./img/cms', false, /\.(png|jpe?g|svg)$/))
    const panels = this.importAll(require.context('./cms/', false, /\.(json)$/))

    this.state = {
      detailActive: false,
      activePanel: null,
      images,
      panels
    }

    this.openPanelDetailPage = this.openPanelDetailPage.bind(this);
    this.closePanelDetailPage = this.closePanelDetailPage.bind(this);
  }

  importAll(r) {
    return r.keys().map(r);
  }

  openPanelDetailPage = function(panel) {
    if (!this.state.detailActive) {
      panel.setActive();
      this.setState(() => {
        return(
          {
            detailActive: true,
            activePanel: panel
          }
        );
      });
      console.log("Detail for panel ("+ panel.state.position.row + ',' +panel.state.position.col +") is now displaying.");
    }
  };

  closePanelDetailPage = function() {
    if (this.state.detailActive) {
      this.setState(() => {
        return(
          {
            detailActive: false
          }
        );
      });
      console.log("Detail panel is not displaying.");
    }   
  };


  render() {
    return (
      <div className="App">
        {!this.state.detailActive && <MainPage openPanelDetail={this.openPanelDetailPage} panels={this.state.panels}/>}
        {this.state.detailActive && <DetailPage closePanelDetail={this.closePanelDetailPage} activePanel={this.state.activePanel}/>}   
      </div>
    )
  }   
}


export default App;
