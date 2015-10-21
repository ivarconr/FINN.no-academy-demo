import React from 'react';
import {Route} from 'react-router';
import {
    App,
    MainPage
  } from 'containers';

export default (store) => {
  return (
    <Route component={App}>
      <Route path="/" component={MainPage}/>
    </Route>
  );
};
