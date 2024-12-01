import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import StatusBar from "./StatusBar";
import NavigationIcons from "./NavigationIcons";

export default function NavigationBar() {
  return (
    <View style={styles.navigationContainer}>
      <StatusBar />
      <NavigationIcons />
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    justifyContent: "flex-end",
    alignItems: "stretch",
    backdropFilter: "blur(20px)",
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    width: "100%",
    paddingLeft: 33,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    gap: "40px 100px",
    fontFamily: "SF Pro Text, sans-serif",
    color: "#1F2024",
  }
});