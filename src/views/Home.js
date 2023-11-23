import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import Slider from "../components/Slider";
import Search from "../components/Search";
import SectionRecomment from "../components/SectionRecoment";
import Product from "../components/Product";
export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Slider />
          {/* <View style={{}}>
            <Image
              source={require("../image/slider/bannerHome.png")}
              style={{ width: "100%", height: 192 }}
            />
          </View> */}
          {/* Search */}
          <Search />
        </View>

        <View
          style={{
            width: "100%",
            height: 234,
            backgroundColor: "#D60019",
            justifyContent: "center",
          }}
        >
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../image/iconOpption1.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text
                  style={{
                    width: 75,
                    textAlign: "center",
                    fontSize: 12,
                    color: "#fff",
                  }}
                >
                  Shoppe Thời Trang{" "}
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../image/iconOpption2.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text
                  style={{
                    width: 75,
                    textAlign: "center",
                    fontSize: 12,
                    color: "#fff",
                  }}
                >
                  ShopeeFood 1Đ+FreeShip
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../image/iconOpption3.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text
                  style={{
                    width: 75,
                    textAlign: "center",
                    fontSize: 12,
                    color: "#fff",
                  }}
                >
                  Khung Giờ Săn Sale
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../image/iconOpption4.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text
                  style={{
                    width: 75,
                    textAlign: "center",
                    fontSize: 12,
                    color: "#fff",
                  }}
                >
                  Voucher Giảm Đến 500.000Đ
                </Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 40 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../image/iconOpption5.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text
                  style={{
                    width: 75,
                    textAlign: "center",
                    fontSize: 12,
                    color: "#fff",
                  }}
                >
                  Shopee Làm Đẹp
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../image/iconOpption6.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text
                  style={{
                    width: 75,
                    textAlign: "center",
                    fontSize: 12,
                    color: "#fff",
                  }}
                >
                  Miễn Phí Ship - Có Shopee
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../image/iconOpption7.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text
                  style={{
                    width: 100,
                    textAlign: "center",
                    fontSize: 12,
                    color: "#fff",
                  }}
                >
                  Hàng Hiệu Outlet Giảm 50%
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../image/iconOpption8.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text
                  style={{
                    width: 75,
                    textAlign: "center",
                    fontSize: 12,
                    color: "#fff",
                  }}
                >
                  Khách Hàng Thân Thiết
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ width: "100", height: 110 }}>
          <Image
            source={require("../image/slider/banner.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <SectionRecomment />

        <Product />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
