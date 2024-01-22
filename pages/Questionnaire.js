import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const options = [
  {
    title: "Diverse Investment Opportunities",
    description:
      "\nAccess a wide range of investment options for diversifying your portfolio.",
  },
  {
    title: "Competitive Returns",
    description:
      "\nEarn competitive returns on your investments with Sophtera.",
  },
  {
    title: "Property Ownership",
    description:
      "\nExplore real estate ownership opportunities with secure investments.",
  },
  {
    title: "Learn",
    description:
      "\nI want to be a real-estate investor and start with Sophtera.",
  },
];

const Questionnaire = () => {
  return (
    <View style={styles.questionnaire}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.overlapGroup}>
          <Text style={styles.whatsYourPrimary}>
            What's Your Primary Motivation for Investing with Sophtera
          </Text>
        </View>

        {/* Question and Answer Options */}
        <View style={styles.frame2}>
          {/* Iterate through options and create radio button components */}
          {options.map((option, index) => (
            <TouchableOpacity key={index} style={styles.radioButton}>
              <View style={styles.valueMargin}>
                <Text style={styles.value}>
                  <Text style={styles.span}>{option.title}</Text>
                  <Text style={styles.textWrapper2}>{option.description}</Text>
                </Text>
                <View style={styles.ellipse} />
              </View>
              <Image
                style={styles.line}
                source={require("../assets/Line 12.png")}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.buttonsInstance}>
          <Text style={styles.designComponentInstanceNode}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionnaire: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#ffffff",
    width: 375,
    height: 812,
  },
  textWrapper: {
    color: "#23272D",
    fontSize: 15,
    fontFamily: "Inter",
    fontWeight: "400",
  },
  backArrow: {
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
  },
  vuesaxLinearArrow: {
    width: 16,
    height: 16,
  },
  overlapGroup: {
    backgroundColor: "var(--secondaryblue-50)",
    borderRadius: 14 /* Adjust for bottom corners only */,
    height: 220,
    width: 375,
  },
  whatsYourPrimary: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: "Inter",
    fontWeight: "500",
    padding: 30,
  },
  frame2: {
    marginTop: 30,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  valueMargin: {
    flexDirection: "row",
    marginLeft: 20,
  },
  value: {
    flexDirection: "column",
    marginBottom: 10,
  },
  span: {
    color: "#23272D",
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "600",
  },
  textWrapper2: {
    color: "#8F9BB3",
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: "400",
  },
  ellipse: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: "#DCDDE0",
    marginLeft: 10,
  },
  selectedEllipse: {
    borderColor: "blue",
    borderWidth: 2,
  },
  line: {
    marginLeft: 16,
  },
  buttonsInstance: {
    marginTop: 30,
    backgroundColor: "#07C675",
    borderRadius: 4,
    paddingVertical: 12,
  },
  designComponentInstanceNode: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "500",
    textAlign: "center",
  },
});

export default Questionnaire;
