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
          source={require("../assets/Group 2969.png")} // Assuming image is in same directory
          style={styles.group}
          alt="Group"
        />
        <View style={styles.frame}>
          <Text style={styles.letsGetStarted}>Let's Get Started!</Text>
          <Text style={styles.helpUsTailorYour}>
            Help Us Tailor Your Investment Journey. Answer a Few Quick
            Questions, and We'll Recommend a Personalized Plan Aligned With Your
            Goals. Ready to Begin?
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            /* handle button press */
          }}
        >
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
    width: 375, // Adjust width as needed
    height: 750, // Adjust height as needed
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
    color: "#4c4c4c", // Replace with actual color value
    fontSize: 24, // Adjust font size as needed
    fontWeight: "bold", // Adjust font weight as needed
    textAlign: "center",
    marginBottom: 16,
  },
  helpUsTailorYour: {
    color: "#4c4c4c", // Replace with actual color value
    fontSize: 12, // Adjust font size as needed
    textAlign: "center",
  },
  button: {
    backgroundColor: "#064682", // Adjust color as needed
    borderRadius: 12,
    padding: 15,
    marginTop: 250,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#ffffff", // Adjust text color as needed
    fontSize: 16, // Adjust font size as needed
    fontWeight: "bold", // Adjust font weight as needed
  },
});

export default SignUpProcess;
