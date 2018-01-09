import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
  </Router>),
  document.getElementById('root')
);
registerServiceWorker();
