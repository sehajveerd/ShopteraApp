import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Font,
} from "react-native";
import { COLORS } from "./Colors.js";
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
      <Text style={styles.text2}>Log In your account</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.text3}>Email:</Text>
        <View
          style={{
            paddingLeft: 20,
            paddingTop: 14,
            paddingBottom: 14,
            backgroundColor: "white",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#E8E8E8",
            justifyContent: "flex-start",
            flexDirection: "row",
            paddingHorizontal: 40,
            marginLeft: 80,
            marginRight: 80,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              color: "#BFBFBF",
              fontSize: 14,
              fontFamily: "Poppins",
              fontWeight: "400",
              paddingRight: 30,
            }}
          >
            "abcd@gmail.com"
          </TextInput>
        </View>
        <Text style={styles.text3}>Password:</Text>
        <View
          style={{
            paddingLeft: 20,
            paddingTop: 14,
            paddingBottom: 14,
            backgroundColor: "white",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#E8E8E8",
            justifyContent: "flex-start",
            flexDirection: "row",
            marginLeft: 80,
            marginRight: 80,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              color: "#BFBfBF",
              fontSize: 14,
              fontFamily: "Poppins",
              fontWeight: "400",
              paddingRight: 30,
            }}
          >
            Enter Password
          </TextInput>
        </View>
        <TouchableOpacity
          style={{
            left: 43,
            right: 10,
            top: 280,
            bottom: 8,
            backgroundColor: COLORS.primary,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 300,
          }}
          onPress={() => navigation.navigate("NotiScreen")}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 14,
              fontFamily: "Poppins",
              fontWeight: "600",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    flex: 1,
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 36,
    width: "100%",
    fontWeight: "500",
    wordWrap: "break-word",
    paddingHorizontal: 80,
    marginTop: 60,
    paddingTop: 120,
  },
  text2: {
    fontFamily: "Poppins",
    fontSize: 12,
    lineHeight: 22,
    color: "#4D4D4D",
    fontWeight: "400",
    wordWrap: "break-word",
    width: "100%",
    paddingHorizontal: 80,
    paddingTop: 5,
  },
  innerContainer: {
    flex: 1,
  },
  text3: {
    fontFamily: "Poppins",
    fontSize: 16,
    marginTop: 20,
    paddingHorizontal: 80,
    paddingTop: 10,
  },
});
export default LoginScreen;
