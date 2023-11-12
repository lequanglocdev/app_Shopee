import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
export default function DetailProduct({ navigation }) {
  const rou = useRoute();
  const[add,setAdd] = useState()
  const[remove,setRemove] = useState()
  console.log("anh", rou.params?.detail);
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
            navigation.goBack("ShopingNam");
          }}
        >
          <AntDesign name="arrowleft" size={30} color="#F06145" />
        </Pressable>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#F06145" }}>
          Chi Tiết Sản Phẩm
        </Text>
        <AntDesign name="hearto" size={30} color="#F06145" />
      </View>
      <View
        style={{
          width: "100%",
          height: 349,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={rou.params?.imgae}
        />
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <View>
          <Text style={{ fontSize: 14 }}>Màu: </Text>
        </View>
        <View
          style={{
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Pressable >
            <Image
              source={rou.params?.detail[0]}
              style={{ width: 78, height: 78 }}
            />
            <Image
              source={rou.params?.detail[1]}
              style={{ width: 78, height: 78 }}
            />
            <Image
              source={rou.params?.detail[2]}
              style={{ width: 78, height: 78 }}
            />
            <Image
              source={rou.params?.detail[3]}
              style={{ width: 78, height: 78 }}
            />
          </Pressable>
        </View>
        <View>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            {rou.params?.name}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="staro" size={24} color="#FFD233" />
            <AntDesign name="staro" size={24} color="#FFD233" />
            <AntDesign name="staro" size={24} color="#FFD233" />
            <AntDesign name="staro" size={24} color="#FFD233" />
            <AntDesign name="staro" size={24} color="#FFD233" />
            <Text style={{ color: "#F06145", marginLeft: 10 }}>4.9</Text>
          </View>
          <Text style={{ marginHorizontal: 20 }}>|</Text>
          <View>
            <Text>{rou.params?.sale}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}> Số lượng</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
           <Pressable>
            <Ionicons name="remove-circle-outline" size={34} color="black" />
           </Pressable>
            <Text style={{ fontSize: 20, paddingHorizontal: 6 }}>1</Text>
           <Pressable>
             <Ionicons name="add-circle-outline" size={34} color="black" />
           </Pressable>
          </View>
        </View>

        <View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Tổng thanh toán
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#F06145",
                fontWeight: "bold",
              }}
            >
              {rou.params?.price}
            </Text>
            <Pressable
              style={{
                width: 182,
                height: 45,
                backgroundColor: "#F06145",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                borderRadius: 10,
              }}
            >
              <FontAwesome5 name="shopping-bag" size={24} color="#fff" />
              <Text style={{ fontSize: 16, color: "#fff" }}>
                Thêm vào giỏ hàng
              </Text>
            </Pressable>
          </View>
        </View>
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
