import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";

export default class Routes extends Component {
  render() {
    return (
      <Router barButtonIconStyle={styles.barButtonIconStyle}>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signup" component={Signup} title="Sign up" />
          <Scene
            key="welcome"
            component={Welcome}
            title="Welcome"
            initial={true}
          />
        </Stack>
      </Router>
    );
  }
}

const styles = {
  barButtonIconStyle: {
    top: "0%",
  },
};
