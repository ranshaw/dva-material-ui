import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage.jsx';
import "assets/css/material-dashboard-react.css?v=1.4.1";
import indexRoutes from "routes/index.jsx";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
