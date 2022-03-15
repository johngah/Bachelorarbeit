import React, { Fragment, useEffect, useRef, useState } from "react";
import MapView, { Marker, Overlay } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import * as Location from "expo-location";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArrivalPopUp from "../Components/ArrivalPopUp";
import CompletedPopUp from "../Components/CompletedPopUp";
import { Icon } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from "../Components/BottomSheet";
import stations from "../data";
import MusicPlayer from "../Components/MusicPlayer";
import stationData from "../stationData";
import LocationDetails from "./LocationDetails";

function App({ navigation }) {
  const [arrivalPopupVisible, setArrivalPopupVisible] = useState(false);
  const [completedPopupVisible, setCompletedPopupVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const refRBSheet = useRef();
  const [pressedMarker, setPressedMarker] = useState(0);

  const [station, setStation] = useState(0);
  const [pin, setPin] = useState({
    latitude: stations[station].lat,
    longitude: stations[station].long,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
    })();
  }, []);

  const markers = stationData.map((item) => {
    return (
      <Marker
        coordinate={stationData[item.id].coordinate}
        onPress={() => (refRBSheet.current.open(), setPressedMarker(item.id))}
        key={item.name}
      >
        <Image
          source={require("../assets/marker.png")}
          style={{ width: 45, height: 45 }}
          resizeMode="contain"
        />
      </Marker>
    );
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        showsPointsOfInterest={false}
        userInterfaceStyle="light"
        // Gives lat and long when user moves, updates the state TODO: Update store to change directions
        onUserLocationChange={(e) => {
          console.log("onUserLocationChange", e.nativeEvent.coordinate);
          setPin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
        }}
        // Updates the region when the user moves

        tintColor="red"
        initialRegion={{
          latitude: 52.152929,
          longitude: 9.952418,
          latitudeDelta: 0.012,
          longitudeDelta: 0.012,
        }}
      >
        {markers}
      </MapView>

      <MusicPlayer
        playing={playing}
        isPlaying={setPlaying}
        style={{ position: "absolute" }}
      />

      <Fragment>
        <SafeAreaView style={{ position: "absolute" }}>
          {/* Arrival PopUp-Card */}
          <View>
            <ArrivalPopUp visible={arrivalPopupVisible}>
              <View style={{ alignItems: "center" }}>
                <View style={styles.header}>
                  <TouchableOpacity
                    onPress={() => setArrivalPopupVisible(false)}
                    style={{
                      backgroundColor: "#EDECE5",
                      borderRadius: 25,
                    }}
                  >
                    <Icon
                      name="close-outline"
                      type="ionicon"
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.primaryHeadline}>
                  Sie haben das Ziel erreicht
                </Text>
                <Text style={styles.secondaryHeadline}>
                  Wie möchten Sie fortfahren?
                </Text>
                <TouchableOpacity
                  onPress={() => console.log("AudioTourBeginnen")}
                  style={styles.primaryBtn}
                >
                  <Text>Audio-Tour beginnen</Text>
                </TouchableOpacity>
              </View>
            </ArrivalPopUp>
          </View>

          {/* Completed PopUp-Card */}
          <View>
            <CompletedPopUp visible={completedPopupVisible}>
              <View style={{ alignItems: "center" }}>
                <Icon
                  name="checkmark-circle"
                  type="ionicon"
                  size={200}
                  color="black"
                />
                <Text style={styles.primaryHeadline}>
                  Station abgeschlossen!
                </Text>
                <TouchableOpacity
                  onPress={() => setCompletedPopupVisible(false)}
                  style={styles.primaryBtn}
                >
                  <Text>Nächste Station</Text>
                </TouchableOpacity>
              </View>
            </CompletedPopUp>
          </View>

          {/* Bottom Card */}
          <View>
            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              dragFromTopOnly={true}
              customStyles={{
                wrapper: {
                  backgroundColor: "transparent",
                },
                container: {
                  borderRadius: 20,
                  backgroundColor: "#223843",
                },
              }}
            >
              <SafeAreaView style={styles.BCcontainer}>
                <View style={{ alignItems: "flex-end" }}>
                  <TouchableOpacity
                    onPress={() => refRBSheet.current.close()}
                    style={{
                      position: "absolute",
                      backgroundColor: "#EDECE5",
                      borderRadius: 25,
                    }}
                    hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                  >
                    <Icon
                      name="close-outline"
                      type="ionicon"
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.BCstationText}>
                  {pressedMarker + 1}. Station
                </Text>
                <Text style={styles.BCname}>
                  {stationData[pressedMarker].name}
                </Text>
                <Text style={styles.BCdistance}>
                  {stationData[pressedMarker].distance}
                </Text>
                <TouchableOpacity
                  style={styles.BCbutton}
                  onPress={() => {
                    navigation.navigate("LocationDetails", {
                      pressedMarker: pressedMarker,
                    });
                    refRBSheet.current.close();
                  }}
                >
                  <Text style={styles.BCbtnText}>Mehr Infos</Text>
                </TouchableOpacity>
              </SafeAreaView>
            </RBSheet>
          </View>

          {/* PopUp Controls }
          <View>
            <TouchableOpacity onPress={() => setArrivalPopupVisible(true)}>
              <Text>Open Arrival-Popup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCompletedPopupVisible(true)}>
              <Text>Open Completed-Popup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
              <Text>Open Bottom Card</Text>
            </TouchableOpacity>
                </View>{*/}
        </SafeAreaView>
      </Fragment>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={App}
        options={(navigation) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="LocationDetails"
        component={LocationDetails}
        options={() => ({
          headerBackTitleVisible: false,
          headerShown: true,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  header: {
    width: "100%",
    height: 30,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  primaryBtn: {
    height: 50,
    width: "90%",
    backgroundColor: "#EDECE5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  secondaryBtn: {},
  primaryHeadline: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#EDECE5",
    fontWeight: "700",
    marginTop: 10,
  },
  secondaryHeadline: {
    textAlign: "center",
    fontSize: 16,
    color: "#EDECE5",
    fontWeight: "400",
    marginBottom: 30,
  },
  miniPlayer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#EDECE5",
    height: 80,
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  playerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  playerRight: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
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
