import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import './styles/main.css';
import Page1 from './views/Page1/Page1';
import Page2 from './views/Page2/Page2';
import Nav  from './components/Nav/Nav';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import _ from 'lodash'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} timeout={1000}
          classNames="fade">
        <Switch location={this.props.location}>
          <Route exact path='/' component={Page1}/>
          <Route path='/Page2' component={Page2}/>
        </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App);
