import {Component} from 'react';
import MainPage from './components/MainPage';
import DetailPage from './components/DetailPage';
import './App.css';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      detailActive: false
      ,activePanel: null
    }
    this.openPanelDetailPage = this.openPanelDetailPage.bind(this);
    this.closePanelDetailPage = this.closePanelDetailPage.bind(this);
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
        <MainPage openPanelDetail={this.openPanelDetailPage}/>
        {this.state.detailActive && <DetailPage closePanelDetail={this.closePanelDetailPage} activePanel={this.state.activePanel}/>}   
      </div>
    )
  }   
}


export default App;
