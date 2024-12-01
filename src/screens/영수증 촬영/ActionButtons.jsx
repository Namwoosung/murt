import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function ActionButtons() {
  return (
    <View style={styles.actionContainer}>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/531607984773cd9b912f92f419991e55308d7974fd36439a7b3bb6601b142528?apiKey=5a6ffd1f14dd411d8b7dc6a36849a99d&",
        }}
        style={styles.leftActionButton}
      />
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/1638e65978effeeb0efe7d1d7fa51379bdc0ad6b0c56a274b29a4d6d40ec4106?apiKey=5a6ffd1f14dd411d8b7dc6a36849a99d&",
        }}
        style={styles.rightActionButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  actionContainer: {
    position: "relative",
    display: "flex",
    marginTop: 34,
    width: "100%",
    maxWidth: 338,
    alignItems: "stretch",
    gap: 20,
    justifyContent: "space-between",
  },
  leftActionButton: {
    position: "relative",
    display: "flex",
    width: 28,
    flexShrink: "0",
    aspectRatio: "1",
  },
  rightActionButton: {
    position: "relative",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    width: 24,
    flexShrink: "0",
    aspectRatio: "1",
  }
});