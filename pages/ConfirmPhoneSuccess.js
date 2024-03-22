import React, { useState } from "react";
import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { COLORS } from "./Colors.js";

const VerificationPage = ({ route, navigation }) => {
  const { phoneNumber } = '231';
  const [verificationCode, setVerificationCode] = useState("");
  const [modalVisible, setModalVisible] = useState(true);

  const handleContinuePress = () => {
    //Enter navigation
    
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  const formatVerificationCode = (text) => {
    return text
      .replace(/\D/g, '')
      .slice(0, 4)
  };

  const handleSendAgain = () => {
    // Functionality to send the code again
    console.log("Sending code again...");
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.header}>Confirm Your Number</Text>
          <Image
            source={require("../assets/GreenWaves.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/PNRSuccess.png")}
            style={styles.image1}
          />
          <Text style={styles.helperText}>Your phone number has been updated!</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleContinuePress}
          >
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", 
  },
  helperText: {
    fontSize: 14,
    marginLeft: "22%",
  },
  modalView: {
    width: "100%",
    height: "100%",
    margin: 20,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentContainer: {
    padding: 35, 
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 15,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    fontSize: 20,
    fontWeight: "70",
    marginLeft: 105,
    color: COLORS.primary,
    marginTop: 15,
  },
  phoneNumber: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "25%",
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: -20,
    marginBottom: 20,
    marginLeft: "10%",
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
    width: "75%",
    marginLeft: "12%",
    marginTop: "5%",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    marginTop: -25,
    marginBottom: -25,
    width: "100%",
    resizeMode: "contain", 
  },
  image1: {
    marginTop: -350,
    marginBottom: -325,
    marginLeft: '27%',
    width: "50%",
    resizeMode: "contain", 
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default VerificationPage;
