import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import CurriculumVitae from "./routes/CurriculumVitae.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/curriculumVitae" component={CurriculumVitae} />
    </Router>
  );
}

export default RouterConfig;
