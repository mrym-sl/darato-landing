import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  // <Provider store={store}>
    // <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App title="داراتو" />
      </BrowserRouter>
    // </PersistGate>
  // </Provider>
  ,
  document.getElementById('root')
);
