// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import App from './components/App/App';
import Test from './components/Test/Test';

// Assets
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
     <Route path="/" component={App} />
     <Route path="/test" component={Test} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
