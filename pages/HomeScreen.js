import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Modal,
} from "react-native";
import EditPhoneScreen from "./EditPhoneScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CountryPicker from "react-native-country-picker-modal";
import { COLORS } from "./Colors.js";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Welcome, Name!</Text>
        <Text style={styles.subHeader}>
          Earn Passive and Active Income through
          {"\n"}
          Crowdfunded Real Estate Investments
        </Text>
        <View style={styles.textContainer}>
          <View style={styles.containerLeft}>
            <Text style={styles.text}>
              Add bank information to begin your
              {"\n"}
              investment journey. Let's get started!
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Continue Investing</Text>
            </TouchableOpacity>
            <Text style={styles.text2}>Change my selections</Text>
          </View>
          <View style={styles.containerRight}>
            <Image
              source={require("../assets/bank.png")}
              style={styles.image}
            />
          </View>
        </View>
        <Text style={styles.header2}>Possible Future Properties</Text>
        <View>
          <View style={styles.propertyCard}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/Rectangle 126.png")}
                style={styles.propertyImage}
              />
            </View>
            <View style={styles.propertyTextContainer}>
              <Text style={styles.propertyHeader}>Camden, London</Text>
              <Text style={styles.propertySubHeader}>United Kindom</Text>
            </View>
          </View>

          <View style={styles.propertyCard}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/Rectangle 127.png")}
                style={styles.propertyImage}
              />
            </View>
            <View style={styles.propertyTextContainer2}>
              <Text style={styles.propertyHeader}>
                Pacific Heights, San Francisco
              </Text>
              <Text style={styles.propertySubHeader}>California, USA</Text>
            </View>
          </View>

          <View style={styles.propertyCard}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/Rectangle 128.png")}
                style={styles.propertyImage}
              />
            </View>
            <View style={styles.propertyTextContainer3}>
              <Text style={styles.propertyHeader}>Mangawhai, Northland</Text>
              <Text style={styles.propertySubHeader}>New Zealand</Text>
            </View>
          </View>

          <View style={styles.propertyCard}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/Rectangle 129.png")}
                style={styles.propertyImage}
              />
            </View>
            <View style={styles.propertyTextContainer4}>
              <Text style={styles.propertyHeader}>Bornheim, Frankfurt</Text>
              <Text style={styles.propertySubHeader}>Germany</Text>
            </View>
          </View>
        </View>
        <Text style={styles.header3}>FAQ</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    top: 33,
    left: 18,
  },
  imageContainer: {
    borderRadius: 9,
    overflow: "hidden",
  },
  propertyImage: {
    width: 253,
    height: 180,
  },
  propertyTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    marginLeft: "24%",
  },
  propertyTextContainer2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    marginLeft: "4%",
  },
  propertyTextContainer3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    marginLeft: "16%",
  },
  propertyTextContainer4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    marginLeft: "20%",
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    width: 135,
    height: 32,
    padding: 8,
    top: 30,
    left: 7,
  },
  propertyCard: {
    height: 280,
    flexDirection: "column",
    alignItems: "top",
    marginLeft: "16%",
    marginTop: "5%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#DCDDE0",
    width: "65%",
    overflow: "hidden",
  },
  propertyHeader: {
    fontSize: 16,
    width: "100%",
    fontWeight: "600",
    color: COLORS.primary,
  },
  propertySubHeader: {
    fontSize: 14,
    width: "100%",
    fontWeight: "400",
    marginTop: "7%",
    color: COLORS.primary,
  },
  buttonText: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 13,
    fontFamily: "Poppins",
    fontWeight: "600",
    wordWrap: "break-word",
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  containerRight: {
    flexDirection: "column",
  },
  containerLeft: {
    flexDirection: "column",
    width: "40",
  },
  textContainer: {
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    flex: 1,
    padding: 10,
    width: "90%",
    height: 140,
    marginLeft: 20,
    marginTop: 28,
    borderRadius: 10,
  },
  header: {
    fontSize: 24,
    width: "100%",
    fontWeight: "500",
    paddingHorizontal: "5%",
    marginTop: 75,
    color: COLORS.primary,
  },
  subHeader: {
    fontSize: 14,
    width: "100%",
    fontWeight: "300",
    paddingHorizontal: "5%",
    marginTop: 10,
    color: COLORS.primary,
  },
  header2: {
    fontSize: 18,
    width: "100%",
    fontWeight: "500",
    paddingHorizontal: "5%",
    marginTop: 20,
    color: COLORS.primary,
  },
  header3: {
    fontSize: 28,
    width: "100%",
    fontWeight: "700",
    paddingHorizontal: "5%",
    textAlign: "center",
    marginTop: 35,
    color: "#484848",
  },
  text: {
    fontSize: 13,
    fontWeight: "400",
    paddingHorizontal: "3%",
    marginTop: 5,
    color: COLORS.primary,
  },
  text2: {
    fontSize: 13,
    fontWeight: "400",
    paddingHorizontal: "4%",
    marginTop: 35,
    color: COLORS.primary,
  },
});

export default HomeScreen;
