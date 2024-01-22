import React from "react";
import { View, Image, Text, StyleSheet, Font, Dimensions } from "react-native";
import {TouchableOpacity} from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Sophtera</Text>
      <Text style={styles.text2}>Experience Hassle-Free Real Estate Investing at Your Fingertips. Manage your portfolio and join related communities</Text>
        <View style={styles.innerContainer}>
            <Image
                style={styles.image}
                source={require("../assets/Building.png")}
                alt="building"
            />
    <View style={styles.innerContainer2}>
    <TouchableOpacity
        style={{
            
            position: 'absolute',
            bottom: 20,
            width: '80%',
            height: '40',
            backgroundColor: '#DDEFFF',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
        }}
    >
      <Text style={{
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.20)',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '600',
        wordWrap: 'break-word'
      }}>
        Log In
      </Text>
    </TouchableOpacity>
    </View>
        </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    flex: 1,
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 36,
    width: '100%',
    fontWeight: '500',
    wordWrap: 'break-word',
    paddingHorizontal: 20,
    marginTop: 60,
  },
  text2: {
    fontFamily: "Poppins",
    fontSize: 12,
    lineHeight: 22,
    color: "#4D4D4D",
    fontWeight: "400",
    wordWrap: "break-word",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  image: {
    /* width: "80%",
    height: "80%",
    position: "absolute",
    top: 110,
    width: 630,
    height: 239,
    */
   marginTop: 70,
   width: windowWidth,
   height: windowHeight * 0.5,
   resizeMode: 'contain',
   paddingBottom: 60,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  innerContainer2: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 260,
    backgroundColor: "#3365b6",
  },
});

export default WelcomeScreen;
