import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

export default function Pay2({navigation}) {
  const rou = useRoute();
  const [total,setTotal] = useState(rou.params?.price)
  const handlePress = () => {
    // Set total to 0 before navigating to PaySuccess
    setTotal(0);
    setTimeout(() => {
      navigation.navigate("PaySuccess");
    }, 1000); 
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 5 }}>
        <Text style={{ fontSize: 24, color: "#fff", fontWeight: "bold" }}>
          Tổng số tiền của bạn: {total}đ
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            color: "#fff",
            fontWeight: "400",
          }}
        >
          Phương thức: {rou.params?.title}
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <Pressable
          style={{
            width: 300,
            height: 50,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            borderRadius:10
          }}
          onPress={() => 
            handlePress()
          }
        >
          <Text style={{ fontSize: 24, color: "#F06145" }}>Hoàn tất</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F06145",
  },
});
