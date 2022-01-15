import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import App from './App';
import { fetchUsers } from './features/users/usersSlice'
import { store } from './app/store';
import { worker } from './api/server';

async function start() {
  await worker.start({ onUnhandledRequest: 'bypass' });

  store.dispatch(fetchUsers())

  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

start();
