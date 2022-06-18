import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
  ApolloProvider,
} from '@apollo/client';
import {RecoilRoot} from 'recoil';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const httpLink = new HttpLink({uri: process.env.REACT_APP_BASE_URL});

const handleTunnelingMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({headers = {}}) => ({
    headers: {
      ...headers,
      'Bypass-Tunnel-Reminder': '2',
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(handleTunnelingMiddleware, httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
