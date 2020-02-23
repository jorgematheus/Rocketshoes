import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { Router } from 'react-router-dom';

import './config/ReactotronConfig';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header/index';

import history from './services/history';

import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
