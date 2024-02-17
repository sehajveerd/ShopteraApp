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

const Stack = createNativeStackNavigator();

const DOBPage = ({ navigation }) => {
  const [SSnumber, setSSnumber] = useState("");
  const handleContinue = () => {
    navigation.navigate("NW");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("DOB")}
        style={{ position: "absolute", left: 20, top: 35 }}
      >
        <Image
          source={require("../assets/BackArrow.png")}
          style={styles.backArrow}
        />
      </TouchableOpacity>

      <Text style={styles.header}>Enter your Social Security number</Text>
      <Text style={styles.headerDescription}>
        Please provide your Social Security number to ensure compliance with
        legal requirements.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="000-000-0000"
          value={SSnumber}
          onChangeText={(text) => setSSnumber(text)}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.NofiItem}>
        <Image source={require("../assets/lock.png")} />
        <Text style={styles.TextBesideImage}>
          Your SSN will be securely encrypted and used only for account
          verification purpose{" "}
        </Text>
      </View>

      <TouchableOpacity
        style={SSnumber ? styles.button : styles.disabledButton}
        onPress={SSnumber ? handleContinue : () => {}}
        disabled={!SSnumber}
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

  NofiItem: {
    backgroundColor: "#DCDDE0",
    padding: 20,
    paddingLeft: 5,
    paddingRight: 5,
    width: "90%",
    paddingHorizontal: "5%",
    alignSelf: "center",
    flexDirection: "row",
  },

  TextBesideImage: {
    marginLeft: 5, // Adjust the margin as needed to create space between image and text
    marginRight: 40,
    fontSize: 12, // Adjust the font size based on your design
    color: "black", // Adjust the text color based on your design
  },
});
export default DOBPage;
