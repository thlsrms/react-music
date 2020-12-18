'use strict';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Pages
import {
  Canciones404, CancionesCreate, CancionesEdit, CancionesFAQ, CancionesHome, Header
} from 'Pages';

const CancionesRouter = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <CancionesHome />} />
          <Route exact path='/create' render={() => <CancionesCreate />} />
          <Route exact path='/edit/:id' render={() => <CancionesEdit />} />
          <Route exact path='/faq' render={() => <CancionesFAQ />} />
          <Route exact path='*' render={() => <Canciones404 />} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default CancionesRouter;

