import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const UserInfoPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleContinuePress = () => {
    // Handle the logic when the user presses Continue
    // You can use the entered first and last name (firstName and lastName) here
    // For now, let's just log them to the console
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  };
  const handleBackPress = () => {
    // Add your navigation logic here to go back
    navigation.goBack();
  };
  const isContinueButtonEnabled =
    firstName.trim() !== "" && lastName.trim() !== "";

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Image
          source={require("../assets/BackArrow.png")}
          style={styles.backArrow}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Enter your full legal name</Text>
      <Text style={styles.headerDescription}>
        This should match the name on the bank account you're planning to use to
        invest.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.header2Description}>Legal First Name*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <Text style={styles.header2Description}>Legal Last Name*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
      </View>
      {/* Button */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isContinueButtonEnabled ? "#064682" : "#E0E0E0" },
        ]}
        onPress={isContinueButtonEnabled ? handleContinuePress : null}
        disabled={!isContinueButtonEnabled}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    marginLeft: 15,
  },
  backButton: {
    top: "6%",
    left: "5%",
    zIndex: 1,
  },
  backArrow: {
    height: 15,
    width: 22,
  },
  headerText: {
    fontSize: 20,
    width: "100%",
    fontWeight: "700",
    paddingHorizontal: "5%",
    marginTop: 75,
    color: "#064682",
  },
  headerDescription: {
    fontSize: 13,
    width: "100%",
    paddingHorizontal: "5%",
    marginTop: 10,
    paddingBottom: "5%",
  },
  header2Description: {
    fontSize: 11,
    width: "100%",
    marginBottom: 15,
  },
  inputContainer: {
    paddingHorizontal: "5%",
    marginTop: "5%",
  },
  input: {
    height: 50,
    borderColor: "#DCDDE0",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 15,
    width: 340,
  },
  group: {
    height: 35,
    width: 35,
    marginTop: 30,
    marginLeft: 25,
  },
  button: {
    backgroundColor: "#064682",
    borderRadius: 12,
    padding: 13,
    marginTop: "105%",
    marginBottom: 5,
    marginLeft: 7,
    alignItems: "center",
    justifyContent: "center",
    width: 365,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserInfoPage;