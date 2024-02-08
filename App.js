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
import Residence from "./pages/Residence";
import PhoneNumber from "./pages/PhoneNumberScreen";
import DateOfBirth from "./pages/DateOfBirth";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignUpProcess" component={SignUpProcess} />
        <Stack.Screen name="Q1" component={Questionnaire1} />
        <Stack.Screen name="Q2" component={Questionnaire2} />
        <Stack.Screen name="Q3" component={Questionnaire3} />
        <Stack.Screen name="Q4" component={Questionnaire4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
