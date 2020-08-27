import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from './Components/Utils/ScrollToTop';
import App from './Components/App/App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import './index.css';

const history = createBrowserHistory();

history.listen((location, action) => {
    window.scrollTo(0, 0)
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <Router history={history}>
     <ScrollToTop />
      <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
