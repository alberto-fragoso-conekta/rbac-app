import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Login from "../component/Login";
import PostList from "../component/PostsList";

const HomePage = () => (
  <AuthConsumer>
    {({ authenticated }) =>
      authenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <>
          <h2>Welcome to React RBCA</h2>
          <Login />
          <PostList />
        </>
      )
    }
  </AuthConsumer>
);

export default HomePage;
