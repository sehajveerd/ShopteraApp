import React from "react";
import { View, Image, Text, StyleSheet, Font } from "react-native"; // Assuming React Native
import { COLORS } from "./Colors.js";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={require("../assets/Group 2971.png")}
          alt="Group"
        />
        <Text style={styles.text}>Sophtera</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    backgroundColor: "#3365b6",
    width: "100%",
    height: "100%",
  },
  image: {
    width: 197,
    height: 233,
    position: "absolute",
    top: 210,
    left: 90,
  },
  text: {
    position: "absolute",
    top: 730,
    left: 131,
    // Replicating linear-gradient text effect (adjust as needed):
    backgroundColor:
      "linear-gradient(180deg, rgba(13, 101, 182, 0.1), rgba(177, 217, 255, 0.75))",
    backgroundClip: "text",
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
    fontWeight: "600",
  },
});

export default SplashScreen;
