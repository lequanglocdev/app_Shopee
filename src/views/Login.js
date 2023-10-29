import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import { Pressable } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 63,
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "rgba(0,0,0,0.1)",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 26, color: "#F06145", fontWeight: "bold" }}>
            Đăng nhập
          </Text>
        </View>
      </View>
      <View style={{ width: "100%", height: 670, backgroundColor: "#fff" }}>
        {/* Logo */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <Image
            source={require("../../src/image/logo.png")}
            style={{
              width: 154,
              height: 120,
              resizeMode: "center",
            }}
          />
        </View>
        {/* Input */}
        <View
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "#fff",
            justifyContent: "center",
            marginTop: 40,
            alignItems:'center'
          }}
        >
          {/* name */}
          <View
            style={{
              width: "90%",
              height: 50,
              backgroundColor: "#fff",
              flexDirection: "row",
              alignItems: "center",
             
            }}
          >
            <Image
              source={require("../../src/image/iconUser.png")}
              style={{ marginLeft: 20 ,width:30,height:30}}
            />
            <TextInput
              placeholder="Tên đăng nhập"
              style={{
                width: "100%",
                height: 50,
                fontSize: 16,
                paddingHorizontal:20,
                outlineStyle: 'none',
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            ></TextInput>
          </View>

          {/* pas */}
          <View
            style={{
              width: "90%",
              height: 50,
              marginTop: 24,
              backgroundColor: "#fff",
              flexDirection: "row",
              alignItems: "center",
             
            }}
          >
            <Image
              source={require("../../src/image/iconLock.png")}
              style={{ marginLeft: 20, width:30, height:30 }}
            />
            <TextInput
              placeholder="Mật khẩu"
              style={{
                width: "100%",
                height: 50,
                fontSize: 16,
                paddingHorizontal:20,
                outlineStyle: 'none',
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            ></TextInput>
            <Image
              source={require("../../src/image/eye.png")}
              style={{ marginLeft: 10 }}
            />
          </View>
        </View>

        {/* button */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#ccc",
              width: 300,
              height: 45,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              borderRadius: 10,
            }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 22,
                textAlign: "center",
                color: "#aca9a9",
              }}
            >
              Đăng nhập
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          backgroundColor: "#ccc",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 14 }}>Bạn chưa có tài khoản?</Text>
        <Text style={{ padding: 10, color: "#1069EE", fontSize: 16 }}>
          Đăng ký
        </Text>
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
