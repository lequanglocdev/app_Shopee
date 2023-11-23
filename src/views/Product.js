import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

import React from "react";
import Slider from "../components/Slider";
import Search from "../components/Search";
import SectionRecomment from "../components/SectionRecoment";
export default function Product({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Slider/>
        {/* <View style={{}}>
          <Image
            source={require("../image/slider/bannerHome.png")}
            style={{ width: "100%", height: 192 }}
          />
        </View> */}
        <Search />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            height: 54,
            backgroundColor: "#dadada",
          }}
        >
          <View>
            <Text style={{ fontSize: 20, color: "#EE4D2D" }}>DANH MỤC</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>Xem thêm </Text>
            <Image
              source={require("../image/iconArrow.png")}
              style={{ marginLeft: 10 }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            height: 350,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              height: 350,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={{ width: 107, height: 147, alignItems: "center" }}
                onPress={() => {
                  navigation.navigate("ShopingNam");
                }}
              >
                <Image
                  source={require("../../src/image/imageNam.png")}
                  style={{ width: 107, height: 107 }}
                />
                <Text style={{ textAlign: "center", width: 88 }}>
                  Thời Trang Nam
                </Text>
              </Pressable>

              <Pressable
                style={{ width: 107, height: 147, alignItems: "center" }}
                onPress={() => {
                  navigation.navigate("ShoppingPhone");
                }}
              >
                <Image
                  source={require("../../src/image/imageDT.png")}
                  style={{ width: 107, height: 107 }}
                />
                <Text style={{ textAlign: "center", width: 88 }}>
                  Điện Thoại & Phụ Kiện
                </Text>
              </Pressable>

              <Pressable
                style={{ width: 107, height: 147, alignItems: "center" }}
                onPress={() => {
                  navigation.navigate("ShoppingThietBi");
                }}
              >
                <Image
                  source={require("../../src/image/imageTV.png")}
                  style={{ width: 107, height: 107 }}
                />
                <Text style={{ textAlign: "center", width: 88 }}>
                  Thiết Bị Điện Tử
                </Text>
              </Pressable>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                justifyContent: "space-between",
              }}
            >
              <Pressable
                style={{ alignItems: "center" }}
                onPress={() => {
                  navigation.navigate("ShoppingNu");
                }}
              >
                <Image
                  source={require("../../src/image/imageNu.png")}
                  style={{ width: 107, height: 107 }}
                />
                <Text style={{ textAlign: "center", width: 88 }}>
                  Thời Trang Nữ
                </Text>
              </Pressable>

              <Pressable
                style={{ alignItems: "center" }}
                onPress={() => {
                  navigation.navigate("ShoppingBe");
                }}
              >
                <Image
                  source={require("../../src/image/imageBaby.png")}
                  style={{ width: 107, height: 107 }}
                />
                <Text style={{ textAlign: "center", width: 88 }}>Mẹ & Bé</Text>
              </Pressable>

              <Pressable
                style={{ alignItems: "center" }}
                onPress={() => {
                  navigation.navigate("ShoppingHouse");
                }}
              >
                <Image
                  source={require("../../src/image/imageHouse.png")}
                  style={{ width: 107, height: 107 }}
                />
                <Text style={{ textAlign: "center", width: 88 }}>Nhà Cửa</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <SectionRecomment />
  
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
