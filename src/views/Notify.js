import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-web";

const items = [
  {
    url: require("../image/notify/img.jpg"),
    title: "Hàng hiệu chính hãng giảm đến 50% ",
    des: "Cơ hội nhận nhiều voucher 100k bạn còn chờ đợi gì nữa mà không tham gia",
  },
  {
    url: require("../image/notify/img1.jpg"),
    title: "Hàng hiệu chính hãng giảm đến 50% ",
    des: "Cơ hội nhận nhiều voucher 100k bạn còn chờ đợi gì nữa mà không tham gia",
  },
  {
    url: require("../image/notify/img2.jpg"),
    title: "Hàng hiệu chính hãng giảm đến 50% ",
    des: "Cơ hội nhận nhiều voucher 100k bạn còn chờ đợi gì nữa mà không tham gia",
  },
  {
    url: require("../image/notify/img3.jpg"),
    title: "Hàng hiệu chính hãng giảm đến 50% ",
    des: "Cơ hội nhận nhiều voucher 100k bạn còn chờ đợi gì nữa mà không tham gia",
  },
];

export default function Notify() {
  return (
    <View style={styles.container}>
      
      <View
    style={{
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderColor: "#ccc",
    }}
  >
    <Text style={{ fontSize: 20, color: "#333" }}>
      Thông báo mới nhận
    </Text>
     </View>

     <FlatList
      data={items}
      renderItem={({item}) => {
        return (
         
           
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1 }}>
                <Image
                  source={item.url}
                  style={{ width: 60, height: 50, borderRadius: 6 }}
                />
              </View>
              <View style={{ flex: 4 }}>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 12, color: "#333" }}>
                  {item.des}
                </Text>
              </View>
            </View>
         
        );
      }}
    />
    </View>
   
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
