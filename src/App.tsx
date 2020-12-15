import React, { FC } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Search from './pages/search/Search';
import Results from './pages/results/Results';
import Header from './modules/header/Header';
import './App.css';

const App: FC = () => (
  <>
    <Header title="Youtube live video finder"/>
    <BrowserRouter>  
      <Route exact path="/results/:q" component={Results} />
      <Route path="/search" component={Search} exact={true} />
      <Route exact path="/" render={() => <Redirect to="/search" />} />
    </BrowserRouter>
  </>
);

export default App;
