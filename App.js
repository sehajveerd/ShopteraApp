import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./pages/SplashScreen";
import SignUpProcess from "./pages/SignUpProcess";
import Questionnaire1 from "./pages/Questionnaire1";
import Questionnaire2 from "./pages/Questionnaire2";
import Questionnaire3 from "./pages/Questionnaire3";
import Questionnaire4 from "./pages/Questionnaire4";
import WelcomeScreen from "./pages/WelcomeScreen";
import LoginScreen from "./pages/LoginScreen";
import NotiScreen from "./pages/NotiScreen";
import RecapOfPreferences from "./pages/RecapOfPreferences";
import LegalName from "./pages/LegalName";

export default function App() {
  return <Questionnaire2 />;
}
