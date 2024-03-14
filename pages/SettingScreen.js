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
import { COLORS } from "./Colors.js";

const Stack = createNativeStackNavigator();

const SettingScreen = ({ navigation }) => {
  const handleContinue = () => {
    navigation.navigate("");
  };

  return (
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

      <Text style={styles.header}>Settings</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("")}
        style={styles.personalInfoButton}
      >
        <Text style={styles.personalInfoButtonText}>Personal Information</Text>
        <Image
          source={require("../assets/Vector.png")}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("")}
        style={styles.personalInfoButton}
      >
        <Text style={styles.personalInfoButtonText}>Payments and Payouts</Text>
        <Image
          source={require("../assets/Vector.png")}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("")}
        style={styles.personalInfoButton}
      >
        <Text style={styles.personalInfoButtonText}>Taxes</Text>
        <Image
          source={require("../assets/Vector.png")}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("")}
        style={styles.personalInfoButton}
      >
        <Text style={styles.personalInfoButtonText}>Documents</Text>
        <Image
          source={require("../assets/Vector.png")}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("")}
        style={styles.personalInfoButton}
      >
        <Text style={styles.personalInfoButtonText}>Privacy and Sharing</Text>
        <Image
          source={require("../assets/Vector.png")}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("")}
        style={styles.personalInfoButton}
      >
        <Text style={styles.personalInfoButtonText}>Login Information</Text>
        <Image
          source={require("../assets/Vector.png")}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <View style={styles.navBar}>
        <Image
          source={require("../assets/Home.png")}
          style={styles.navOptions}
        />
        <Image
          source={require("../assets/Invest.png")}
          style={styles.navOptions}
        />
        <Image
          source={require("../assets/Learn.png")}
          style={styles.navOptions}
        />
        <Image
          source={require("../assets/Community.png")}
          style={styles.navOptions}
        />
      </View>
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
  personalInfoButton: {
    flexDirection: "row",
    justifyContent: "space-between", // Aligns items to each end
    alignItems: "center", // Centers items vertically
    backgroundColor: COLORS.white,
    width: "90%",
    marginTop: 20,
    marginLeft: "5%",
    borderColor: COLORS.lightGray,
    borderBottomWidth: 1,
  },
  personalInfoButtonText: {
    fontSize: 13,
    paddingVertical: 10,
    marginLeft: 10,
  },
  arrowIcon: {
    width: 8,
    height: 13,
    marginRight: 10, // Adjust as needed for spacing between text and icon
  },

  header: {
    fontSize: 30,
    width: "100%",
    fontWeight: "700",
    paddingHorizontal: "5%",
    marginTop: 75,
    color: COLORS.primary,
  },
  navBar: {
    flexDirection: "row",
    backgroundColor: "#EEEEE",
    height: "10%",
    bottom: 0,
    position: "absolute",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
  },

  navOptions: {
    width: "10%",
  },
});
export default SettingScreen;
