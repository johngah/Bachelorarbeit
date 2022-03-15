import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import stationData from "../stationData";

const LocationDetails = (props) => {
  const pressedMarker = props.route.params.pressedMarker;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={stationData[pressedMarker].path}
        style={{ width: Dimensions.get("screen").width, height: 300 }}
        //resizeMode="contain"
      />
      <View style={styles.container}>
        <Text style={styles.title}>{stationData[pressedMarker].name}</Text>
        <Text style={styles.description}>
          {stationData[pressedMarker].desc}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LocationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDECE5",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    margin: 20,
  },
  description: {
    lineHeight: 25,
    marginHorizontal: 20,
  },
});
