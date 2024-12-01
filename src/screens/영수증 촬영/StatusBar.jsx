import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StatusBar() {
  return (
    <View style={styles.statusBarContainer}>
      <Text>9:41</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBarContainer: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: -0.17,
  }
});