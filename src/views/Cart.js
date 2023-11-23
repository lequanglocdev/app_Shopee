import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default function Cart({ navigation }) {
  const rou = useRoute();
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(rou.params?.price);

  const increase = () => {
    setCount(count + 1);
    setPrice(price * 2 + ".000");
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setPrice(price / 2 + ".000");
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("ShopingNam");
          }}
        >
          <AntDesign name="arrowleft" size={30} color="#F06145" />
        </Pressable>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#F06145" }}>
          Giỏ hàng
        </Text>
        <FontAwesome5 name="shopping-bag" size={24} color="#f06145" />
      </View>

      <View
        style={{
          paddingHorizontal: 10,
          marginTop: 10,
          flexDirection: "row",
          width: "100%",
          height: 140,
        }}
      >
        <View
          style={{
            width: 120,
            height: 120,
            justifyContent: "center",
            alignItems: "center",
            flex: 2,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "center" }}
            source={rou.params?.imgae}
          />
        </View>

        <View
          style={{
            flex: 3,
            paddingHorizontal: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 15, colorL: "#000", fontWeight: "500" }}>
            {rou.params?.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 16, color: "#F06145" }}>{price}đ</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="remove-circle-outline"
                size={30}
                color="black"
                onPress={() => decrement()}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: "#000",
                  fontWeight: "400",
                  marginHorizontal: 12,
                }}
              >
                {count}
              </Text>
              <Ionicons
                name="add-circle-outline"
                size={30}
                color="black"
                onPress={() => increase()}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Pressable
          style={{
            width: 300,
            height: 45,
            backgroundColor: "#F06145",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate("Pay", { price: rou.params?.price });
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff",fontWeight:'bold' }}>Thanh toán</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
