import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import Slider from "@react-native-community/slider";
import React, { useState, useEffect } from "react";
import { Icon } from "react-native-elements";
import { BlurView } from "expo-blur";
import trackData from "../trackData";
import { Audio } from "expo-av";
import { useRef } from "react";

const { height, width } = Dimensions.get("screen");

const MusicPlayer = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const [showTracks, setShowTracks] = useState(false);
  const [selectedTrack, selectTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderDragPosition, setSliderDragPosition] = useState(0);
  const [duration, setDuration] = useState(null);
  const [position, setPosition] = useState(null);
  const [sound, setSound] = React.useState(null);

  const statusUpdate = (playbackStatus) => {
    if (playbackStatus.isLoaded && playbackStatus.isPlaying) {
      setPosition(playbackStatus.positionMillis);
      setDuration(playbackStatus.durationMillis);
    }
  };

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      trackData[selectedTrack].path
    );
    setSound(sound);

    if (!isPlaying) {
      console.log("Playing Sound");
      await sound.playAsync();
      setIsPlaying(true);
    }

    if (isPlaying) {
      console.log("Playing Sound");
      await sound.pauseAsync();
      setIsPlaying(false);
    }

    sound.setOnPlaybackStatusUpdate(statusUpdate);
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function prev() {
    if (selectedTrack - 1 < 0) {
      return;
    } else {
      await sound.stopAsync();
      setIsPlaying(false);
      selectTrack((prev) => prev - 1);
      console.log(selectedTrack);
      setPosition(null);
      setSliderDragPosition(0);
    }
  }

  async function next() {
    if (sound) {
      if (selectedTrack + 1 > trackData.length - 1) {
        return;
      } else {
        await sound.stopAsync();
        setIsPlaying(false);
        selectTrack((prev) => prev + 1);
        console.log(selectedTrack);
        setPosition(null);
        setSliderDragPosition(0);
      }
    }
  }

  const calculateSeekbar = () => {
    if (position !== null && duration !== null) {
      return position / duration;
    }
    return 0;
  };

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <BlurView
      style={[styles.player, { height: isExpanded ? height * 0.83 : 80 }]}
      intensity={60}
      tint="light"
      onPress={() => setExpanded((prev) => !prev)}
    >
      {!isExpanded && (
        <View style={styles.miniPlayer}>
          <TouchableOpacity
            style={styles.dragger}
            onPress={() => setExpanded((prev) => !prev)}
            hitSlop={{ top: 20, left: 120, bottom: 40, right: 50 }}
          />

          <View style={styles.playerLeft}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: "gray",
                borderRadius: 5,
                margin: 10,
              }}
            ></View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                Track {trackData[selectedTrack].name}
              </Text>
              <Text style={{ color: "#70706E" }}>
                {trackData[selectedTrack].station}
              </Text>
            </View>
          </View>

          <View style={styles.playerRight}>
            <TouchableOpacity onPress={() => playSound()}>
              <Icon
                name={isPlaying ? "pause" : "play"}
                type="ionicon"
                size={40}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={next}>
              <Icon name="play-skip-forward" type="ionicon" size={36} />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {isExpanded && (
        <View style={styles.largePlayer}>
          <TouchableOpacity
            style={styles.dragger}
            onPress={() => setExpanded((prev) => !prev)}
            hitSlop={{ top: 20, left: 120, bottom: 80, right: 120 }}
          />

          {!showTracks && <View style={styles.trackImage}></View>}

          {showTracks && (
            <View style={{ height: 350, width: 350 }}>
              <View
                style={{
                  width: 350,
                  height: 1,
                  backgroundColor: "lightgray",
                  marginBottom: 1,
                }}
              />
              <FlatList
                data={trackData}
                keyExtractor={(item) => item.name}
                ItemSeparatorComponent={() => <View style={styles.seperator} />}
                renderItem={({ item }) => (
                  <Item
                    name={item.name}
                    station={item.station}
                    selectTrack={selectTrack}
                    pause={setIsPlaying}
                    index={item.index}
                    playAudio={playSound}
                  />
                )}
              />
              <View
                style={{
                  width: 350,
                  height: 1,
                  backgroundColor: "lightgray",
                  marginTop: 1,
                }}
              />
            </View>
          )}

          <View style={styles.trackDesc}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.trackTitle}>
                Track {trackData[selectedTrack].name}
              </Text>
              <TouchableOpacity onPress={() => setShowTracks((prev) => !prev)}>
                <Icon
                  name="list"
                  type="ionicon"
                  style={{
                    marginLeft: 200,
                    backgroundColor: showTracks ? "#D43051" : "transparent",
                    borderRadius: 5,
                    padding: 2,
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.trackStation}>{selectedTrack.station}</Text>
          </View>
          <View style={styles.trackDuration}>
            <Slider
              style={{ width: 350, height: 5 }}
              minimumTrackTintColor={"#D43051"}
              minimumValue={0}
              maximumValue={1}
              value={calculateSeekbar()}
              onValueChange={(value) => {
                setSliderDragPosition(
                  millisToMinutesAndSeconds(value * duration)
                );
              }}
              onSlidingStart={async () => {
                if (!isPlaying) return;
                try {
                  await sound.stopAsync();
                } catch (error) {
                  console.log(error);
                }
              }}
              onSlidingComplete={async (value) => {
                if (sound === null || !isPlaying) return;
                try {
                  const status = await sound.setPositionAsync(duration * value);
                  setPosition(status.positionMillis);
                  await sound.playAsync();
                } catch (error) {
                  console.log(error);
                }
              }}
            />
            <View style={styles.duration}>
              <Text style={{ color: "#70706E", fontSize: 12 }}>
                {millisToMinutesAndSeconds(position)}
              </Text>
              <Text style={{ color: "#70706E", fontSize: 12 }}>
                {millisToMinutesAndSeconds(duration)}
              </Text>
            </View>
          </View>
          <View style={styles.trackControls}>
            <TouchableOpacity onPress={prev}>
              <Icon name="play-back" type="ionicon" size={46} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => playSound()}>
              <Icon
                name={isPlaying ? "pause" : "play"}
                type="ionicon"
                size={46}
                style={{ paddingHorizontal: 40 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={next}>
              <Icon name="play-forward" type="ionicon" size={46} />
            </TouchableOpacity>
          </View>
          <View style={styles.trackVolume}>
            <Icon name="volume-off" type="ionicon" size={18} color="gray" />
            <Slider
              style={{ width: 250, height: 5 }}
              minimumTrackTintColor={"gray"}
              value={0.65}
            />
            <Icon name="volume-high" type="ionicon" size={18} color="gray" />
          </View>
        </View>
      )}
    </BlurView>
  );
};

function Item(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.selectTrack(trackData[props.index].index), props.playAudio();
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: "gray",
            borderRadius: 5,
          }}
        />
        <View style={{ justifyContent: "center", marginLeft: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Track {props.name}
          </Text>
          <Text style={{ color: "#70706E", marginTop: 4 }}>
            {props.station}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MusicPlayer;

const styles = StyleSheet.create({
  player: {
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("screen").width,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  miniPlayer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  dragger: {
    width: 40,
    height: 6,
    backgroundColor: "gray",
    borderRadius: 4,
    position: "absolute",
    marginLeft: Dimensions.get("screen").width * 0.5 - 20,
    top: 10,
    zIndex: 100,
  },
  largePlayer: {
    alignItems: "center",
    paddingTop: 45,
  },
  trackImage: {
    width: 350,
    height: 350,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  trackDesc: {
    flexDirection: "column",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  trackTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  trackStation: {
    color: "#70706E",
  },
  trackDuration: {},
  duration: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 25,
  },
  trackControls: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  trackVolume: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  seperator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "lightgray",
    marginVertical: 5,
  },
});
