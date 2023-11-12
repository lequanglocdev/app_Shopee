import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { AntDesign ,Entypo  } from "@expo/vector-icons";
export default function Login({ navigation }) {
  var error = ''
  const [showPassword, setShowPassword] = useState(false);
  const [inputName , setInputName] = useState('admin')
  const [inputPass , setInputPass] = useState('123456')
  const users = [
  { inputName: 'admin', inputPass: '123456' },
  { inputName: 'user2', inputPass: 'password2' },
  // Thêm thông tin đăng nhập khác tại đây
];
  const handleLogin = () => {
  const foundUser = users.find((user) => user.inputName  ===  inputName && user.inputPass === inputPass);
  console.log(foundUser)
  if (foundUser) {
    navigation.navigate('Home');
  } else {
    alert('Tên đăng nhập hoặc mật khẩu không chính xác');
  }
};
  
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
            alignItems: "center",
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
              style={{ marginLeft: 20, width: 30, height: 30 }}
            />
            <TextInput
              placeholder="Tên đăng nhập"
              value={inputName}
              onChangeText={setInputName}
              style={{
                width: "100%",
                height: 50,
                fontSize: 16,
                paddingHorizontal: 20,
                outlineStyle: "none",
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            ></TextInput>
            <Text style={{ color: 'red', fontWeight: 'bold' }}>{error != null ? error : ''}</Text>
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
              style={{ marginLeft: 20, width: 30, height: 30 }}
            />
            <TextInput
              placeholder="Mật khẩu"
              value={inputPass}
              onChangeText={setInputPass}
              secureTextEntry = {!showPassword}
              style={{
                width: "100%",
                height: 50,
                fontSize: 16,
                paddingHorizontal: 20,
                outlineStyle: "none",
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",

              }}
            ></TextInput>
            <Pressable 
                onPress={() => setShowPassword(!showPassword)} 
            >
              {showPassword == true ? (
                <AntDesign name="eye" size={24} color="black" />

              ) : (
                <Entypo name="eye-with-line" size={24} color="black" />

              )}
            </Pressable>
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
              width: 300,
              height: 45,
              backgroundColor:'#F06145',
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              borderRadius: 10,
            }}
            onPress={handleLogin}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 22,
                textAlign: "center",
                color: "#fff",
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
