import React, { useState } from "react";
import {
  TextInput,
  Image,
  Text,
  View,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const Search = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 10,
        width: "100%",
        height: 38,
        backgroundColor: "transparent",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          width: 250,
          height: 38,
          alignItems: "center",
          borderRadius: 4,
        }}
      >
        <FontAwesome5
          name="search"
          size={24}
          color="#F06145"
          style={{ paddingHorizontal: 8 }}
        />
        <TextInput
          placeholder="Tìm Shopee"
          style={{
            paddingLeft: 20,
            paddingRight: 50,
            fontSize: 14,
            outlineStyle: "none",
          }}
        />
      </View>

      <Pressable 
          
      >
        <Image
          source={require("../image/iconCart.png")}
          style={{ width: 30, height: 30 }}
        />
      </Pressable>

      <Pressable>
        <View>
          <Image
            source={require("../image/iconUser2.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default Search;
