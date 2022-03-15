import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import stationData from "../stationData";
import LocationDetails from "../Screens/LocationDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function BottomCardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomSheet"
        component={BottomSheet}
        options={(navigation) => ({
          headerLargeTitle: true,
          headerStyle: {
            backgroundColor: "#EDECE5",
          },
        })}
      />
      <Stack.Screen
        name="LocationDetails"
        component={LocationDetails}
        options={() => ({
          headerBackTitleVisible: false,
          headerTintColor: "black",
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#EDECE5",
          },
        })}
      />
    </Stack.Navigator>
  );
}

const BottomSheet = (props, { navigation }) => {
  return (
    <SafeAreaView style={styles.BCcontainer}>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          onPress={() => console.log("jsdhfg")}
          style={{
            position: "absolute",
            backgroundColor: "#EDECE5",
            borderRadius: 25,
          }}
        >
          <Icon name="close-outline" type="ionicon" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.BCstationText}>
        {props.pressedMarker + 1}. Station
      </Text>
      <Text style={styles.BCname}>{stationData[props.pressedMarker].name}</Text>
      <Text style={styles.BCdistance}>
        {stationData[props.pressedMarker].distance}
      </Text>
      <TouchableOpacity
        style={styles.BCbutton}
        onPress={() => navigation.navigate("LocationDetails")}
      >
        <Text style={styles.BCbtnText}>Mehr Infos</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  BCcontainer: {
    marginHorizontal: 25,
  },
  BCstationText: {
    fontSize: 16,
    color: "#EFF1F3",
  },
  BCname: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 6,
  },
  BCdistance: {
    color: "#EFF1F3",
    opacity: 0.6,
    fontSize: 17,
  },
  BCbutton: {
    backgroundColor: "#D43051",
    width: "100%",
    height: 60,
    marginVertical: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  BCbtnText: {
    color: "#EDECE5",
    fontSize: 20,
    fontWeight: "700",
  },
});
