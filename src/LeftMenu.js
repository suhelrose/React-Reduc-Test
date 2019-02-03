import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import User  from './User';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
const store = createStore(()=>[]);
class LeftMenu extends Component {
  render() {
    return (
         <div className="row"> 
          <div className="col-md-12"> 
          <Provider store = {store}>
            <Router>
                <div>
                   
                    <li><Link to="/user">User</Link></li>
                    <Route path="/user" component={User}/>
                   
                </div>
            </Router>
            </Provider>
          </div>
          </div>
    );
  }
}

export default LeftMenu;