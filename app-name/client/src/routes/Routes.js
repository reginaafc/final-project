import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreatePost from "../pages/CreatePost";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PostDetail from "../pages/PostDetail";
import Projects from "../pages/Projects";
import SignUp from "../pages/SignUp";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/projects" component={Projects} />
        <Route path="/createpost" component={CreatePost} />
        <Route path="/login" component={Login} />
        <Route path="/postdetail" component={PostDetail} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default Routes;
