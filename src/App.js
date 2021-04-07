import React, { Component } from "react"

import './App.css';
import AboutMe from "./components/AboutMe";
import MyTown from "./components/MyTown";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: 'a'
    }
  }

  render() {
    return (
      <div className="App">
        
        <div className="menu">
          <p className="menu-item" onClick={() => this.setState({ selectedMenu: 'a' })}>
          {
            this.state.selectedMenu === 'a' ?
            
            <p  className="btn-capital-show">About Me</p>
            :
            <p  className="btn-capital-hide">About Me</p>
          }
          </p>


          <p className="menu-item" onClick={() => this.setState({ selectedMenu: 'm' })}>
            
          {
            this.state.selectedMenu === 'm' ?
            <p  className="btn-capital-show">My Town</p>
            :
            <p  className="btn-capital-hide">My Town</p>
          }
          </p>


        </div>

        {this.state.selectedMenu === 'a' ?
          <AboutMe />
          :
          <MyTown />

        }
      </div>
    );
  }
}


export default App;
