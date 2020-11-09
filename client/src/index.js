import { render } from 'react-dom';
import React, { StrictMode } from 'react';

import RedBox from 'redbox-react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import config from './config';
import App from './components/App';

import store, { persistor } from './stores';

import init from './init';

init();

const renderComponent = (rootElement) => {
  render(
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>,
    rootElement
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const reactElement = document.getElementById('app');

  if (reactElement) {
    if (config.env === 'development') {
      try {
        renderComponent(reactElement);
      } catch (e) {
        render(<RedBox error={e} />, reactElement);
      }
    } else {
      renderComponent(reactElement);
    }
  }
});
