import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './styles/main.css';
import Page1 from './views/Page1/Page1';
import Page2 from './views/Page2/Page2';
import Nav  from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Page1}/>
          <Route path='/Page2' component={Page2}/>
        </Switch>
      </div>
    );
  }
}

export default App;
