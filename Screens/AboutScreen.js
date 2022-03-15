import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const AboutScreen = () => {
  const [open, setopen] = useState(false);
  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setopen(!open);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Informationen für Eltern und Begeleitpersonen
        </Text>
        <Text style={styles.headline}>
          Strecke und Länge der Audioguide-Tour
        </Text>
        <Text style={styles.text}>
          Die durchschnittliche Dauer, um den Weg des Audioguides komplett
          abzugehen, beträgt 90 Minuten. Diese Zeit kann je nach Geschwindigkeit
          oder Anzahl und Länge der Pausen variieren. Die zu gehende Strecke
          beträgt ca. 2,5 Kilometer. Im Folgenden finden Sie eine Auflistung der
          unterschiedlichen Stationen des Audioguides mit den Dazugehörigen
          Tracks.
        </Text>

        <TouchableOpacity
          style={[styles.item, !open && { height: 65 }]}
          onPress={onPress}
          activeOpacity={1}
        >
          <View style={styles.header}>
            <Text style={styles.bigText}>Track</Text>
            <Text style={styles.smallText}>Ort</Text>
          </View>
          {open && (
            <View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={styles.description}>1-5</Text>
                <Text style={{ top: 20, marginRight: 35 }}>Marktplatz</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 47 }}>6</Text>
                <Text style={styles.description}>
                  Marktplatz - Fußgängerzone
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 27 }}>7-10</Text>
                <Text style={styles.description}>Fußgängerzone</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 44 }}>11</Text>
                <Text style={styles.description}>
                  Fußgängerzone - Zuckerhut
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 44 }}>12</Text>
                <Text style={styles.description}>Zuckerhut</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 22 }}>13-16</Text>
                <Text style={styles.description}>Andreasplatz</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 22 }}>17-19</Text>
                <Text style={styles.description}>Andreaspassage</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 17 }}>20-22</Text>
                <Text style={styles.description}>Andreasplatz</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 41 }}>23</Text>
                <Text style={styles.description}>
                  Andreasplatz - Huckup-Statue (Schuhstraße)
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 41 }}>24</Text>
                <Text style={styles.description}>
                  Huckup-Statue (Schuhstraße)
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 17 }}>25-27</Text>
                <Text style={styles.description}>Schuhstraße</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 41 }}>28</Text>
                <Text style={styles.description}>Hindenburgplatz</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 41 }}>29</Text>
                <Text style={styles.description}>Küsthardtstraße</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 18 }}>30-32</Text>
                <Text style={styles.description}>Neustädter Markt</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 41 }}>33</Text>
                <Text style={styles.description}>
                  Neustädter Markt - Knollenstraße
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 18 }}>33-35</Text>
                <Text style={styles.description}>Knollenstraße</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 41 }}>36</Text>
                <Text style={styles.description}>
                  Knollenstraße - Kesslerstraße
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 18 }}>37-38</Text>
                <Text style={styles.description}>Kesslerstraße</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 18 }}>39-42</Text>
                <Text style={styles.description}>Kehrwiederwall</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 41 }}>43</Text>
                <Text style={styles.description}>
                  Kehrwiederwall - Lappenberg
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 41 }}>44</Text>
                <Text style={styles.description}>Lappenberg</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 41 }}>45</Text>
                <Text style={styles.description}>Gelber Stern</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 18 }}>46-49</Text>
                <Text style={styles.description}>Brühl</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 42 }}>50</Text>
                <Text style={styles.description}>
                  Heilig-Kreuz-Kirche - Schuhstraße
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 43 }}>51</Text>
                <Text style={styles.description}>Schuhstraße</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 41 }}>52</Text>
                <Text style={styles.description}>Judenstraße</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ top: 20, marginRight: 18 }}>53-59</Text>
                <Text style={styles.description}>Marktplatz</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>

        <Text style={[styles.headline, { top: 25 }]}>Zusätzliche Kosten</Text>
        <Text style={[styles.text, { top: 35 }]}>
          In Track 56 wird die Aufforderung gegeben, eine Handynummer anzurufen.
          Dies können Sie entweder über ihr eigenes Mobiltelefon oder über eine
          Telefonzelle vor Ort tun. Es handelt sich dabei um eine Standardnummer
          des deutschen Mobilfunknetzes. Die KOsten für den Anruf über Handy
          entsprechen den normalen Tarifen Ihres Mobilfunkanbieters.
        </Text>

        <Text style={[styles.headline, { top: 40 }]}>
          Geheimtipp zur Lösung des Audioguides
        </Text>
        <Text style={[styles.text, { top: 50 }]}>
          Falls Sie nicht alle Zahlen herausbekommen haben, da z.B. nicht
          genügend Zeit war bzw. die falschen Zahlen notiert wurden, kann die
          Geschichte trotzdem bis zum Ende angehört werden. Dazu einfach Track
          59 auswählen. Dort wird die richtige Zahlenkombination verraten.
        </Text>

        <Text style={[styles.headline, { top: 60 }]}>Sicherheitshinweis</Text>
        <Text style={[styles.text, { top: 70 }]}>
          Bei der Auswahl der Strecke des Audioguides stand die Sicherheit aller
          Teilnehmenden im Mittelpunkt. Trotzdem schränkt das Tragen eines
          Kopfhörers die Wahrnehmung der Umwelt besonders bei Kindern ein. Es
          gilt stets auf den Straßenverkehr und die Mitmenschen zu achten. Der
          Produzent des Audioguides übernimmt keine Haftung.
        </Text>

        <Text style={[styles.headline, { top: 80 }]}>
          Hinweis für Menschen mit einer körperlichen Beeinträchtigung
        </Text>
        <Text style={[styles.text, { top: 90 }]}>
          Alle Orte des Audioguides sind für Menschen mit Rollstuhl zu
          erreichen. Allerdings muss bei Track 43 ein Alternativweg genommen
          werden um zum Lappenberg zu kommen. Der Audioguide kann dann einfach
          wieder ab Track 44 gestartet werden.
        </Text>
        <View style={{ height: 120 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EDECE5",
  },
  item: {
    width: Dimensions.get("screen").width,
    height: 800,
    backgroundColor: "#C1C1C1",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 5,
    top: 15,
    //orderRadius: 5,
    overflow: "hidden",
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
    left: 10,
  },
  description: {
    top: 20,
    marginRight: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    margin: 15,
  },
  headline: {
    fontWeight: "bold",
    marginLeft: 15,
  },
  text: {
    marginHorizontal: 15,
    top: 10,
    marginBottom: 10,
    lineHeight: 20,
  },
});
