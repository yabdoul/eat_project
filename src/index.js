import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react'
import MainNavigator from './navigation';
import "./assets/sass/main.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";   
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
ReactDOM.render(
  <PrimeReactProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
    </PrimeReactProvider>
  ,
  document.getElementById('root')
);
serviceWorkerRegistration.register();
