import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS } from "./Colors.js";

const recaps = [
  {
    title: "Investment Motivation:",
    selection: "Diverse Investment Opportunities",
    description:
      "Access a wide range of investment options for diversifying your portfolio.",
  },
  {
    title: "Investment Experience:",
    selection: "Proficient",
    description:
      "I have some investment knowledge and prior experience in financial markets.",
  },
  {
    title: "Investment Style:",
    selection: "Hands-off",
    description:
      "Experience hands-free investing with personalized AI recommendations and expert guidance for a worry-free journey.",
  },
];

const RecapPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Frame149.png")} // Assuming image is in same directory
        style={styles.group}
        alt="Group"
      />
      <Text style={styles.headerText}>Here's a Recap of Your Preferences</Text>
      <FlatList
        data={recaps}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.recapItem}>
            <Text style={styles.recapTitle}>{item.title}</Text>
            <Text style={styles.recapSelection}>{item.selection}</Text>
            <Text style={styles.recapDescription}>{item.description}</Text>
          </View>
        )}
      />
      {/* Button */}
      <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          /* handle button press FOR BACK*/
        }}
      >
        <Text style={styles.button2Text}>I want to make changes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("LegalName");
        }}
      >
        <Text style={styles.buttonText}>Sounds Good</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    width: "100%",
    fontWeight: "700",
    paddingHorizontal: 20,
    marginTop: 0,
    color: COLORS.primary,
    marginLeft: 0,
  },
  recapItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#DCDDE0",
    padding: 20,
    width: "95%",
  },
  recapTitle: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: "700",
    marginBottom: 8,
  },
  recapSelection: {
    fontSize: 16,
    color: "#011222",
    fontWeight: "700",
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 5,
    paddingHorizontal: 20,
  },
  recapDescription: {
    fontSize: 13,
    lineHeight: 22,
    color: "#4D4D4D",
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: 5,
    width: "100%",
    paddingHorizontal: 20,
  },
  group: {
    height: 35,
    width: 35,
    marginTop: 75,
    marginLeft: 25,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 13,
    marginBottom: 10,
    marginLeft: "5%",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },

  button2: {
    backgroundColor: "#E0E0E0",
    borderRadius: 12,
    padding: 13,
    marginBottom: 10,
    marginLeft: "5%",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
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
});

export default RecapPage;
