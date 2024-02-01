import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const PhoneNPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleContinue = () => {};

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/BackArrow.png")}
        style={styles.backArrow}
      />

      <Text style={styles.header}>Enter your phone number</Text>
      <Text style={styles.headerDescription}>
        To enhance the security of your account and keep you informed about any
        critical updates, kindly provide your phone number as a backup contact.
        Please note that we'll only use it for account-related notifications and
        not for unsolicited calls. Your privacy and security are our top
        priorities.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="000-000-0000 "
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity
        style={phoneNumber ? styles.button : styles.disabledButton}
        onPress={phoneNumber ? handleContinue : () => {}}
        disabled={!phoneNumber}
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
export default PhoneNPage;
