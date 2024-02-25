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

const Questionnaire4 = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "27%",
          left: 0,
          top: 0,
          position: "absolute",
          backgroundColor: COLORS.primary,
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
            color: COLORS.secondary,
            fontSize: 24,
            fontFamily: "Red Hat Display",
            fontWeight: "700",
            lineHeight: 33.84,
            wordWrap: "break-word",
          }}
        >
          What type of investor are{"\n"}
          you?
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Q3")}
        style={{ position: "absolute", left: 33, top: 58 }}
      >
        <Image
          source={require("../assets/BackArrow.png")}
          style={{ width: 22, height: 15 }}
        />
      </TouchableOpacity>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.section}
          onPress={() => handleOptionSelect("Accredited")}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Accredited</Text>
            <Text style={styles.subtitle}>...</Text>
          </View>
          <RadioButton.Android
            value="Accredited"
            status={selectedOption === "Accredited" ? "checked" : "unchecked"}
            onPress={() => handleOptionSelect("Accredited")}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <View style={styles.border} />
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.section}
          onPress={() => handleOptionSelect("Unaccredited")}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Unaccredited</Text>
            <Text style={styles.subtitle}>...</Text>
          </View>
          <RadioButton.Android
            value="Unaccredited"
            status={selectedOption === "Unaccredited" ? "checked" : "unchecked"}
            onPress={() => handleOptionSelect("Unaccredited")}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <View style={styles.border} />
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.section}
          onPress={() => handleOptionSelect("Institutional")}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Institutional</Text>
            <Text style={styles.subtitle}>...</Text>
          </View>
          <RadioButton.Android
            value="Institutional"
            status={
              selectedOption === "Institutional" ? "checked" : "unchecked"
            }
            onPress={() => handleOptionSelect("Institutional")}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <View style={styles.border} />
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.section}
          onPress={() => handleOptionSelect("I don't know")}
        >
          <View style={styles.content}>
            <Text style={styles.title}>I don't know</Text>
            <Text style={styles.subtitle}>...</Text>
          </View>
          <RadioButton.Android
            value="I don't know"
            status={selectedOption === "I don't know" ? "checked" : "unchecked"}
            onPress={() => handleOptionSelect("I don't know")}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <View style={styles.border} />
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          selectedOption && { backgroundColor: COLORS.primary },
        ]}
        onPress={() => {
          if (selectedOption) {
            // Do something with the selectedOption
            console.log("Selected Option:", selectedOption);
            navigation.navigate("RecapOfPreferences");
          }
        }}
      >
        <Text style={[styles.buttonText, selectedOption && { color: "white" }]}>
          Continue
        </Text>
      </TouchableOpacity>
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
    height: 60,
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
    fontWeight: "700",
    lineHeight: 26,
    wordWrap: "break-word",
  },
  subtitle: {
    // Add the content one the figma designs are ready
    width: "90%",
    color: COLORS.textColor,
    fontSize: 12,
    fontFamily: "Poppins",
    fontWeight: "400",
    lineHeight: 20,
    wordWrap: "break-word",
  },
  circle: {
    width: 16,
    height: 16,
    top: 20,
    right: 20,
    borderRadius: 9999,
    borderColor: COLORS.textColor,
    borderWidth: 1,
  },
  border: {
    top: 0,
    alignSelf: "stretch",
    height: 0,
    borderColor: COLORS.secondary,
    borderWidth: 1,
  },
  button: {
    width: 320,
    height: 54,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    left: 28,
    top: 734,
    position: "absolute",
    backgroundColor: "#E8E8E8",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  buttonText: {
    textAlign: "center",
    color: "#BFBFBF",
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: "600",
    wordWrap: "break-word",
  },
});

export default Questionnaire4;
