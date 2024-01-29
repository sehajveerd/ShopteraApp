import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./pages/SplashScreen";
import SignUpProcess from "./pages/SignUpProcess";
import Questionnaire from "./pages/Questionnaire";
import WelcomeScreen from "./pages/WelcomeScreen";
import RecapOfPreferences from "./pages/RecapOfPreferences";
import LegalName from "./pages/LegalName";

export default function App() {
  return <LegalName/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
