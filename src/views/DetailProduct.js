import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function DetailProduct({ navigation }) {
  const rou = useRoute();

  const addToCart = () => {
    const carts = {
      name: rou.params?.name,
      price: rou.params?.price,
      imgae: rou.params?.imgae,
    };
    navigation.navigate("Cart", carts);
    console.log("cart:", carts);
  };

  const [selectImage, setSelectImage] = useState(rou.params?.imgae);

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
      <ImageBackground
        style={{ width: "100%", height: "400px" }}
        source={require("../image/bgDetaill.png")}
        resizeMode="stretch"
      >
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
            source={selectImage}
          />
        </View>
      </ImageBackground>
      <View style={{ paddingHorizontal: 16 }}>
        {/* <View>
          <Text style={{ fontSize: 14 }}>Màu: </Text>
        </View> */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Pressable onPress={() => setSelectImage(rou.params?.detail[0])}>
            <Image
              source={rou.params?.detail[0]}
              style={{ width: 78, height: 78 }}
            />
          </Pressable>
          <Pressable onPress={() => setSelectImage(rou.params?.detail[1])}>
            <Image
              source={rou.params?.detail[1]}
              style={{ width: 78, height: 78 }}
            />
          </Pressable>
          <Pressable onPress={() => setSelectImage(rou.params?.detail[2])}>
            <Image
              source={rou.params?.detail[2]}
              style={{ width: 78, height: 78 }}
            />
          </Pressable>
          <Pressable onPress={() => setSelectImage(rou.params?.detail[3])}>
            <Image
              source={rou.params?.detail[3]}
              style={{ width: 78, height: 78 }}
            />
          </Pressable>
        </View>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../image/freeship.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text>Miễn phí vận chuyển</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="truck" size={20} color="#53bbae" />
            <Text style={{ marginLeft: 10 }}>Phí vần chuyển: 0đ</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
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
              {rou.params?.price}đ
            </Text>
            <Pressable
              onPress={() => {
                addToCart();
              }}
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
