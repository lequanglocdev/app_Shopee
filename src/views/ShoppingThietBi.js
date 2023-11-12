import React from 'react'
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
const ShoppingTv = ({navigation}) => {
  const items = [
    {
      name: "Tai nghe Bluetooth không dây 5.0 MINPRO - AMOI F9...",
      price: "19.000đ",
      sale: "đã bán 6.6k",
      imgae: require("../image/productThietBi/img.png"),
      detail: [
        
      ],
    },
    {
      name: "Loa bluetooth mini không dây,nghe nhạc,giá rẻ...",
      price: "1.000đ",
      sale: "đã bán 11.5k",
      imgae: require("../image/productThietBi/img2.png"),
      detail: [
        
      ],
    },
   
    {
      name: "Miếng dán hình mèo thần tài thu hút tài lộc trang trí...",
      price: "4.950đ",
      sale: "đã bán 11.6k",
      imgae: require("../image/productThietBi/img3.png"),
      detail: [
        
      ],
    },
    {
      name: "Quạt tản nhiệt sò lạnh cho điện thoại S3 - Kẹp 2 chiều..",
      price: "135.000đ",
      sale: "đã bán 18k",
      imgae: require("../image/productThietBi/img4.png"),
      detail: [
        
      ],
    },
    {
      name: "Tai nghe Apple AirPods with Charging Case 2nd...",
      price: "2.690.000đ",
      sale: "đã bán 29.5k",
      imgae: require("../image/productThietBi/img5.png"),
      detail: [
        
      ],
    },
    {
      name: "Loa Bluetooth Mini 5.0 ROBOT RB100 3W - Pin...",
      price: "139.000đ",
      sale: "đã bán 7.5k",
      imgae: require("../image/productThietBi/img6.png"),
      detail: [
        
      ],
    },
    {
      name: "Loa bluetooth nghe nhạc không dây Charge 3 Mini...",
      price: "99.000đ",
      sale: "đã bán 88.6k",
      imgae: require("../image/productThietBi/img7.png"),
      detail: [
        
      ],
    },
    {
      name: "Tai nghe Bluetooth không dây MINPRO M19 -  Hỗ Trợ...",
      price: "37.000đ",
      sale: "đã bán 18k",
      imgae: require("../image/productThietBi/img8.png"),
      detail: [
        
      ],
    },
    {
      name: "Tai nghe BASEUS C17 Type-C có dây có mic cho điện ...",
      price: "129.000đ",
      sale: "đã bán 4.4k",
      imgae: require("../image/productThietBi/img9.png"),
      detail: [
        
      ],
    },
    {
      name: "Tai nghe chụp tai Logitech H111 - 1 jack 3.5mm, Mic...",
      price: "179.000đ",
      sale: "đã bán 5.5k",
      imgae: require("../image/productThietBi/img10.png"),
      detail: [
        
      ],
    },
    {
      name: "Máy Chơi Game Nintendo DSi Full Game...",
      price: "986.000đ",
      sale: "đã bán 5.5k",
      imgae: require("../image/productThietBi/img11.png"),
      detail: [
        
      ],
    },
    {
      name: "Tay Cầm Chơi Game X3/T3 Có Bluetooth Cho ...",
      price: "440.000đ",
      sale: "đã bán 5.5k",
      imgae: require("../image/productThietBi/img12.png"),
      detail: [
        
      ],
    },
    {
      name: "Máy chơi game cầm tay X7 màn hình 4.3 inch tặng ...",
      price: "179.000đ",
      sale: "đã bán 66k",
      imgae: require("../image/productThietBi/img13.png"),
      detail: [
        
      ],
    },
    {
      name: "Máy chơi game cầm tay X7 màn hình 4.3 inch tặng ...",
      price: "690.000đ",
      sale: "đã bán 29.5k",
      imgae: require("../image/productThietBi/img14.png"),
      detail: [
        
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
        <TextInput placeholder="Thiết Bị Điện Tử" style={{fontSize:14,color:'#333',paddingHorizontal:8,outlineStyle: "none",}}></TextInput>
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
        source={require("../image/slider/bannerThietBi.png")}
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
  )
}

export default ShoppingTv

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});