import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CountryPicker from "react-native-country-picker-modal";
import { COLORS } from "./Colors.js";

const Stack = createNativeStackNavigator();

const EditPhoneScreen = ({ modalVisible, setModalVisible, navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("US");
  const handleContinue = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddressManual")}
            style={{ position: "absolute", left: 20, top: 35 }}
          >
            <Image
              source={require("../assets/arrow-left.png")}
              style={styles.backArrow}
            />
          </TouchableOpacity>

          <Text style={styles.header}>Enter your phone number</Text>

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

        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    height: "93%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
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

  flagLabel: {
    fontSize: 9,
    marginTop: 228,
    marginLeft: 38,
    position: "absolute",
    height: 50,
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

  rowContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "5%",
    marginBottom: 10,
    paddingHorizontal: "5%",
    marginTop: "5%",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#DCDDE0",
    width: "90%",
  },

  line: {
    height: "100%",
    width: 2,
    backgroundColor: "#DCDDE0", // Adjust the color to your preference
    marginHorizontal: 10,
  },
});

export default EditPhoneScreen;
