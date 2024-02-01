import React, { useState, useEffect } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

const UserInfoPage = () => {
  const [citizenship, setCitizenship] = useState(null);
  const [residence, setResidence] = useState(null);
  const [countries, setCountries] = useState([]);
  const [initialScrollIndex, setInitialScrollIndex] = useState(0);

  useEffect(() => {
    // Fetch the list of countries from the Rest Countries API
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name);
        setCountries(countryNames);

        // Find the index of a default country to be initially selected
        const defaultCountryIndex = countryNames.indexOf("YourDefaultCountry");
        setInitialScrollIndex(defaultCountryIndex);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleContinuePress = () => {
    // Handle the logic when the user presses Continue
    console.log("Country of Citizenship:", citizenship);
    console.log("Country of Residence:", residence);
  };

  const handleBackPress = () => {
    // Add your navigation logic here to go back
    navigation.goBack();
  };

  const isContinueButtonEnabled = citizenship && residence;

  const renderDropdownButton = (defaultValue, options, onSelect) => {
    return (
      <TouchableOpacity style={styles.dropdownButton} onPress={onSelect}>
        <Text style={styles.dropdownButtonText}>{defaultValue}</Text>
      </TouchableOpacity>
    );
  };

  const renderDropdownRow = (rowData, rowID, highlighted) => {
    return (
      <TouchableOpacity style={styles.dropdownRow}>
        <Text style={styles.dropdownRowText}>{rowData}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Image
          source={require("../assets/BackArrow.png")}
          style={styles.backArrow}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Enter your country information</Text>
      <Text style={styles.headerDescription}>
        Please provide your country of citizenship and country of residence.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.header2Description}>Country of Citizenship*</Text>
        <ModalDropdown
          options={countries}
          defaultValue={citizenship || "Select Country of Citizenship"}
          textStyle={[styles.dropdownText, { width: "95%" }]}
          dropdownStyle={styles.dropdownStyle}
          dropdownTextStyle={styles.dropdownTextStyle}
          onSelect={(index, value) => setCitizenship(value)}
          defaultIndex={initialScrollIndex}
        />

        <Text style={styles.header2Description}>Country of Residence*</Text>
        <ModalDropdown
          options={countries}
          defaultValue={residence || "Select Country of Residence"}
          textStyle={[styles.dropdownText, { width: "95%" }]}
          dropdownStyle={[styles.dropdownStyle, { width: "82%" }]}
          dropdownTextStyle={styles.dropdownTextStyle}
          onSelect={(index, value) => setResidence(value)}
          defaultIndex={initialScrollIndex}
        />
      </View>

      {/* Button */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isContinueButtonEnabled ? "#064682" : "#E0E0E0" },
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
  backButton: {
    top: "6%",
    left: "5%",
    zIndex: 1,
  },
  backArrow: {
    height: 15,
    width: 22,
  },
  headerText: {
    fontSize: 20,
    width: "100%",
    fontWeight: "700",
    paddingHorizontal: "5%",
    marginTop: 75,
    color: "#064682",
  },
  headerDescription: {
    fontSize: 13,
    width: "100%",
    paddingHorizontal: "5%",
    marginTop: 10,
    paddingBottom: "5%",
  },
  header2Description: {
    fontSize: 11,
    width: "100%",
    marginBottom: 5,
  },
  inputContainer: {
    paddingHorizontal: "5%",
    marginTop: "5%",
  },
  dropdownText: {
    fontSize: 16,
    padding: 10,
    color: "#000000",
    borderWidth: 1,
    borderColor: "#DCDDE0",
    borderRadius: 8,
  },
  dropdownStyle: {
    height: "auto",
    maxHeight: 350,
    width: 338,
    borderColor: "#DCDDE0",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: -43,
  },
  dropdownTextStyle: {
    fontSize: 16,
    textAlign: "left",
  },
  button: {
    backgroundColor: "#064682",
    borderRadius: 12,
    padding: 13,
    marginTop: "120%",
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

export default UserInfoPage;
