import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Notify() {
  return (
    <View style={styles.container}>
      <Text>Thông báo</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
