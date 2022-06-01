import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux'; // Provider will provide the global state to the app
import { fetchUsers } from './features/users/usersSlice';

// we want to grab the users as soon as the app starts
store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // disabling React.StrictMode to avoid duplicate posts form jsonplaceholder API
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);
