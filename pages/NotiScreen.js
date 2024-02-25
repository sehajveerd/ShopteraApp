import React from "react";
import { View, Image, Text, StyleSheet, Font, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { COLORS } from "./Colors.js";

const NotiScreen = () => {
  return (
    <View styles={styles.container}>
      <Text style={styles.text}>Enable push notifications</Text>
      <Text style={styles.text2}>
        Unlock a Seamless Experience by Enabling Push Notifications. Receive
        Real-Time Updates, Investment Opportunities, and Exclusive Alerts. Be
        the First to Know and Take Control of Your Investment Journey!
      </Text>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 8,
            paddingBottom: 15,
            backgroundColor: COLORS.primary,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 360,
            marginLeft: 80,
            marginRight: 80,
          }}
          onPress={() => {}}
        >
          <Text style={styles.text3}>Enable Notifications</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "Red Hat Display",
    fontSize: 24,
    color: COLORS.secondary,
    paddingTop: 120,
    paddingHorizontal: 60,
  },
  text2: {
    fontFamily: "Red Hat Display",
    fontSize: 14,
    color: COLORS.secondary,
    paddingHorizontal: 60,
    paddingTop: 15,
  },
  text3: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: "Poppins",
  },
  innerContainer: {
    flex: 1,
  },
  innerContainer2: {
    flex: 1,
  },
});
export default NotiScreen;
