import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function BottomControls() {
  return (
    <View style={styles.controlsContainer}>
      <View style={styles.leftControl} />
      <View style={styles.centerControlWrapper}>
        <View style={styles.centerControl} />
      </View>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/bf43d548738ead04f11839349485bcc56cccd968591b3788a460238500f0bbe8?apiKey=5a6ffd1f14dd411d8b7dc6a36849a99d&",
        }}
        style={styles.rightControl}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  controlsContainer: {
    position: "relative",
    display: "flex",
    marginTop: 600,
    width: "100%",
    maxWidth: 338,
    alignItems: "center",
    gap: 20,
    justifyContent: "space-between",
  },
  leftControl: {
    borderRadius: 9,
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    width: 37,
    flexShrink: "0",
    height: 37,
  },
  centerControlWrapper: {
    borderRadius: 50,
    alignSelf: "stretch",
    display: "flex",
    padding: 7,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
  },
  centerControl: {
    borderRadius: 50,
    display: "flex",
    width: 60,
    flexShrink: "0",
    height: 60,
  },
  rightControl: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    width: 29,
    flexShrink: "0",
    aspectRatio: "1",
  }
});