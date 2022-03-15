import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";
import { Audio } from "expo-av";

const CompletedScreen = ({ navigation }) => {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/59.wav")
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      playSound();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#EDECE5",
          width: "100%",
        }}
      >
        <Icon
          name="check-circle"
          type="material-design"
          size={100}
          color="green"
          style={{ margin: 20 }}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          Herzlichen Glückwunsch!
        </Text>
        <Text style={{ marginBottom: 10 }}>
          Du hat den Audioguide abgeschlossen.
        </Text>
        <Text>Möchtest du die Tour bewerten?</Text>
        <View style={{ flexDirection: "row", margin: 20 }}>
          <Icon
            name="star-outline"
            type="material-design"
            size={40}
            color="black"
          />
          <Icon
            name="star-outline"
            type="material-design"
            size={40}
            color="black"
          />
          <Icon
            name="star-outline"
            type="material-design"
            size={40}
            color="black"
          />
          <Icon
            name="star-outline"
            type="material-design"
            size={40}
            color="black"
          />
          <Icon
            name="star-outline"
            type="material-design"
            size={40}
            color="black"
          />
        </View>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.text1}>Bewertung abgeben</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.text2}>Überspringen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CompletedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EDECE5",
  },
  btn1: {
    width: 300,
    height: 55,
    backgroundColor: "#D43051",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 50,
  },
  btn2: {
    width: 300,
    height: 55,
    backgroundColor: "#EDECE5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#D43051",
    marginTop: 20,
  },
  text1: {
    color: "#EDECE5",
    fontSize: 16,
    fontWeight: "600",
  },
  text2: {
    color: "#D43051",
    fontSize: 16,
    fontWeight: "600",
  },
});
