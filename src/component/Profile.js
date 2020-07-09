import React from "react";

import { AuthConsumer } from "../authContext";

const Profile = () => (
  <AuthConsumer>
    {({ user }) => (
      <>
        <h2>User profile</h2>
        <ul>
          <li>ID: {user.id}</li>
          <li>Email: {user.email}</li>
          <li>Role: {user.role}</li>
        </ul>
      </>
    )}
  </AuthConsumer>
);

export default Profile;
