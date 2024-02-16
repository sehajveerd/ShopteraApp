import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CountryPicker from "react-native-country-picker-modal";

const Stack = createNativeStackNavigator();

const PhoneNPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("US");
  const handleContinue = () => {
    navigation.navigate("DOB");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("NW")}
        style={{ position: "absolute", left: 20, top: 35 }}
      >
        <Image
          source={require("../assets/BackArrow.png")}
          style={styles.backArrow}
        />
      </TouchableOpacity>

      <Text style={styles.header}>Enter your phone number</Text>
      <Text style={styles.headerDescription}>
        To enhance the security of your account and keep you informed about any
        critical updates, kindly provide your phone number as a backup contact.
        Please note that we'll only use it for account-related notifications and
        not for unsolicited calls. Your privacy and security are our top
        priorities.
      </Text>
      {/* Phone number TextInput */}

      <Text style={styles.flagLabel}>country code</Text>
      <View style={styles.rowContainer}>
        <CountryPicker
          onSelect={(country) => setCountryCode(country.cca2)}
          countryCode={countryCode}
          withCountryNameButton={false}
          withCallingCode={true}
          withCallingCodeButton={true}
          containerButtonStyle={{
            flexDirection: "row",
            alignItems: "center",
          }}
        />

        <View style={styles.line} />
        {/* Line separating flag and phone number */}
        <TextInput
          placeholder="000-000-0000"
          value={phoneNumber}
          onChangeText={(text) => {
            if (text.length <= 10) {
              setPhoneNumber(text);
            }
          }}
          keyboardType="phone-pad"
          maxLength={10}
        />
      </View>

      {/* Continue button */}
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
    paddingBottom: "0%",
  },

  flagLabel: {
    fontSize: 9,
    marginTop: 228,
    marginLeft: 38,
    position: "absolute",
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

  rowContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginBottom: 10,
    paddingHorizontal: "5%",
    marginTop: "5%",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#DCDDE0",
    width: 340,
  },

  line: {
    height: "100%",
    width: 2,
    backgroundColor: "#DCDDE0", // Adjust the color to your preference
    marginHorizontal: 10,
  },
});
export default PhoneNPage;
