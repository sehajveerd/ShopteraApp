import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Questionnaire1 = () => {
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
          backgroundColor: "#DDEFFF",
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
            color: "#27476E",
            fontSize: 24,
            fontFamily: "Red Hat Display",
            fontWeight: "700",
            lineHeight: 33.84,
            wordWrap: "break-word",
          }}
        >
          What's Your Primary Motivation for Investing{"\n"}
          with Sophtera
        </Text>
      </View>

      <Image
        source={require("../assets/BackArrow.png")}
        style={{
          width: 16,
          height: 16,
          left: 33,
          top: 58,
          position: "absolute",
        }}
      />

      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.content}>
            <Text style={styles.title}>Diverse Investment Opportunities</Text>
            <Text style={styles.subtitle}>
              Access a wide range of investment options for diversifying your
              portfolio.
            </Text>
          </View>
          <View style={styles.circle} />
        </View>
        <View style={styles.border} />
      </View>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.content}>
            <Text style={styles.title}>Competitive Returns</Text>
            <Text style={styles.subtitle}>
              Earn competitive returns on your investments with Sophtera.
            </Text>
          </View>
          <View style={styles.circle} />
        </View>
        <View style={styles.border} />
      </View>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.content}>
            <Text style={styles.title}>Property Ownership</Text>
            <Text style={styles.subtitle}>
              Explore real estate ownership opportunities with secure
              investments.
            </Text>
          </View>
          <View style={styles.circle} />
        </View>
        <View style={styles.border} />
      </View>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.content}>
            <Text style={styles.title}>Learn</Text>
            <Text style={styles.subtitle}>
              I want to be a real-estate investor and start with Sophtera
            </Text>
          </View>
          <View style={styles.circle} />
        </View>
        <View style={styles.border} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Continue</Text>
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
    height: 69,
    paddingVertical: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
    marginHorizontal: 8,
  },
  title: {
    color: "#484848",
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: "400",
    lineHeight: 26,
    wordWrap: "break-word",
  },
  subtitle: {
    width: "90%",
    color: "#484848",
    fontSize: 12,
    fontFamily: "Poppins",
    fontWeight: "400",
    lineHeight: 20,
    wordWrap: "break-word",
  },
  circle: {
    width: 16,
    height: 16,
    top: 28,
    right: 20,
    borderRadius: 9999,
    borderColor: "#484848",
    borderWidth: 1,
  },
  border: {
    top: 10,
    alignSelf: "stretch",
    height: 0,
    borderColor: "#DDEFFF",
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

export default Questionnaire1;
