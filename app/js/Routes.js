'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import App                         from './App';
import HomePage                    from './pages/HomePage';
import SearchPage                  from './pages/SearchPage';
import NotFoundPage                from './pages/NotFoundPage';
import BuildCard                   from './pages/BuildCard';
import ConfirmationPage            from './pages/ConfirmationPage';

export default (
  <Router history={CreateBrowserHistory()}>
    <Route path="/" component={App}>

      <IndexRoute component={HomePage} />


      <Route path="/" component={HomePage} />
      <Route path="/c/:slug" component={BuildCard} />
      <Route path="/search" component={SearchPage} />
      <Route path="/confirmation" component={ConfirmationPage} />
      <Route path="*" component={NotFoundPage} />

    </Route>
  </Router>
);
