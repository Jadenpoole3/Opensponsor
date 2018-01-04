import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Athletes from './components/Athletes'
import SingleAthlete from './components/SingleAthlete'
import EditPage from './components/EditPage'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
      <Route exact path="/" component={Athletes}/>
      <Route exact path="/athletes/:athleteId/edit" component={EditPage} />
      <Route path="/athletes/:athleteId" component={SingleAthlete}/>
      </Switch>
        
      </div>
      </Router>
    );
  }
}

export default App;
