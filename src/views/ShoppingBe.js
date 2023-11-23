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
const ShoppingBe = ({navigation}) => {
  const items = [
    {
      name: "Dầu mát xa dưỡng ẩm Johnson's baby oil pink ...",
      price: "44.000",
      sale: "đã bán 10.6k",
      imgae: require("../image/productBe/img.png"),
      detail: [
        
      ],
    },
    {
      name: "Nước hoa cho bé Johnson's Baby nhiều mùi ...",
      price: "49.000",
      sale: "đã bán 92.5k",
      imgae: require("../image/productBe/img2.png"),
      detail: [
        
      ],
    },
    
    {
      name: "Bịch 50 miếng bỉm quần Miobuss cao cấp cho con...",
      price: "200.000",
      sale: "đã bán 14k",
      imgae: require("../image/productBe/img3.png"),
      detail: [
        
      ],
    },
    {
      name: "[MẪU MỚI TẶNG 4 MIẾNG] Miếng Lót Bobby Newborn ..",
      price: "95.000",
      sale: "đã bán 66k",
      imgae: require("../image/productBe/img4.png"),
      detail: [
        
      ],
    },
    {
      name: "[Mẫu mới] Tã quần UniDry Siêu khô thoáng gói Super..",
      price: "269.000",
      sale: "đã bán 66k",
      imgae: require("../image/productBe/img5.png"),
      detail: [
        
      ],
    },
    {
      name: "[Mẫu mới] Tã quần UniDry Siêu khô thoáng gói Super..",
      price: "269.000",
      sale: "đã bán 7.8k",
      imgae: require("../image/productBe/img6.png"),
      detail: [
        
      ],
    },
    {
      name: "(1 Thanh) Sữa Meiji Thanh Số 0, Nhập Khẩu 27g...",
      price: "26.950",
      sale: "đã bán 33.6k",
      imgae: require("../image/productBe/img7.png"),
      detail: [
        
      ],
    },
    {
      name: "Dầu Dưỡng Ẩm Mát Xa Johnson's Baby...",
      price: "45.000",
      sale: "đã bán 9.1k",
      imgae: require("../image/productBe/img8.png"),
      detail: [
        
      ],
    },
    {
      name: "Ghế nhún, ghế rung (GHẾ + GỐI + THÚ TREO)  đa năng...",
      price: "160.000",
      sale: "đã bán 66k",
      imgae: require("../image/productBe/img9.png"),
      detail: [
        
      ],
    },
    {
      name: "Băng Vệ Sinh MAMA 12 Miếng (Cho Mẹ Sau Sinh) ...",
      price: "30.000",
      sale: "đã bán 66k",
      imgae: require("../image/productBe/img10.png"),
      detail: [
        
      ],
    },
    {
      name: "(Xưởng Sản Xuất) Xe tập đi gỗ - xe gà tập đi hình...",
      price: "95.000",
      sale: "đã bán 14k",
      imgae: require("../image/productBe/img11.png"),
      detail: [
        
      ],
    },
    {
      name: "Chậu tắm cho bé hậu Tắm Cho Bé Đa Năng Dễ Dàng..",
      price: "26.950",
      sale: "đã bán 63.6k",
      imgae: require("../image/productBe/img12.png"),
      detail: [
        
      ],
    },
    {
      name: "HUNG 10 bịch Khăn giấy ướt  DUCK con vịt vàng ...",
      price: "45.000",
      sale: "đã bán 48k",
      imgae: require("../image/productBe/img13.png"),
      detail: [
        
      ],
    },
    {
      name: "Bình sữa hình mèo PPSU cổ rộng kèm tay cầm van ...",
      price: "29.000",
      sale: "đã bán 66k",
      imgae: require("../image/productBe/img14.png"),
      detail: [
        
      ],
    },
    {
      name: "Chậu Tắm Ếch cao cấp cho bé có van thoát nước ...",
      price: "30.000",
      sale: "đã bán 66k",
      imgae: require("../image/productBe/img15.png"),
      detail: [
        
      ],
    },
    {
      name: "[Mẫu mới] Tã quần UniDry Siêu khô thoáng gói Super..",
      price: "269.000",
      sale: "đã bán 66k",
      imgae: require("../image/productBe/img6.png"),
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
        <TextInput placeholder="Mẹ & Bé" style={{fontSize:14,color:'#333',paddingHorizontal:8,outlineStyle: "none",}}></TextInput>
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
        source={require("../image/slider/bannerBe.png")}
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
                    <Text style={{ fontSize: 12, color: "#000000DE",fontWeight:'bold'}}>
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
  )
}

export default ShoppingBe

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});