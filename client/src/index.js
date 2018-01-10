import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import managePets from './reducers/managePets.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(managePets, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
