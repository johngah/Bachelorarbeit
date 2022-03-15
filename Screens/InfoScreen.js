import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import infoData from "../infoData";
import { Icon } from "react-native-elements";
import AboutScreen from "./AboutScreen";

const Stack = createNativeStackNavigator();

function InfoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Informationen"
        component={InfoScreen}
        options={(navigation) => ({
          headerLargeTitle: true,
          headerStyle: {
            backgroundColor: "#EDECE5",
          },
        })}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
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

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

function InfoScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ top: 45 }}
          onPress={() => navigation.navigate("AboutScreen")}
        >
          <Icon
            name="dots-horizontal-circle-outline"
            type="material-community"
            size={26}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.infoText}>
        Falls ich mal zu komplizierte Wörter benutzt oder zu schnell gesprochen
        habe, findest Du hier ein paar Erklärungen.
      </Text>

      <FlatList
        data={infoData}
        keyExtractor={(item) => item.frage}
        renderItem={({ item }) => (
          <Item track={item.track} frage={item.frage} text={item.text} />
        )}
      />
    </SafeAreaView>
  );
}

function Item(props) {
  const [open, setopen] = useState(false);
  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setopen(!open);
  };
  return (
    <TouchableOpacity
      style={[styles.item, !open && { height: 65 }]}
      onPress={onPress}
      activeOpacity={1}
    >
      <View style={styles.header}>
        <Text style={styles.bigText}>{props.track}</Text>
        <Text style={styles.smallText}>{props.frage}</Text>
      </View>
      {open && (
        <View>
          <Text style={styles.description}>{props.text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default InfoStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //padding: 50,
    backgroundColor: "#EDECE5",
  },
  infoText: {
    marginHorizontal: 15,
    marginTop: 15,
    color: "#777673",
    fontSize: 18,
    fontWeight: "400",
  },
  header: {
    flexDirection: "row",
  },
  bigText: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
    top: 10,
  },
  smallText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#464646",
    top: 10,
    left: 6,
  },
  description: {
    top: 20,
  },
  scrollView: {
    width: Dimensions.get("screen").width,
  },
  item: {
    width: Dimensions.get("screen").width,
    height: 150,
    backgroundColor: "#C1C1C1",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 5,
    top: 15,
    //orderRadius: 5,
    overflow: "hidden",
  },
});
