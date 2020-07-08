import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Can from "../component/Can";
import Logout from "../component/Logout";
import Profile from "../component/Profile";
import PostsList from "../component/PostsList";

const DashboardPage = () => (
  <AuthConsumer>
    {({ user }) => (
      <Can
        role={user.role}
        perform="dashboard-page:visit"
        yes={() => (
          <div>
            <h1>Dashaboard</h1>
            <Logout />
            <Profile />
            <PostsList />
          </div>
        )}
        no={() => <Redirect to="/" />}
      />
    )}
  </AuthConsumer>
);

export default DashboardPage;
