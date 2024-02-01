import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

const SignUpProcess = () => {
  return (
    <View style={styles.signUpProcess}>
      <View style={styles.container}>
        <Image
          source={require("../assets/Group 2969.png")}
          style={styles.group}
          alt="Group"
        />
        <View style={styles.frame}>
          <Text style={styles.letsGetStarted}>Let's Get Started!</Text>
          <Text style={styles.helpUsTailorYour}>
            Help Us Tailor Your Investment Journey.{"\n"}
            Answer a Few Quick Questions, and We'll{"\n"}
            Recommend a Personalized Plan Aligned With{"\n"}
            Your Goals. Ready to Begin?
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Start questionnaire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpProcess: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
  },
  group: {
    height: 62,
    width: 167,
    marginTop: 255,
    marginLeft: 104,
  },
  frame: {
    flexDirection: "column",
    paddingHorizontal: 48,
    marginTop: 30,
  },
  letsGetStarted: {
    color: "#4c4c4c",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  helpUsTailorYour: {
    color: "#4c4c4c",
    fontSize: 12,
    textAlign: "center",
  },
  button: {
    width: 320,
    height: 54,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    left: 28,
    top: 734,
    position: "absolute",
    backgroundColor: "#064682",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignUpProcess;
