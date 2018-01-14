import 'foundation-sites/dist/css/foundation.css';
import React from 'react';
import { render } from 'react-dom';
import Root from './root';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from "./store/reducers";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )
);

render(
  <Root store={store} />,
  document.getElementById('root')
)
