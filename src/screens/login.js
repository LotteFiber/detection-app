import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import { Card, Button, TextInput } from "react-native-paper";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.content}>
      <Text style={styles.title}>⛑️ HelmetSys</Text>
      <View style={styles.view}>
        <Card style={{}}>
          <Card.Title title="Login"></Card.Title>
          <Card.Content>
            <TextInput
              label="Email"
              keyboardType="email-address"
              style={styles.textInput}
            ></TextInput>
            <TextInput
              label="Password"
              secureTextEntry={true}
              style={styles.textInput}
            ></TextInput>
            <Button uppercase={false} style={styles.cardButton}>
              Forgot Email/Password
            </Button>
            <TouchableOpacity>
              <Button mode="contained" style={styles.cardButton}>
                Login
              </Button>
            </TouchableOpacity>
            <Button uppercase={false} style={styles.cardButton}>
              <Text style={styles.buttonText}>Don't have an account?</Text>{" "}
              Register
            </Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#D97706",
  },
  view: {
    width: "80%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginBottom: 16,
  },
  textInput: {
    marginVertical: 8,
  },
  cardButton: {
    margin: 2,
    marginLeft: 0,
    marginRight: 0,
  },
  buttonText: {
    color: "black",
  },
});
