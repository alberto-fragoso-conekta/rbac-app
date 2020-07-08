import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext";

const Callback = ({ location }) => (
  <AuthConsumer>
    {({ handleAuthentication }) => {
      if (/access_toke|id_token|error/.test(location.hash)) {
        handleAuthentication();
      }

      return <Redirect to="/" />;
    }}
  </AuthConsumer>
);

export default Callback;
