import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import InvestScreen from "./InvestScreen";
import LearnScreen from "./LearnScreen";
import CommunityScreen from "./CommunityScreen";

const Tab = createBottomTabNavigator();

const HomeIcon = require("../assets/HomeIcon.png");
const HomeOutlineIcon = require("../assets/OutlinedHome.png");

const InvestIcon = require("../assets/Invest (1).png");
const InvestOutlineIcon = require("../assets/Invest.png");

const LearnIcon = require("../assets/Learn (1).png");
const LearnOutlineIcon = require("../assets/Learn.png");

const CommunityIcon = require("../assets/Community (1).png");
const CommunityOutlineIcon = require("../assets/Community.png");

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "Home") {
            icon = focused ? (
              <Image
                source={HomeOutlineIcon}
                style={{ width: size, height: size }}
              />
            ) : (
              <Image source={HomeIcon} style={{ width: size, height: size }} />
            );
          } else if (route.name === "Invest") {
            icon = focused ? (
              <Image
                source={InvestOutlineIcon}
                style={{ width: size, height: size }}
              />
            ) : (
              <Image
                source={InvestIcon}
                style={{ width: size, height: size }}
              />
            );
          } else if (route.name === "Learn") {
            icon = focused ? (
              <Image
                source={LearnOutlineIcon}
                style={{ width: size, height: size }}
              />
            ) : (
              <Image source={LearnIcon} style={{ width: size, height: size }} />
            );
          } else if (route.name === "Community") {
            icon = focused ? (
              <Image
                source={CommunityOutlineIcon}
                style={{ width: size, height: size }}
              />
            ) : (
              <Image
                source={CommunityIcon}
                style={{ width: size, height: size }}
              />
            );
          }

          return icon;
        },
        tabBarLabel: () => null,
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Invest" component={InvestScreen} />
      <Tab.Screen name="Learn" component={LearnScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
