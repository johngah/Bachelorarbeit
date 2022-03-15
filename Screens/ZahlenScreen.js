import { StyleSheet, Text, SafeAreaView, TextInput, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { withTheme } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import CompletedScreen from "./CompletedScreen";
import CompletedPopUp from "../Components/CompletedPopUp";
import { Icon } from "react-native-elements";

const Stack = createNativeStackNavigator();

function ZahlenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lösungszettel"
        component={ZahlenScreen}
        options={(navigation) => ({
          headerLargeTitle: true,
          headerStyle: {
            backgroundColor: "#EDECE5",
          },
        })}
      />
      <Stack.Screen
        name="CompletedScreen"
        component={CompletedScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}

const ZahlenScreen = ({ navigation }) => {
  const [zahl01, onZahl01Change] = useState(null);
  const [zahl02, onZahl02Change] = useState(0);
  const [zahl03, onZahl03Change] = useState(0);
  const [zahl04, onZahl04Change] = useState(0);
  const [zahl05, onZahl05Change] = useState(0);
  const [zahl06, onZahl06Change] = useState(0);
  const [zahl07, onZahl07Change] = useState(0);
  const [zahl08, onZahl08Change] = useState(0);
  const [zahl09, onZahl09Change] = useState(0);
  const [zahl10, onZahl10Change] = useState(0);
  const [zahl11, onZahl11Change] = useState(0);
  const [zahl12, onZahl12Change] = useState(0);
  const [completedPopupVisible, setCompletedPopupVisible] = useState(false);

  function checkForWin() {
    if (
      zahl01 === "0" &&
      zahl02 === "1" &&
      zahl03 === "7" &&
      zahl04 === "6" &&
      zahl05 === "5" &&
      zahl06 === "7" &&
      zahl07 === "8" &&
      zahl08 === "7" &&
      zahl09 === "3" &&
      zahl10 === "8" &&
      zahl11 === "3" &&
      zahl12 === "0"
    ) {
      console.log("Hurray");
      navigation.navigate("CompletedScreen");
    } else {
      setCompletedPopupVisible((prev) => !prev);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.infoText}>
        Der Huckup hat in ganz Hildesheim Zahlen versteckt. Kannst Du sie finden
        und in die passenden Kästchen eintragen?
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.column}>
          <Text>Marktplatz</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            returnKeyType="done"
            textAlign="center"
            onChangeText={(val) => onZahl01Change(val)}
          />
        </View>
        <View style={styles.column}>
          <Text>Miniatur</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            returnKeyType="done"
            textAlign="center"
            onChangeText={(val) => onZahl02Change(val)}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.column}>
          <Text>Zuckerhut</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            returnKeyType="done"
            textAlign="center"
            onChangeText={(val) => onZahl03Change(val)}
          />
        </View>
        <View style={styles.column}>
          <Text>Radio TK</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            returnKeyType="done"
            textAlign="center"
            onChangeText={(val) => onZahl04Change(val)}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.column}>
          <Text>Andreasturm</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            returnKeyType="done"
            textAlign="center"
            onChangeText={(val) => onZahl05Change(val)}
          />
        </View>
        <View style={styles.column}>
          <Text>Huckup</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            returnKeyType="done"
            textAlign="center"
            onChangeText={(val) => onZahl06Change(val)}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.column}>
          <Text>Katzenbrunnen</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            returnKeyType="done"
            textAlign="center"
            onChangeText={(val) => onZahl07Change(val)}
          />
        </View>
        <View style={styles.column}>
          <Text>Pferdekopf</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            returnKeyType="done"
            textAlign="center"
            onChangeText={(val) => onZahl08Change(val)}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.column}>
          <Text>Pfarrfest</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            returnKeyType="done"
            textAlign="center"
            onChangeText={(val) => onZahl09Change(val)}
          />
        </View>
        <View style={styles.column}>
          <Text>Mädchen mit Glocke</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            returnKeyType="done"
            textAlign="center"
            onChangeText={(val) => onZahl10Change(val)}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.column}>
          <Text>Seminarkirche</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            returnKeyType="done"
            textAlign="center"
            onChangeText={(val) => onZahl11Change(val)}
          />
        </View>
        <View style={styles.column}>
          <Text>Knochenhaueramt</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            returnKeyType="done"
            textAlign="center"
            onChangeText={(val) => onZahl12Change(val)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={checkForWin}>
        <Text style={styles.btnText}>Zahlen überprüfen</Text>
      </TouchableOpacity>
      <View>
        <CompletedPopUp visible={completedPopupVisible}>
          <View style={{ alignItems: "center" }}>
            <Icon
              name="close-circle-outline"
              type="ionicon"
              size={200}
              color="black"
            />
            <Text style={styles.primaryHeadline}>
              Diese Zahlen stimmen nicht!
            </Text>
            <TouchableOpacity
              onPress={() => setCompletedPopupVisible(false)}
              style={styles.primaryBtn}
            >
              <Text>Nochmal probieren</Text>
            </TouchableOpacity>
          </View>
        </CompletedPopUp>
      </View>
    </SafeAreaView>
  );
};

export default ZahlenStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EDECE5",
  },
  infoText: {
    marginHorizontal: 15,
    marginTop: 15,
    color: "#777673",
    fontSize: 18,
    fontWeight: "400",
  },
  input: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: 4,
    alignContent: "center",
    fontSize: 24,
    marginLeft: 10,
    color: "#D43051",
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
    margin: 7,
  },
  btn: {
    width: "90%",
    height: 55,
    backgroundColor: "#D43051",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    shadowColor: "black",
    shadowRadius: 0.7,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    elevation: 5,
  },
  btnText: {
    color: "#EDECE5",
    fontSize: 18,
    fontWeight: "600",
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
});
