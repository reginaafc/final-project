import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddPost from "../pages/AddPost";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Projects from "../pages/Projects";
import SignUp from "../pages/SignUp";

function Routes() {
  return (
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
  );
}

export default Routes;
