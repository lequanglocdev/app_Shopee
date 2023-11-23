import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

export default function Pay({navigation}) {
  const rou = useRoute();
  return (
    <View style={styles.container}>
     
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 20, color: "#F06145", fontWeight: "bold" }}>
          Phương thức thanh toán
        </Text>

      </View>
      <View style={{ width: "100%", backgroundColor: "#dadada", flex: 10 }}>
      

        <View style={{ justifyContent: "center", alignItems: "center" ,marginVertical:50}}>

        <Pressable

          onPress={() => navigation.navigate('Pay2',{title:'Thanh Toán Bằng Ví Điện Tử',price:rou.params?.price})}
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "90%",
            height: 40,
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
        >
          <AntDesign name="pay-circle-o1" size={39} color="red" />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Thanh Toán Bằng Ví Điện Tử
          </Text>
        </Pressable>

          <Pressable
             onPress={() => navigation.navigate('Pay2',{title:' Thanh Toán Qua Ngân Hàng',price:rou.params?.price})}
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "90%",
              height: 40,
              backgroundColor: "#fff",
              borderRadius: 10,
              marginVertical: 50,
            }}
          >
            <AntDesign name="bank" size={39} color="green" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Thanh Toán Qua Ngân Hàng
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('Pay2',{title:'Thanh Toán Qua PayPal',price:rou.params?.price})}
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "90%",
              height: 40,
              backgroundColor: "#fff",
              borderRadius: 10,
            }}
          >
            <FontAwesome name="cc-paypal" size={29} color="blue" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Thanh Toán Qua PayPal
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('Pay2',{title:'Thanh Toán Bằng Thẻ Ghi Nợ',price:rou.params?.price})}
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "90%",
              height: 40,
              backgroundColor: "#fff",
              borderRadius: 10,
              marginVertical: 50,
            }}
          >
            <MaterialIcons name="payment" size={39} color="blue" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Thanh Toán Bằng Thẻ Ghi Nợ
            </Text>
          </Pressable>

          <Pressable
             onPress={() => navigation.navigate('Pay2',{title:'Thanh Toán Bằng Ví Apple',price:rou.params?.price})}
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "90%",
              height: 40,
              backgroundColor: "#fff",
              borderRadius: 10,
            }}
          >
            <FontAwesome5 name="apple-pay" size={39} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Thanh Toán Bằng Ví Apple
            </Text>
          </Pressable>

          <Pressable
             onPress={() => navigation.navigate('Pay2',{title:'Thanh Toán Khi Nhận Hàng',price:rou.params?.price})}

            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "90%",
              height: 40,
              backgroundColor: "#fff",
              borderRadius: 10,
              marginVertical: 50,
            }}
          >
            <AntDesign name="inbox" size={39} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Thanh Toán Khi Nhận Hàng
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
