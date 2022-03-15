import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("TabNavigator")}
      onDone={() => navigation.navigate("TabNavigator")}
      pages={[
        {
          backgroundColor: "#FF9696",
          image: (
            <Image
              source={require("../assets/onboarding1.png")}
              style={{ width: 300, height: 300, borderRadius: 10 }}
            />
          ),
          title: "Erkunden",
          subtitle: "Folge dem Audioguide und entdecke spielerisch Hildesheim",
        },
        {
          backgroundColor: "#9DACFF",
          image: (
            <Image
              source={require("../assets/onboarding2.png")}
              style={{ width: 300, height: 300, borderRadius: 10 }}
            />
          ),
          title: "Hören",
          subtitle:
            "Die Geschichte leitet dich, wähle nur die passenden Tracks",
        },
        {
          backgroundColor: "#38D191",
          image: (
            <Image
              source={require("../assets/huckupImg.png")}
              style={{ width: 300, height: 300, borderRadius: 10 }}
            />
          ),
          title: "Lösen",
          subtitle:
            "Finde die Lösungszahlen und befreie die Freundin von Hildemar",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
