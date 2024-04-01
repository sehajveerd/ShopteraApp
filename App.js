import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
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
import NetWorth from "./pages/NetWorthScreen";
import SSN from "./pages/SSNSCreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AddressManual from "./pages/AddressManual";
import AddressAuto from "./pages/AddressAutomatic";
import AboutUs from "./pages/AboutUsScreen";
import Setting from "./pages/SettingScreen";
import ConfirmNumber from "./pages/ConfirmPhone1";
import ConfirmNumberSuccess from "./pages/ConfirmPhoneSuccess";
import PersonalInfo from "./pages/PersonalInfo";
import HomeScreen from "./pages/HomeScreen";
import InvestScreen from "./pages/InvestScreen";
import LearnScreen from "./pages/LearnScreen";
import CommunityScreen from "./pages/CommunityScreen";
import Tabs from "./pages/Tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeIcon = require("./assets/HomeIcon.png");
const HomeOutlineIcon = require("./assets/OutlinedHome.png");

const InvestIcon = require("./assets/Invest (1).png");
const InvestOutlineIcon = require("./assets/Invest.png");

const LearnIcon = require("./assets/Learn (1).png");
const LearnOutlineIcon = require("./assets/Learn.png");

const CommunityIcon = require("./assets/Community (1).png");
const CommunityOutlineIcon = require("./assets/Community.png");

export default function App() {
  return <AddressManual />;
  /*
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpProcess" component={SignUpProcess} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="NotiScreen" component={NotiScreen} />
        <Stack.Screen name="About" component={AboutUs} />
        <Stack.Screen name="Q1" component={Questionnaire1} />
        <Stack.Screen name="Q2" component={Questionnaire2} />
        <Stack.Screen name="Q3" component={Questionnaire3} />
        <Stack.Screen name="Q4" component={Questionnaire4} />
        <Stack.Screen
          name="RecapOfPreferences"
          component={RecapOfPreferences}
        />
        <Stack.Screen name="LegalName" component={LegalName} />
        <Stack.Screen name="Residence" component={Residence} />
        <Stack.Screen name="AddressManual" component={AddressManual} />
        <Stack.Screen name="PN" component={PhoneNumber} />
        <Stack.Screen name="DOB" component={DateOfBirth} />
        <Stack.Screen name="SSN" component={SSN} />
        <Stack.Screen name="NW" component={NetWorth} />
      </Stack.Navigator>
    </NavigationContainer>
  );*/
}
