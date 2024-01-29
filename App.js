import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./pages/SplashScreen";
import SignUpProcess from "./pages/SignUpProcess";
import Questionnaire1 from "./pages/Questionnaire1";
import Questionnaire2 from "./pages/Questionnaire2";
import Questionnaire3 from "./pages/Questionnaire3";
import Questionnaire4 from "./pages/Questionnaire4";
import WelcomeScreen from "./pages/WelcomeScreen";

export default function App() {
  return <SignUpProcess />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
