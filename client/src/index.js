import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import managePets from './reducers/managePets.js';
import './index.css';
import thunk from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { fetchBreeds, fetchPets } from './actions/index.js'

const middleware = applyMiddleware(thunk);

const store = createStore(
  managePets,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );

  store.dispatch(fetchBreeds('dogs'));
  store.dispatch(fetchBreeds('cats'));
  store.dispatch(fetchBreeds('birds'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
