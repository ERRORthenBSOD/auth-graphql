import React from 'react';
import {render} from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  dataIdFromObject: o => o.id
})

const Root = () => {
  return (
    <ApolloProvider client = {client}>
      <div>
        Auth Starter
      </div>
    </ApolloProvider>
  );
};

render(<Root />, document.querySelector('#root'));
