import React from 'react'
import { TextInput, Image, Text, View, ScrollView } from "react-native";

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
      <Image
        source={require("../image/iconSearch.png")}
        style={{ marginLeft: 10 ,width:30,height:30}}
      />
      <TextInput
        placeholder="Tìm Shopee"
        style={{ paddingLeft: 20, paddingRight: 50, fontSize: 14 ,   outlineStyle: 'none',}}
      />
    </View>

    <View>
      <Image source={require("../image/iconCart.png")} style={{width:30,height:30}} />
    </View>

    <View>
      <Image source={require("../image/iconUser2.png")} style={{width:30,height:30}} />
    </View>
  </View>
  )
}

export default Search