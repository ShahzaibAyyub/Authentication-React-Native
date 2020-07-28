import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

import { Actions } from "react-native-router-flux";
import Form from "../components/Form";
import Signup from "./Signup";

export default class Welcome extends Component {
  signup() {
    Actions.signup();
  }
  login() {
    Actions.login();
  }
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text>Sell what you dont need!</Text>
        </View>

        <View style={styles.loginContainer}>
          <TouchableOpacity style={styles.loginbutton}>
            <Text style={styles.buttonText} onPress={this.login}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.singupContainer}>
          <TouchableOpacity style={styles.signupbutton}>
            <Text style={styles.buttonTextSignUp} onPress={this.signup}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 90,
    alignItems: "center",
  },
  loginContainer: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  loginbutton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
    position: "absolute",
  },
  singupContainer: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  singupbutton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
    top: 10,
  },
  buttonTextSignUp: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
    top: 27,
  },
});
