import React, { useState } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Switch } from "react-native";

const AddressInfoPage = ({ navigation }) => {
  const [address, setAddress] = useState({
    houseNumber: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });

  const [isAddressConfirmed, setIsAddressConfirmed] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleContinuePress = () => {
    if (isAddressConfirmed) {
      console.log("Address:", address);
      // Add further logic for handling the address data
    } else {
      // Display an error or prompt the user to confirm the address
      alert("Please confirm that the address is correct.");
    }
  };

  // Enable Continue button only if streetNum1 is provided
  const isContinueButtonEnabled = address.houseNumber.trim() !== "";

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Image
          source={require("../assets/BackArrow.png")}
          style={styles.backArrow}
        />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.headerText}>Enter your address</Text>
      <Text style={styles.headerDescription}>
        Please enter your primary address.
      </Text>

      {/* Address Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.addText}>Enter your address*</Text>
        <GooglePlacesAutocomplete
          placeholder="Enter Address"
          onPress={(data, details = null) => {
            const [houseNumber, street, streetType] = data.description.split(
              " ",
              3
            );
            setAddress({
              houseNumber: houseNumber || "",
              street: street + " " + streetType || "",
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
            key: "",
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
      </View>

      {/* Address Display */}
      <View style={styles.addressDisplayContainer}>
        <Text style={styles.addressText}>Full Address:</Text>
        <Text>{`${address.houseNumber} ${address.street}, ${address.city}, ${address.state}, ${address.country}, ${address.zipCode}`}</Text>
      </View>

      {/* Address Confirmation Switch */}
      <View style={styles.switchContainer}>
        <Switch
          value={isAddressConfirmed}
          onValueChange={(newValue) => setIsAddressConfirmed(newValue)}
        />
        <Text style={styles.switchText}>
          I confirm that the address is correct
        </Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              isAddressConfirmed && isContinueButtonEnabled
                ? "#064682"
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
    backgroundColor: "#ffffff",
    flex: 1,
    marginLeft: 15,
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
    color: "#064682",
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
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    elevation: 2,
  },
  description: {
    fontSize: 16,
  },
  row: {
    padding: 10,
    height: 40,
  },
  button: {
    backgroundColor: "#064682",
    borderRadius: 12,
    padding: 13,
    marginTop: "0%",
    marginLeft: 7,
    alignItems: "center",
    justifyContent: "center",
    width: 365,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddressInfoPage;
