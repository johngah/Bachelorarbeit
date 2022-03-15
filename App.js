import { StyleSheet, Text, View, SafeAreaView, Fragment } from "react-native";
import MapScreen from "./Screens/MapScreen";
import InfoScreen from "./Screens/InfoScreen";
import ZahlenScreen from "./Screens/ZahlenScreen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import OnboardingScreen from "./Screens/OnboardingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const dark = "#ff4c98";
const light = "#D43051";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerShown={false}>
        <Stack.Screen
          name="onboarding"
          component={OnboardingScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    /*<View>
      <MusicPlayer />
    </View>*/
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Karte" // TODO: Set Map to be the first Screen
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#D43051" },
        tabBarActiveTintColor: "#F4F3EE",
        tabBarShowLabel: true,
        activeTintColor: "#F4F3EE",
        tabBarIcon: ({ color, focused }) => {
          let icon;
          if (route.name === "Lösung") {
            icon = "format-list-numbered";
          } else if (route.name === "Karte") {
            icon = "map-outline";
          } else {
            icon = "information-outline";
          }
          return (
            <Icon
              name={icon}
              type="material-community"
              color={focused ? "#F4F3EE" : "#D3909A"}
              size={30}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Lösung" component={ZahlenScreen} />
      <Tab.Screen name="Karte" component={MapScreen} route="map" />
      <Tab.Screen name="Info" component={InfoScreen} />
    </Tab.Navigator>
  );
};

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.TabBarContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const color = isFocused ? light : "#aaa";
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress()}
            activeOpacity={1}
          >
            {index === 0 && (
              <View style={styles.tabIcon}>
                {isFocused ? (
                  <Icon
                    name="format-list-numbered"
                    type="material-community"
                    size={30}
                    color={color}
                  />
                ) : (
                  <Icon
                    name="format-list-numbered"
                    type="material-community"
                    size={30}
                    color={color}
                  />
                )}
              </View>
            )}
            {index === 1 && (
              <LinearGradient
                colors={[light, dark]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.tabMiddleIcon}
              >
                {isFocused ? (
                  <Icon
                    name="map-marker-radius"
                    type="material-community"
                    size={30}
                    color={"white"}
                  />
                ) : (
                  <Icon
                    name="map-marker-radius-outline"
                    type="material-community"
                    size={30}
                    color={"white"}
                  />
                )}
              </LinearGradient>
            )}
            {index === 2 && (
              <View style={styles.tabIcon}>
                {isFocused ? (
                  <Icon
                    name="information"
                    type="material-community"
                    size={30}
                    color={color}
                  />
                ) : (
                  <Icon
                    name="information-outline"
                    type="material-community"
                    size={30}
                    color={color}
                  />
                )}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  TabBarContainer: {
    height: 83,
    backgroundColor: "#223843",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  tabMiddleIcon: {
    bottom: 25,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    elevation: 8,
  },
});
