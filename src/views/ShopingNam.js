import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { FlatList } from "react-native";

const ShopingNam = ({ navigation }) => {
  const items = [
    {
      name: "Áo Polo thể thao nam ProMax-S1 Logo thương...",
      price: "179.000đ",
      sale: "đã bán 66k",
      imgae: require("../image/productNam/img.png"),
    },
    {
      name: "Áo chống nắng nam nữ dày dặn cao cấp thấm...",
      price: "99.000đ",
      sale: "đã bán 92.5k",
      imgae: require("../image/productNam/img2.png"),
    },
    {
      name: "Áo thun nam cá sấu polo nhiều màu thời trang...",
      price: "59.950đ",
      sale: "đã bán 27.6k",
      imgae: require("../image/productNam/img3.png"),
    },
    {
      name: "Áo khoác nam unisex cổ đứng vải dù 2 lớp phối...",
      price: "59.000đ",
      sale: "đã bán 18k",
      imgae: require("../image/productNam/img4.png"),
    },
    {
      name: "Combo 5 quần lót nam tam giác Cotton ...",
      price: "219.000đ",
      sale: "đã bán 35.5k",
      imgae: require("../image/productNam/img5.png"),
    },
    {
      name: "Dây Thắt Lưng Nam Da Bò Thật VICENZO Cao Cấp...",
      price: "139.000đ",
      sale: "đã bán 7.5k",
      imgae: require("../image/productNam/img6.png"),
    },
    {
      name: "Tất bóng đá chống trơn Wika, tất đá banh cao cấp...",
      price: "4.950đ",
      sale: "đã bán 48.6k",
      imgae: require("../image/productNam/img7.png"),
    },
    {
      name: "Quần jean nam Xanh RETRO ống rộng CẠP CAO...",
      price: "145.000đ",
      sale: "đã bán 18k",
      imgae: require("../image/productNam/img8.png"),
    },
    {
      name: "Quần jean nam xám ống suông rộng Elmen..",
      price: "159.000đ",
      sale: "đã bán 21.4k",
      imgae: require("../image/productNam/img9.png"),
    },
    {
      name: "Quần thể thao nam 7inch Ultra Short có túi khóa kéo...",
      price: "109.000đ",
      sale: "đã bán 75.8k",
      imgae: require("../image/productNam/img10.png"),
    },
    {
      name: "Áo sơ mi nam dài tay KJ chất vải lụa thái phom vừa.",
      price: "79.000đ",
      sale: "đã bán 25.8k",
      imgae: require("../image/productNam/img11.png"),
    },
    {
      name: "Quần âu nam , Quần tây nam hàn quốc dáng ...",
      price: "99.000đ",
      sale: "đã bán 25.8k",
      imgae: require("../image/productNam/img12.png"),
    },
    {
      name: "Bộ Thể Thao Nam TSIMPLE quần áo tập gym vải thun...",
      price: "100.000đ",
      sale: "đã bán 66k",
      imgae: require("../image/productNam/img13.png"),
    },
    {
      name: "Áo Hoodie Teelab Local Brand Unisex",
      price: "79.000đ",
      sale: "đã bán 50k",
      imgae: require("../image/productNam/img14.png"),
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
            placeholder="Thời trang nam"
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
          source={require("../image/slider/img.png")}
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
              <Pressable>
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
};

export default ShopingNam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
