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
const ShoppingPhone = ({ navigation }) => {
  const items = [
    {
      name: "Ốp lưng iphone dẻo cạnh vuông lưng cứng phím...",
      price: "15.000",
      sale: "đã bán 14k",
      imgae: require("../image/productPhone/img.png"),
      detail: [
        require("../image/productPhone/item.jpg"),
        require("../image/productPhone/item2.jpg"),
      ],
    },
    {
      name: "Sạc dự phòng tích hợp màn hình Led Dung Lượng..",
      price: "159.000",
      sale: "đã bán 92.5k",
      imgae: require("../image/productPhone/img2.png"),
      detail: [
        require("../image/productPhone/item3.jpg"),
        require("../image/productPhone/item4.jpg"),
        require("../image/productPhone/item5.jpg"),
      ],
    },
    {
      name: "Điện thoại Apple iPhone 14 Pro Max 128GB",
      price: "27.090.000",
      sale: "đã bán 27.6k",
      imgae: require("../image/productPhone/img3.png"),
      detail: [
        require("../image/productPhone/item6.jpg"),
        require("../image/productPhone/item7.jpg"),
        require("../image/productPhone/item8.jpg"),
        require("../image/productPhone/item9.jpg"),
      ],
    },
    {
      name: "áp sạc nhanh Essager Type C 60W/100W...",
      price: "28.000",
      sale: "đã bán 18k",
      imgae: require("../image/productPhone/img4.png"),
      detail: [
        require("../image/productPhone/item10.jpg"),
        require("../image/productPhone/item11.jpg"),
        require("../image/productPhone/item12.jpg"),
      ],
    },
    {
      name: "Kính cường lực iphone 21D Full Màn IP..",
      price: "1.000",
      sale: "đã bán 5.5k",
      imgae: require("../image/productPhone/img5.png"),
      detail: [
        require("../image/productPhone/item13.jpg"),
        require("../image/productPhone/item14.jpg"),
      ],
    },
    {
      name: "Ốp Điện Thoại Silicon Dẻo Bề Mặt Vải Thời Trang....",
      price: "35.000",
      sale: "đã bán 7.5k",
      imgae: require("../image/productPhone/img6.png"),
      detail: [
        require("../image/productPhone/item15.jpg"),
        require("../image/productPhone/item16.jpg"),
      ],
    },
    {
      name: "Ốp Điện Thoại Vải Mềm Hình Gấu 3D Thời Trang....",
      price: "22.950",
      sale: "đã bán 7.6k",
      imgae: require("../image/productPhone/img7.png"),
      detail: [
        require("../image/productPhone/item17.jpg"),
        require("../image/productPhone/item18.jpg"),
      ],
    },
    {
      name: "Ốp lưng iphone dẻo cạnh vuông lưng cứng phím...",
      price: "15.000",
      sale: "đã bán 18k",
      imgae: require("../image/productPhone/img8.png"),
      detail: [
        require("../image/productPhone/item19.jpg"),
        require("../image/productPhone/item20.jpg"),
      ],
    },
    {
      name: "Ốp điện thoại iphone hở táo 6D viền vuông...",
      price: "10.000",
      sale: "đã bán 18k",
      imgae: require("../image/productPhone/img9.png"),
      detail: [
        require("../image/productPhone/item21.jpg"),
        require("../image/productPhone/item19.jpg"),
      ],
    },
    {
      name: "Ốp Điện Thoại Silicon TPU Mềm Chống Sốc Cho...",
      price: "19.000",
      sale: "đã bán 18k",
      imgae: require("../image/productPhone/img10.png"),
    },
    {
      name: "Điện thoại OppoA3s (Oppo A3 S) 2sim ram 6/128G...",
      price: "499.000",
      sale: "đã bán 710",
      imgae: require("../image/productPhone/img11.png"),
      detail: [
        require("../image/productPhone/item22.jpg"),
        require("../image/productPhone/item23.jpg"),
      ],
    },
    {
      name: "Điện thoại Apple iPhone 13 128GB...",
      price: "16.490.000",
      sale: "đã bán 18k",
      imgae: require("../image/productPhone/img12.png"),
      detail: [
        require("../image/productPhone/item24.jpg"),
        require("../image/productPhone/item25.jpg"),
      ],
    },
    {
      name: "Điện thoại di động Inflnix Note10 Điện thoại gốc...",
      price: "2.990.000",
      sale: "đã bán 120k",
      imgae: require("../image/productPhone/img13.png"),
      detail: [
        require("../image/productPhone/item25.jpg"),
        require("../image/productPhone/item26.jpg"),
      ],
    },
    {
      name: "Điện thoại Vivo Y11 ram 8/256G 2sim Chính Hãng...",
      price: "1.790.000",
      sale: "đã bán 20k",
      imgae: require("../image/productPhone/img14.png"),
      detail: [
        require("../image/productPhone/item26.jpg"),
        require("../image/productPhone/item27.jpg"),
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
        <TextInput placeholder="Điện Thoại & Phụ Kiện" style={{fontSize:14,color:'#333',paddingHorizontal:8,outlineStyle: "none",}}></TextInput>
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
        source={require("../image/slider/bannerDT.jpg")}
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
                        {item.price}đ
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

export default ShoppingPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
