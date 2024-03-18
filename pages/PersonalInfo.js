import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CountryPicker from "react-native-country-picker-modal";
import { COLORS } from "./Colors.js";

const Stack = createNativeStackNavigator();

const PersonalInfo = ({ navigation }) => {
  const [email, setEmail] = useState("example@example.com");
  const [phoneNumber, setPhoneNumber] = useState("+1234567890");
  const [birthDay, setBirthday] = useState("06-19-1985");
  const [address, setAddress] = useState(
    "XYZ W Kreplin St, Los Angeles, CA, XXXXX"
  );

  const handleEditEmail = () => {
    // Navigate to screen where user can edit email
    navigation.navigate("EditEmailScreen");
  };

  const handleEditPhoneNumber = () => {
    // Navigate to screen where user can edit phone number
    navigation.navigate("EditPhoneNumberScreen");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddressManual")}
        style={{ position: "absolute", left: 20, top: 35 }}
      >
        <Image
          source={require("../assets/arrow-left.png")}
          style={styles.backArrow}
        />
      </TouchableOpacity>

      <Text style={styles.header}>Personal Information</Text>
      <View style={styles.profPic}>
        <Image
          source={require("../assets/Group 2984.png")}
          style={styles.photo}
        />
      </View>
      <Image source={require("../assets/Frame 3252.png")} style={styles.edit} />
      <View style={styles.nameContainer}>
        <Text style={styles.NameTage}>Legit First Name*</Text>
        <Text style={styles.Name}>Greg</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.NameTage}>Legit Last Name*</Text>
        <Text style={styles.Name}>Lam</Text>
      </View>
      {/* View for Email Address */}
      <View style={[styles.editContainer, { marginTop: 30 }]}>
        <Text style={styles.NameTage}>Email Address*</Text>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={handleEditEmail}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.editContainer}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          editable={false}
          style={{ color: "black" }}
        />
      </View>
      <View style={styles.line} />
      {/* View for Phone Number */}
      <View style={styles.editContainer}>
        <Text style={styles.NameTage}>Phone Number*</Text>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={handleEditPhoneNumber}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.editContainer}>
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          editable={false}
          style={{ color: "black" }}
        />
      </View>
      <View style={styles.line} />
      <View style={styles.editContainer}>
        <Text style={styles.NameTage}>Birthday*</Text>
      </View>
      <View style={styles.editContainer}>
        <TextInput
          value={birthDay}
          onChangeText={setBirthday}
          editable={false}
          style={{ color: "black" }}
        />
      </View>
      <View style={styles.line} />
      <View style={styles.editContainer}>
        <Text style={styles.NameTage}>Resident Address*</Text>
      </View>
      <View style={styles.editContainer}>
        <TextInput
          value={address}
          onChangeText={setAddress}
          editable={false}
          style={{ color: "black" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  backArrow: {
    width: 30,
    zIndex: 1,
  },
  header: {
    fontSize: 24,
    width: "100%",
    fontWeight: "500",
    paddingHorizontal: "5%",
    marginTop: 75,
    color: COLORS.primary,
  },
  profPic: {
    marginTop: "2%",
    backgroundColor: COLORS.secondary,
    height: "17%",
    width: "40%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  photo: {
    width: "90%",
    height: "80%",
    marginTop: "8%",
  },
  edit: {
    marginTop: 220,
    marginLeft: 100,
    position: "absolute",
  },
  nameContainer: {
    marginTop: "4%",
    height: "5%",
    width: "90%",
    marginLeft: "5%",
  },
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: "5%",
  },
  NameTage: {
    fontSize: 12,
  },
  Name: {
    fontSize: 16,
    marginLeft: "5%",
    marginTop: "2%",
  },
  editButton: {
    color: COLORS.primary,
    fontSize: 12,
    textDecorationLine: "underline",
  },
  line: {
    height: 2,
    backgroundColor: COLORS.secondary,
    marginHorizontal: "5%",
  },
});

export default PersonalInfo;
