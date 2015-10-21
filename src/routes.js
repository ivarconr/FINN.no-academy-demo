import React from 'react';
import {Route} from 'react-router';
import {
    App,
    Home,
    Widgets,
    About,
    Login,
    Survey,
    NotFound,
    MainPage
  } from 'containers';

export default (store) => {
  return (
    <Route component={App}>
      <Route path="/" component={MainPage}/>
      <Route path="/old-home" component={Home}/>
      <Route path="/widgets" component={Widgets}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
      <Route path="/survey" component={Survey}/>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
