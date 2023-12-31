import { Provider as ReactProvider } from 'react-redux';
import store from './redux/store';
import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider,theme } from '@chakra-ui/react';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


root.render(
  <ReactProvider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ReactProvider>
    
);
