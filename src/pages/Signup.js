import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import Form from "../components/Form";

import { Actions } from "react-native-router-flux";

export default class Signup extends Component {
  goBack() {
    Actions.login();
  }

  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.container}>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Form type="Signup" />
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Already have an account? </Text>
            <TouchableOpacity onPress={this.goBack}>
              <Text style={styles.signupButton}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  signupInput: {
    top: "30%",
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 16,
    flexDirection: "row",
  },
  signupText: {
    color: "#12799f",
    fontSize: 16,
  },
  signupButton: {
    color: "#12799f",
    fontSize: 16,
    fontWeight: "500",
  },
});
