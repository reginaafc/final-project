import React from "react";
import CreatePost from "../pages/CreatePost";
import PostDetail from "../pages/PostDetail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddPost from "../pages/AddPost";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

import Posts from "../pages/Posts";
import PostList from "../pages/PostList";

import SignUp from "../pages/SignUp";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  // uri: 'http://localhost:3001/graphql'
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
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
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
    </ApolloProvider>
    
  );
}

export default Routes;
