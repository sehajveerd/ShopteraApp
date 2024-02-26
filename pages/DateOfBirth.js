import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "./Colors.js";

const Stack = createNativeStackNavigator();

const DOBPage = ({ navigation }) => {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleContinue = () => {
    if (dateOfBirth) {
      navigation.navigate("SSN");
    } else {
      // Invalid date, show an error message or handle accordingly
      Alert.alert("Error", "Please select a valid date of birth.");
    }
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDateOfBirth(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("PN")}
        style={{ position: "absolute", left: 20, top: 35 }}
      >
        <Image
          source={require("../assets/arrow-left.png")}
          style={styles.backArrow}
        />
      </TouchableOpacity>

      <Text style={styles.header}>Select your date of birth</Text>
      <Text style={styles.headerDescription}>
        Please provide your date of birth to verify your identity and ensure
        compliance with legal requirements.
      </Text>

      <TouchableOpacity
        style={styles.datePickerContainer}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.dateText}>
          {dateOfBirth.toLocaleDateString("en-US")}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={dateOfBirth}
          mode="date"
          display="spinner"
          onChange={onDateChange}
        />
      )}

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
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: "center",
  },

  backArrow: {
    width: 30,
    zIndex: 1,
  },

  header: {
    fontSize: 20,
    width: "100%",
    fontWeight: "700",
    paddingHorizontal: "5%",
    marginTop: 75,
    color: COLORS.primary,
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
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 13,
    marginLeft: "5%",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    bottom: 10,
    position: "absolute",
  },

  disabledButton: {
    backgroundColor: "#DCDDE0", // Use a color indicating the button is disabled
    borderRadius: 12,
    padding: 13,
    marginLeft: "5%",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    bottom: 10,
    position: "absolute",
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },

  datePickerContainer: {
    paddingHorizontal: "5%",
    marginTop: "5%",
    width: "90%",
    height: 50,
    borderColor: "#DCDDE0",
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 10,
  },

  dateText: {
    paddingLeft: 15,
    color: COLORS.black,
  },
});
export default DOBPage;
