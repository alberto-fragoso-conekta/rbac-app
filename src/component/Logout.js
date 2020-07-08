import React from "react";

import { AuthConsumer } from "../authContext";

const Logout = () => (
  <AuthConsumer>
    {({ logout }) => (
      <button className="btn btn-small btn-default" onClick={logout}>
        Logout
      </button>
    )}
  </AuthConsumer>
);

export default Logout;
