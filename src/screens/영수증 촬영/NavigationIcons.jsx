import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function NavigationIcons() {
  return (
    <View style={styles.iconContainer}>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/d057818914d804d04e3eff28c1f3d998a09a2eee1d91233f25f646052b560ac2?apiKey=5a6ffd1f14dd411d8b7dc6a36849a99d&",
        }}
        style={styles.signalIcon}
      />
      <View style={styles.wifiIcon}>
        <Text>􀙇</Text>
      </View>
      <View style={styles.batteryIcon}>
        <Text>􀛨</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: { 
    display: "flex", 
    alignItems: "stretch", 
    gap: 1, 
    fontWeight: "400" 
  },
  signalIcon: {
    fill: "#1F2024",
    position: "relative",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    width: 17,
    flexShrink: "0",
    aspectRatio: "1.7",
  },
  wifiIcon: { 
    fontSize: 14 
  },
  batteryIcon: { 
    fontSize: 17 
  }
});