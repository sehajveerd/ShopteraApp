import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Font,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "./Colors.js";

const Stack = createNativeStackNavigator();

const NotiScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Enable push notifications</Text>

        <Text style={styles.headerDescription}>
          Unlock a Seamless Experience by Enabling Push Notifications. Receive
          Real-Time Updates, Investment Opportunities, and Exclusive Alerts. Be
          the First to Know and Take Control of Your Investment Journey!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          /* handle button press FOR BACK*/
        }}
      >
        <Text style={styles.button2Text}>Maybe Later</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("LegalName");
        }}
      >
        <Text style={styles.buttonText}>Enable Notifications</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  header: {
    fontSize: 24,
    width: "100%",
    fontWeight: "700",
    lineHeight: 33.84,
    paddingHorizontal: "5%",
    marginTop: 75,
    color: COLORS.secondary,
  },

  headerDescription: {
    fontSize: 13,
    width: "100%",
    paddingHorizontal: "5%",
    marginTop: 10,
    color: COLORS.secondary,
  },

  bodyText: {
    top: 45,
    left: "4%",
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

  button2: {
    backgroundColor: "#E0E0E0",
    borderRadius: 12,
    padding: 13,
    marginLeft: "5%",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    bottom: 65,
    position: "absolute",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  button2Text: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },

  headerContainer: {
    backgroundColor: COLORS.primary,
    height: "60%",
  },
});
export default NotiScreen;
