import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { Provider } from 'react-redux';
import managePets, {initialPetState} from './reducers/managePets.js';
import './index.css';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(thunk);

const reducer = combineReducers({
  existing: managePets,
  ...createForms({ pet: initialPetState, }),
});

const store = createStore(
  reducer,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
