import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  FlatList
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
const ShoppingHouse = ({ navigation }) => {
  const items = [
    {
      name: "Ghế văn phòng máy tính imixcity bao phủ ghế xoay",
      price: "60.000đ",
      sale: "đã bán 195",
      imgae: require("../image/productHouse/img.png"),
      detail: [
        require("../image/productNu/item1.jpg"),
        require("../image/productNu/item2.jpg"),
        require("../image/productNu/item3.jpg"),
        require("../image/productNu/item4.jpg"),
      ],
    },
    {
      name: "Kệ đựng đồ đa năng 3 tầng,4 tầng có bánh xe...",
      price: "6.000đ",
      sale: "đã bán 14.5k",
      imgae: require("../image/productHouse/img2.png"),
      detail: [
        require("../image/productNu/item5.jpg"),
        require("../image/productNu/item6.jpg"),
        require("../image/productNu/item7.jpg"),
      ],
    },
    {
      name: "Tủ Để Đồ Trang Điểm Mini, Kệ Đựng Mỹ Phẩm Mini Có...",
      price: "60.000đ",
      sale: "đã bán 27.6k",
      imgae: require("../image/productHouse/img3.png"),
      detail: [
        require("../image/productNu/item8.jpg"),
        require("../image/productNu/item9.jpg"),
        require("../image/productNu/item10.jpg"),
      ],
    },
    {
      name: "Ly Giữ Nhiệt Iced Americano Inox 304 Đúc...",
      price: "33.000đ",
      sale: "đã bán 167k",
      imgae: require("../image/productHouse/img4.png"),
      detail: [
        require("../image/productNu/item13.jpg"),
        require("../image/productNu/item14.jpg"),
        require("../image/productNu/item15.jpg"),

      ],
    },
    {
      name: "CHẢO CHỐNG DÍNH CAO CẤP 18CM",
      price: "39.000đ",
      sale: "đã bán 7.8k",
      imgae: require("../image/productHouse/img5.png"),
      detail: [
        
      ],
    },
    {
      name: "Bộ ga gối 3 món poly coton 1m6x2m và 1m8x2 ..",
      price: "16.950đ",
      sale: "đã bán 63k",
      imgae: require("../image/productHouse/img6.png"),
      detail: [
        require("../image/productNu/item16.jpg"),
        require("../image/productNu/item17.jpg"),
        
      ],
    },
    {
      name: "Chảo chống dính sâu lòng 18cm dùng mọi loại bếp ...",
      price: "25.000đ",
      sale: "đã bán 48k",
      imgae: require("../image/productHouse/img7.png"),
      detail: [
       
      ],
    },
    {
      name: "Ga Giường và 2 vỏ gối cotton poly cao cấp hàn ...",
      price: "30.000đ",
      sale: "đã bán 66k",
      imgae: require("../image/productHouse/img8.png"),
      detail: [
        require("../image/productNu/item18.jpg"),
        require("../image/productNu/item19.jpg"),
        require("../image/productNu/item20.jpg"),
        
      ],
    },
    {
      name: "Bàn học gấp gọn ngồi bệt, dùng cho học sinh...",
      price: "109.000đ",
      sale: "đã bán 66k",
      imgae: require("../image/productHouse/img9.png"),
      detail: [
        require("../image/productNu/item21.jpg"),
        require("../image/productNu/item22.jpg"),
        require("../image/productNu/item23.jpg"),
        
      ],
    },
    
    {
      name: "Ruột Gối Đầu Cao Cấp Pillow Nhiều Màu Tiê...",
      price: "28.000đ",
      sale: "đã bán 167k",
      imgae: require("../image/productHouse/img11.png"),
      detail: [
        require("../image/productNu/item24.jpg"),
        require("../image/productNu/item25.jpg"),
        require("../image/productNu/item26.jpg"),
        require("../image/productNu/item27.jpg"),
        
      ],
    },
    {
      name: "Chăn hè COTTON POLY trần bông 3 lớp (Được chọn ...",
      price: "83.000đ",
      sale: "đã bán 7.8k",
      imgae: require("../image/productHouse/img12.png"),
      detail: [
        require("../image/productNu/item24.jpg"),
        require("../image/productNu/item25.jpg"),
        require("../image/productNu/item26.jpg"),
        require("../image/productNu/item27.jpg"),
        
      ],
    },
    {
      name: "[Siêu Sale] Tủ Để Đầu Giường - Tab Đầu Giường ..",
      price: "103.000đ",
      sale: "đã bán 63.6k",
      imgae: require("../image/productHouse/img13.png"),
      detail: [
        require("../image/productNu/item31.jpg"),
        require("../image/productNu/item32.jpg"),
        require("../image/productNu/item33.jpg"),
        
      ],
    },
    {
      name: "Thảm chùi chân 3D thảm lau chân_Thảm bếp  ...",
      price: "20.000đ",
      sale: "đã bán 66k",
      imgae: require("../image/productHouse/img14.png"),
      detail: [
        require("../image/productNu/item34.jpg"),
        require("../image/productNu/item35.jpg"),
      
      ],
    },
    {
      name: "Khăn Tắm, Gội, Lau Mặt Châu Âu LOTUS 100%...",
      price: "10.000đ",
      sale: "đã bán 66k",
      imgae: require("../image/productHouse/img15.png"),
      detail: [
        require("../image/productNu/item36.jpg"),
        require("../image/productNu/item37.jpg"),
        require("../image/productNu/item38.jpg"),
      
      ],
    },
    {
      name: "Set 200 dây kẽm nhung màu pastel Kèm Đèn ...",
      price: "10.000đ",
      sale: "đã bán 66k",
      imgae: require("../image/productHouse/img16.png"),
      detail: [
        require("../image/productNu/item39.jpg"),
        require("../image/productNu/item40.jpg"),
        require("../image/productNu/item41.jpg"),
        require("../image/productNu/item42.jpg"),
        
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
          <TextInput placeholder="Nhà Cửa & Đời Sống" style={{fontSize:14,color:'#333',paddingHorizontal:8,outlineStyle: "none",}}></TextInput>
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
          source={require("../image/slider/bannerHouse.png")}
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
                    <Text style={{ fontSize: 12, color: "#000000DE",fontWeight:'bold' }}>
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
};

export default ShoppingHouse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
