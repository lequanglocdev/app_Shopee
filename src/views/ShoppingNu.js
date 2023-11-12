import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
function ShoppingNu({ navigation }) {
  const items = [
    {
      name: "Áo Sơ Mi Chất Nhung Tăm Nam Nữ Form Rộng Nâu....",
      price: "79.000đ",
      sale: "đã bán 10.6k",
      imgae: require("../image/productNu/img.png"),
      detail: [
        require("../image/productNu/item1.jpg"),
        require("../image/productNu/item2.jpg"),
        
      ],
    },
    {
      name: "Áo Thun Cotton 50753 Mỏng Vừa Vặn Màu ..",
      price: "99.000đ",
      sale: "đã bán 92.5k",
      imgae: require("../image/productNu/img2.png"),
      detail: [
        require("../image/productNu/item3.jpg"),
        require("../image/productNu/item4.jpg"),
        require("../image/productNu/item5.jpg"),
        require("../image/productNu/item6.jpg"),
        
      ],
    },
    {
      name: "Áo Dạ Tweed Hai Lớp Cao Cấp Màu Tiêu Cúc...",
      price: "139.950đ",
      sale: "đã bán 27.6k",
      imgae: require("../image/productNu/img3.png"),
      detail: [
        require("../image/productNu/item7.jpg"),
        require("../image/productNu/item8.jpg"),
        
        
      ],
    },
    {
      name: "CHÂN VÁY BÒ 2 TÚI TRƯỚC XẺ VẠT SIÊU HOT JEANS...",
      price: "26.000đ",
      sale: "đã bán 18k",
      imgae: require("../image/productNu/img4.png"),
      detail: [
        require("../image/productNu/item9.jpg"),
        require("../image/productNu/item10.jpg"),
        
        
      ],
    },
    {
      name: "Set Bộ Đồ Nữ Phông cotton Phối Quần Chấm Bi Lụa ...",
      price: "185.000đ",
      sale: "đã bán 15k",
      imgae: require("../image/productNu/img5.png"),
      detail: [
      
      ],
    },
    {
      name: "Áo Thun Form Fit Chữ B Chất Thun Co Dãn 2023",
      price: "159.000đ",
      sale: "đã bán 21.8k",
      imgae: require("../image/productNu/img6.png"),
      detail: [
        require("../image/productNu/item11.jpg"),
        require("../image/productNu/item12.jpg"),
        
        
      ],
    },
    {
      name: "Tất cổ ngắn nam nữ chất liệu cotton dày co giãn....",
      price: "8.950đ",
      sale: "đã bán 63.6k",
      imgae: require("../image/productNu/img7.png"),
      detail: [
        
      ],
    },
    {
      name: "Áo ba lỗ nữ croptop có loại SẴN MÚT ĐỆM NGỰC...",
      price: "65.000đ",
      sale: "đã bán 48k",
      imgae: require("../image/productNu/img8.png"),
      detail: [
        require("../image/productNu/item13.jpg"),
        require("../image/productNu/item14.jpg"),
        require("../image/productNu/item15.jpg"),
        require("../image/productNu/item16.jpg"),
        
        
      ],
    },
    {
      name: "Bộ Pijama Chất Lụa Gấm Tay Dài- Quần Dài",
      price: "179.000đ",
      sale: "đã bán 66k",
      imgae: require("../image/productNu/img9.png"),
      detail: [
        require("../image/productNu/item17.jpg"),
        require("../image/productNu/item18.jpg"),
        require("../image/productNu/item19.jpg"),
        require("../image/productNu/item20.jpg"),
        
        
      ],
    },
    {
      name: "[Quần Ống Rộng Suông Lưng Cao Khóa Trước...",
      price: "160.000đ",
      sale: "đã bán 66k",
      imgae: require("../image/productNu/img10.png"),
      detail: [
        require("../image/productNu/item21.jpg"),
        require("../image/productNu/item22.jpg"),
        require("../image/productNu/item23.jpg"),
      
        
        
      ],
    },
    {
      name: "Quần ống đứng túi ngang chất ruby mã Quansu ...",
      price: "125.000đ",
      sale: "đã bán 15k",
      imgae: require("../image/productNu/img11.png"),
      detail: [
        require("../image/productNu/item24.jpg"),
        require("../image/productNu/item25.jpg"),
        require("../image/productNu/item26.jpg"),
        require("../image/productNu/item27.jpg"),
      ],
    },
    {
      name: "Áo Thun Cổ Tròn Lệch Vai Xoắn Eo Tôn Dáng Nhiều ...",
      price: "29.000đ",
      sale: "đã bán 21.8k",
      imgae: require("../image/productNu/img12.png"),
      detail: [
        require("../image/productNu/item28.jpg"),
        require("../image/productNu/item29.jpg"),
        require("../image/productNu/item30.jpg"),
        require("../image/productNu/item31.jpg"),
      ],
    },
    {
      name: "Quần Jeans Nữ Ống Rộng, Quần Bò Nữ Ống Suông ....",
      price: "149.950đ",
      sale: "đã bán 63.6k",
      imgae: require("../image/productNu/img13.png"),
      detail: [
        require("../image/productNu/item32.jpg"),
        require("../image/productNu/item33.jpg"),
        require("../image/productNu/item34.jpg"),
        require("../image/productNu/item35.jpg"),
      ],
    },
    {
      name: "Đồ bộ nam chất thun lạnh in Ice Ice đường ray cực ...",
      price: "49.000đ",
      sale: "đã bán 48k",
      imgae: require("../image/productNu/img14.png"),
      detail: [
        require("../image/productNu/item36.jpg"),
        require("../image/productNu/item37.jpg"),
        require("../image/productNu/item38.jpg"),
        require("../image/productNu/item39.jpg"),
      ],
    },
    {
      name: "Áo Khoác Hoodie Zip Chất Nỉ Bông Mũ 2 Lớp In ...",
      price: "50.000đ",
      sale: "đã bán 48k",
      imgae: require("../image/productNu/img15.png"),
      detail: [
        require("../image/productNu/item40.jpg"),
        require("../image/productNu/item41.jpg"),
        require("../image/productNu/item42.jpg"),
       
      ],
    },
    {
      name: "Áo thun nam nữ unisex form rộng tay SỌC VAI ...",
      price: "40.000đ",
      sale: "đã bán 48k",
      imgae: require("../image/productNu/img16.png"),
      detail: [
        require("../image/productNu/item43.jpg"),
        require("../image/productNu/item44.jpg"),
       
      ],
    },
  ];
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
            navigation.goBack("Product");
          }}
        >
          <AntDesign name="arrowleft" size={24} color="#F06145" />
        </Pressable>

        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="search" size={24} color="#F06145" />
          <TextInput
            placeholder="Thời trang nữ"
            style={{
              fontSize: 14,
              color: "#333",
              paddingHorizontal: 8,
              outlineStyle: "none",
            }}
          ></TextInput>
        </View>

        <View>
          <AntDesign name="shoppingcart" size={24} color="#F06145" />
        </View>
        <View>
          <FontAwesome5 name="rocketchat" size={24} color="#F06145" />
        </View>
      </View>
      {/* Slider */}
      <View>
        <Image
          source={require("../image/slider/bannerNu.jpg")}
          style={{ width: "100%", height: 108 }}
        />
      </View>
      {/* Product */}
      <View style={{ paddingHorizontal: 10, marginTop: 6 }}>
        <FlatList
          data={items}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <Pressable
              onPress={() => {
                navigation.navigate("DetailProduct", item);
              }}
              >
                <View
                  style={{
                    width: 172,
                    height: 255,
                    borderRadius: 6,
                    marginHorizontal: 4,
                    // borderWidth: 1,
                    // borderColor: "red",
                    marginTop: 4,
                  }}
                >
                  <View
                    style={{
                      width: 171,
                      height: 171,
                      // borderWidth: 1,
                      // borderColor: "red",
                    }}
                  >
                    <Image
                      source={item.imgae}
                      style={{
                        resizeMode: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>

                  <View style={{ paddingHorizontal: 4, marginVertical: 4 }}>
                    <Text style={{ fontSize: 12, color: "#000000DE" ,fontWeight:'bold'}}>
                      {item.name}
                    </Text>
                  </View>

                  <View style={{ paddingHorizontal: 4 }}>
                    <Pressable
                      style={{
                        borderWidth: 1,
                        borderColor: "#F06145",
                        width: 100,
                        borderRadius: 6,
                        overflow: "hidden",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#F06145",
                          backgroundColor: "#fff",
                          paddingHorizontal: 4,
                        }}
                      >
                        Flash sale
                      </Text>
                    </Pressable>
                  </View>

                  <View style={{ paddingHorizontal: 4 }}>
                    <View
                      style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "#F06145",
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        {item.price}
                      </Text>
                      <Text
                        style={{
                          color: "#817B7B",
                          fontSize: 12,
                          paddingHorizontal: 2,
                        }}
                      >
                        {item.sale}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
}

export default ShoppingNu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
