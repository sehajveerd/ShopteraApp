import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { COLORS } from "./Colors.js";

const AddressInfoPage = ({ navigation }) => {
  const [address, setAddress] = useState({
    streetNum1: "",
    streetNum2: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });

  const handleContinuePress = () => {
    navigation.navigate("PN");
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const isContinueButtonEnabled =
    address.streetNum1 &&
    address.city &&
    address.state &&
    address.country &&
    address.zipCode;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Image
          source={require("../assets/BackArrow.png")}
          style={styles.backArrow}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Enter your address</Text>
      <Text style={styles.headerDescription}>
        Please enter your primary address.
      </Text>

      {/* Address Input */}
      {/*<View style={styles.inputContainer1}>
        <Text style={styles.addText}>Address Search*</Text>
        <GooglePlacesAutocomplete
          placeholder="Enter Address... 🔍"
          onPress={(data, details = null) => {
            const [houseNumber, street, streetType] = data.description.split(
              " ",
              3
            );
            setAddress({
              streetNum1: houseNumber + " " + street + " " + streetType || "",
              city:
                details?.address_components.find((component) =>
                  component.types.includes("locality")
                )?.long_name || "",
              state:
                details?.address_components.find((component) =>
                  component.types.includes("administrative_area_level_1")
                )?.short_name || "",
              country:
                details?.address_components.find((component) =>
                  component.types.includes("country")
                )?.long_name || "",
              zipCode:
                details?.address_components.find((component) =>
                  component.types.includes("postal_code")
                )?.short_name || "",
            });
          }}
          fetchDetails={true}
          query={{
            key: "AIzaSyBm36yE3Yte9FJX6s8EbhBDBLRtajQ8BIE",
            language: "en",
          }}
          styles={{
            container: styles.autocompleteContainer,
            textInputContainer: styles.textInputContainer,
            textInput: styles.textInput,
            listView: styles.listView,
            description: styles.description,
            row: styles.row,
          }}
        />
      </View>*/}
      <View style={styles.inputContainer}>
        <Text style={styles.addText}>Address Line 1*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Address"
          value={address.streetNum1}
          onChangeText={(text) => setAddress({ ...address, streetNum1: text })}
        />
        <Text style={styles.addText}>Address Line 2 (optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Address"
          value={address.streetNum2}
          onChangeText={(text) => setAddress({ ...address, streetNum2: text })}
        />
        <Text style={styles.addText}>City*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Address"
          value={address.city}
          onChangeText={(text) => setAddress({ ...address, city: text })}
        />
        <Text style={styles.addText}>State*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Address"
          value={address.state}
          onChangeText={(text) => setAddress({ ...address, state: text })}
        />
        <Text style={styles.addText}>Country*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Address"
          value={address.country}
          onChangeText={(text) => setAddress({ ...address, country: text })}
        />
        <Text style={styles.addText}>Zip Code*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Address"
          value={address.zipCode}
          onChangeText={(text) => setAddress({ ...address, zipCode: text })}
        />
      </View>

      {/* Button */}
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: isContinueButtonEnabled
              ? COLORS.primary
              : "#E0E0E0",
          },
        ]}
        onPress={isContinueButtonEnabled ? handleContinuePress : null}
        disabled={!isContinueButtonEnabled}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    marginLeft: 15,
    position: "relative",
  },
  addressDisplayContainer: {
    paddingHorizontal: "5%",
    marginTop: 450,
    marginBottom: 20,
  },
  addressText: {
    fontSize: 16,
    marginBottom: 5,
  },
  backButton: {
    top: "6%",
    left: "5%",
    zIndex: 1,
  },
  backArrow: {
    height: 15,
    width: 22,
  },
  addressText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "5%",
    marginBottom: 20,
  },
  switchText: {
    marginLeft: 10,
    fontSize: 16,
  },
  headerText: {
    fontSize: 20,
    width: "100%",
    fontWeight: "700",
    paddingHorizontal: "5%",
    marginTop: 75,
    color: COLORS.primary,
  },
  addText: {
    fontSize: 13,
    width: "100%",
    marginBottom: 12,
  },
  headerDescription: {
    fontSize: 13,
    width: "100%",
    paddingHorizontal: "5%",
    marginTop: 10,
    marginBottom: "2%",
  },
  inputContainer: {
    paddingHorizontal: "5%",
    marginTop: "5%",
    marginRight: 15,
    zIndex: 1,
  },
  inputContainer1: {
    paddingHorizontal: "5%",
    marginTop: "5%",
    marginRight: 15,
    marginBottom: 30,
  },
  textInputContainer: {
    width: "100%",
  },
  textInput: {
    height: 40,
    borderColor: "#DCDDE0",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    padding: 10,
    marginBottom: 10,
  },
  listView: {
    position: "absolute",
    top: 50,
    backgroundColor: "#ffffff",
    elevation: 4,
    zIndex: 4,
  },
  description: {
    fontSize: 16,
  },
  row: {
    padding: 10,
    height: 40,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: "#DCDDE0",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 13,
    marginTop: "9%",
    marginLeft: 7,
    alignItems: "center",
    justifyContent: "center",
    width: 365,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddressInfoPage;
