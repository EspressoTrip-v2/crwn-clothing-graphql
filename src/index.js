import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* APOLLO MODULES */
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';

import { resolvers, typeDefs } from './graphql/resolvers';

/* ROUTER MODULE */
import { BrowserRouter } from 'react-router-dom';

/* CREATE CONNECTION TO GRAPHQL BACK END*/
const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com',
});

/* APOLLO CACHE */
const cache = new InMemoryCache();

/* APOLLO CLIENT */
const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

/* APOLLO CACHE OBJECT */
client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    itemCount: 0,
    itemTotal: 0,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
