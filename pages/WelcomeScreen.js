import React from "react";
import { View, Image, Text, StyleSheet, Font, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "./Colors.js";

const Stack = createNativeStackNavigator();

const WelcomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: COLORS.primary,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "66%",
          left: 0,
          top: 0,
          position: "absolute",
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
        }}
      />

      <View
        style={{
          height: 102,
          paddingLeft: 32,
          paddingRight: 32,
          left: 0,
          top: 97,
          position: "absolute",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 8,
          display: "flex",
        }}
      >
        <Text
          style={{
            color: COLORS.primary,
            fontSize: 44,
            fontFamily: "Poppins",
            fontWeight: "450",
            lineHeight: 44,
            wordWrap: "break-word",
          }}
        >
          Welcome to Sophtera
        </Text>
        <Text
          style={{
            color: COLORS.primary,
            fontSize: 15,
            fontWeight: "300",
            lineHeight: 33.84,
            wordWrap: "break-word",
          }}
        >
          Experience Hassle-Free Real Estate Investing at Your Fingertips.
          Manage your portfolio and join related communities
        </Text>
        <Image
          style={styles.image}
          source={require("../assets/Building.png")}
          alt="building"
        />
      </View>
      <View style={[styles.buttonsContainer]}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            navigation.navigate("LoginScreen");
            console.log("Log In");
          }}
        >
          <Text style={[styles.buttonText]}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2]}
          onPress={() => {
            navigation.navigate("SignUpProcess");
            console.log("Sign Up");
          }}
        >
          <Text style={[styles.button2Text]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "88%",
    height: "8%",
    flexDirection: "column",
    top: 245,
    left: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 12,
  },
  section: {
    height: 70,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  content: {
    flex: 1,
    height: 69,
    paddingVertical: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
    marginHorizontal: 8,
  },
  title: {
    color: COLORS.textColor,
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: "400",
    lineHeight: 26,
    wordWrap: "break-word",
  },
  subtitle: {
    width: "90%",
    color: COLORS.textColor,
    fontSize: 12,
    fontFamily: "Poppins",
    fontWeight: "50",
    lineHeight: 10,
    wordWrap: "break-word",
  },
  border: {
    top: 10,
    alignSelf: "stretch",
    height: 0,
    borderColor: COLORS.secondary,
    borderWidth: 1,
  },
  button: {
    width: 100,
    height: 44,
    right: 10,
    bottom: 8,
    left: 44,
    top: 734,
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: COLORS.primary,
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: "600",
    wordWrap: "break-word",
  },
  image: {
    width: 330,
    height: 180,
    top: 110,
    resizeMode: "contain",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  button2: {
    width: 100,
    height: 44,
    right: 10,
    bottom: 8,
    left: 60,
    top: 734,
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  button2Text: {
    textAlign: "center",
    color: COLORS.primary,
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: "600",
    wordWrap: "break-word",
  },
});

export default WelcomeScreen;
