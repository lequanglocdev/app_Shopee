import React from 'react'
import { TextInput, Image, Text, View, ScrollView } from "react-native";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SectionRecomment = () => {
  return (
    <View
    style={{
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      height: 54,
      backgroundColor: "#dadada",
    }}
  >
    <View>
      <Text style={{ fontSize: 20, color: "#EE4D2D" }}>
        GỢI Ý HÔM NAY
      </Text>
    </View>

    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        justifyContent:'center'
      }}
    >
      <Text style={{ fontSize: 16 }}>Xem thêm </Text>
      <Image
        source={require("../image/iconArrow.png")}
        style={{ marginLeft: 10 ,width:10,height:10 }}
      />
    </View>
  </View>
  )
}

export default SectionRecomment