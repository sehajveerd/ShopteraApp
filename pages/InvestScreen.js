import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import EditPhoneScreen from "./EditPhoneScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CountryPicker from "react-native-country-picker-modal";
import { COLORS } from "./Colors.js";

const InvestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Invest</Text>
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
    fontWeight: "500",
    paddingHorizontal: "5%",
    marginTop: 75,
    color: COLORS.primary,
  },
});

export default InvestScreen;
