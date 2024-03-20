import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "./Colors.js";

const Stack = createNativeStackNavigator();

const NetWorth = ({ navigation }) => {
  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleContinue = () => {
    // Handle the continue logic here
    console.log("Continue button pressed with option:", selectedOption);
    navigation.navigate("Tabs");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SSN")}
          style={{ position: "absolute", left: 20, top: 35 }}
        >
          <Image
            source={require("../assets/arrow-left.png")}
            style={styles.backArrow}
          />
        </TouchableOpacity>

        <Text style={styles.header}>
          What is your estimated net{"\n"}worth?
        </Text>

        <Text style={styles.headerDescription}>
          Please select your estimated net worth
        </Text>
      </View>

      <Text style={styles.bodyText}>Estimated net worth</Text>

      <ModalDropdown
        options={options}
        defaultValue={"Choose an option"}
        onSelect={(index, value) => setSelectedOption(value)}
        style={styles.dropdownMenu}
        textStyle={{
          fontSize: 16,
        }}
        dropdownStyle={{
          width: 365,
          right: "5%",
        }}
        dropdownTextStyle={{
          fontSize: 16,
        }}
      />

      <TouchableOpacity
        style={selectedOption ? styles.button : styles.disabledButton}
        onPress={selectedOption ? handleContinue : () => {}}
        disabled={!selectedOption}
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
  },

  backArrow: {
    width: 30,
    zIndex: 1,
  },
  header: {
    fontSize: 24,
    width: "100%",
    fontWeight: "700",
    lineHeight: 33.84,
    paddingHorizontal: "5%",
    marginTop: 75,
    color: COLORS.primary,
  },

  headerDescription: {
    fontSize: 13,
    width: "100%",
    paddingHorizontal: "5%",
    marginTop: 10,
    color: COLORS.primary,
  },

  bodyText: {
    top: 45,
    left: "4%",
  },

  dropdownMenu: {
    width: 365,
    top: 50,
    left: "4%",
    width: 365,
    borderWidth: 1,
    borderColor: "#ccc",
    borderTopWidth: 0, // Set to 0 to remove top border
    borderLeftWidth: 0, // Set to 0 to remove left border
    borderRightWidth: 0, // Set to 0 to remove right border
    borderRadius: 8,
    padding: 10,
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

  headerContainer: {
    backgroundColor: COLORS.secondary,
    height: "35%",
  },
});

export default NetWorth;
