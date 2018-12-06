import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App'
import './style.css';
import Single from './compontents/Single'

render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/beer" component={Single} />
      <Route exact path="/search/:searchTerm" component={App} />
    </div>
  </BrowserRouter>, document.getElementById('root'));
