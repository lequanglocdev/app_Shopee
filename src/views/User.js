import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons , Entypo  } from "@expo/vector-icons";
import { TextInput } from "react-native";
export default function User() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, alignItems: "center" }}>
        <Image
          source={require("../image/user/image.jpg")}
          style={{ width: 100, height: 100 }}
        />
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>LÊ QUANG LỘC</Text>
        </View>
        <AntDesign
          name="setting"
          size={34}
          color="black"
          style={{ position: "absolute", top: 0, right: 20 }}
        />
      </View>
      <View style={{ flex: 5, paddingHorizontal: 20 }}>
        <View style={{}}>
          <Text style={{ fontSize: 20, color: "red" }}>Email</Text>
          <View style={{ position: "relative", justifyContent: "center" ,marginVertical:4}}>
            <Text
              style={{
                borderWidth: 1,
                borderColor: "#97999b",
                padding: 14,
                borderRadius: 6,
                fontSize:16
              }}
            >
              quanglocdev@gmail.com
            </Text>
            <MaterialIcons
              name="email"
              size={24}
              color="black"
              style={{ position: "absolute", right: 10 }}
            />
          </View>
        </View>
        <View style={{}}>
          <Text style={{ fontSize: 20, color: "red" }}>Số điện thoại</Text>
          <View style={{ position: "relative", justifyContent: "center" ,marginVertical:4}}>
            <Text
              style={{
                borderWidth: 1,
                borderColor: "#97999b",
                padding: 14,
                borderRadius: 6,
                fontSize:16
              }}
            >
              0123456789
            </Text>
            <Entypo
              name="phone"
              size={24}
              color="black"
              style={{ position: "absolute", right: 10 }}
            />
           
          </View>
        </View>

        <View style={{}}>
          <Text style={{ fontSize: 20, color: "red" }}>Địa chỉ</Text>
          <View style={{ position: "relative", justifyContent: "center" ,marginVertical:4}}>
            <Text
              style={{
                borderWidth: 1,
                borderColor: "#97999b",
                padding: 14,
                borderRadius: 6,
                fontSize:16
              }}
            >
              12 Nguyễn Văn Bảo, Phường 4, Gò Vấp
            </Text>
            <Entypo
              name="address"
              size={24}
              color="black"
              style={{ position: "absolute", right: 10 }}
            />
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
    position: "relative",
  },
});
