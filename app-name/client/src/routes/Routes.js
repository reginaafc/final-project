import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PostDetail from "../pages/PostDetail";
import CreatePost from "../pages/CreatePost";
import Payment from "../pages/Payment";
import PostList from "../pages/PostList";

import SignUp from "../pages/SignUp";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function Routes() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>

        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/projects" component={PostList} />
          <Route path="/createpost" component={CreatePost} />
          <Route path="/login" component={Login} />
          <Route path="/postdetail/:id" component={PostDetail} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/payment" component={Payment} />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default Routes;
