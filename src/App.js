import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import Layout from './Layout';
import Home from './page/Home';
import Demo1 from './page/demo1/index';
import MobxDemo1 from './page/mobx/index';
import cssDemo1 from './page/cssDemo/demo1';

const AppComponent = props => <Layout location={props.location}>{props.children || null}</Layout>
class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppComponent}>
          <IndexRedirect to="antd/index" />
          <Route path="antd">
            <Route path="index" component={Home} />
            <Route path="tree" component={Demo1} />
          </Route>
          <Route path="mobx">
            <Route path="demo1" component={MobxDemo1} />
          </Route>
          <Route path="css">
            <Route path="demo1" component={cssDemo1} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default App;
