import React from 'react';
import {render} from 'react-dom';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {Router, hashHistory, Route, IndexRoute} from 'react-router';
import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});
const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts:{
    credentials: 'same-origin'
  }
});

const Root = () => {
  return (
    <ApolloProvider client = {client}>
      <Router history={hashHistory}>
        <Route path='/' component ={App}>
          <Route path='login' component = {LoginForm}/>
          <Route path='signup' component = {SignupForm}/>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

render(<Root />, document.querySelector('#root'));
