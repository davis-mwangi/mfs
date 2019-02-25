import React, { Component } from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import Layout from  './container/Layout/Layout';
import Datasets from './container/Datasets/Datasets';
import DatasetInfo from './components/DatasetInfo/DatasetInfo';






class App extends Component {
  render() {

    let routes = (
      <Switch>
          <Route path="/" exact component={Datasets} />
          <Route path = "/:href" component={DatasetInfo}/>  
          <Redirect to="/" />
      </Switch>
    )
    return (
      <Layout>
           {routes}
      </Layout>
    );
  }
}

export default withRouter(App);
