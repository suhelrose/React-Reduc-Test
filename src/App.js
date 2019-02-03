import React, { Component } from 'react';
import './App.css';
// import PageHeader from './PageHeader';
import LeftMenu from './LeftMenu';
class App extends Component {
  render() {
    return (
      <div className="container-fluide"> 
          <div className="row"> 
          <div className="col-md-12"> 
            
          </div>
          </div>
          <div className="row"> 
          <div className="col-md-12">
            <LeftMenu/>
          </div>
          </div>
          <div className="row"> 
          <div className="col-md-12"> 

          </div>
          </div>
        </div>
    );
  }
}

export default App;
