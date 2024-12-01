import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import NavigationBar from "../navigation/NavigationBar";
import ActionButtons from "./ActionButtons";
import BottomControls from "./BottomControls";

export default function MainScreen() {
  return (
    <View style={styles.mainContainer}>
      <Image
        resizeMode="cover"
        fitContent
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/c6cc8071bd1f461481814c79647d1eda7674ac7232cd0d36176ff8bfe8cb3b37?apiKey=5a6ffd1f14dd411d8b7dc6a36849a99d&",
        }}
        style={styles.backgroundImage}
      >
        <NavigationBar />
        <ActionButtons />
        <BottomControls />
      </Image>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
  },
  backgroundImage: {
    position: "relative",
    display: "flex",
    aspectRatio: "0.46",
    width: "100%",
    paddingBottom: 65,
    flexDirection: "column",
    alignItems: "center",
  }
});