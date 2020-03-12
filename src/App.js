import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { createBrowserHistory } from 'history';
import Routes from './Navigation/router';
import store from './Store/store';

const history = createBrowserHistory();


const App = () => (
  <CookiesProvider>
    <Provider store={store}>
      <HashRouter history={history}>
        <Routes />
      </HashRouter>
    </Provider>
  </CookiesProvider>
);

export default App;
