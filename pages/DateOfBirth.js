import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const isValidDate = (inputStr) => {
  // Define the pattern for "MM-DD-YYYY"
  const pattern = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(\d{4})$/;

  // Check if the input matches the pattern
  const match = inputStr.match(pattern);

  if (match) {
    // Extract the month, day, and year
    const [_, month, day, year] = match;

    // Convert the extracted values to integers
    const intMonth = parseInt(month, 10);
    const intDay = parseInt(day, 10);
    const intYear = parseInt(year, 10);

    // Check if the month is valid (1-12)
    if (1 <= intMonth && intMonth <= 12) {
      // Check if the day is valid for the given month
      if (
        (/[13578]/.test(month) && intDay <= 31) ||
        (/[469]|11/.test(month) && intDay <= 30) ||
        (intMonth === 2 &&
        ((intYear % 4 === 0 && intYear % 100 !== 0) || intYear % 400 === 0)
          ? intDay <= 29
          : intDay <= 28)
      ) {
        return true;
      }
    }
  }

  return false;
};

const DOBPage = ({ navigation }) => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const handleContinue = () => {
    if (isValidDate(dateOfBirth)) {
      navigation.navigate("SSN");
    } else {
      // Invalid date, show an error message or handle accordingly
      Alert.alert("Error", "Please enter a valid date of birth.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("PN")}
        style={{ position: "absolute", left: 20, top: 35 }}
      >
        <Image
          source={require("../assets/BackArrow.png")}
          style={styles.backArrow}
        />
      </TouchableOpacity>

      <Text style={styles.header}>Enter your date of birth</Text>
      <Text style={styles.headerDescription}>
        Please provide your date of birth to verify your identity and ensure
        compliance with legal requirements.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="MM-DD-YYYY"
          value={dateOfBirth}
          onChangeText={(text) => setDateOfBirth(text)}
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity
        style={dateOfBirth ? styles.button : styles.disabledButton}
        onPress={dateOfBirth ? handleContinue : () => {}}
        disabled={!dateOfBirth}
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

  backArrow: {
    height: 15,
    width: 22,
    top: "6%",
    left: "5%",
    zIndex: 1,
  },

  header: {
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

  disabledButton: {
    backgroundColor: "#DCDDE0", // Use a color indicating the button is disabled
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
export default DOBPage;
