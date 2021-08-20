
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddPost from "../pages/AddPost";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Projects from "../pages/Projects";
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
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/projects" component={Projects} />
        <Route path="/addPost" component={AddPost} />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={Posts} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </BrowserRouter>

    </ApolloProvider>
  
  );
}

export default Routes;
