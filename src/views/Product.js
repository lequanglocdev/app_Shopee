import { View, Text, StyleSheet, ScrollView, Image ,Pressable } from "react-native";

import React from "react";
import Slider from "../components/Slider";
import Search from "../components/Search";
import SectionRecomment from "../components/SectionRecoment";
export default function Product() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{}}>
          <Image
            source={require("../image/bannerHome.png")}
            style={{ width: "100%", height: 192 }}
          />
        </View>
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
            borderWidth: 1,
          }}
        >
           <View
            style={{
              flex: 1,
              height: 350,
              flexDirection: "column",
              alignItems: "center",
              borderWidth: 1,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={{ width: 107, height: 147, alignItems: "center" }}
                // onPress={() => {
                //   navigation.navigate("ShopingNam");
                // }}
              >
                <Image source={require("../../src/image/imageNam.png")} 
                      style={{width:177,height:169}}
                />
                <Text style={{ textAlign: "center", width: 88 }}>
                  Thời Trang Nam
                </Text>
              </Pressable>

              <Pressable
                style={{ width: 107, height: 147, alignItems: "center" }}
                // onPress={() => {
                //   navigation.navigate("ShopingNam");
                // }}
              >
                <Image source={require("../../src/image/imageDT.png")} 
                      style={{width:107,height:107}}

                />
                <Text style={{ textAlign: "center", width: 88 }}>
                  Điện Thoại & Phụ Kiện
                </Text>
              </Pressable>

              <Pressable
                style={{ width: 107, height: 147, alignItems: "center" }}
                // onPress={() => {
                //   navigation.navigate("ShopingNam");
                // }}
              >
                <Image source={require("../../src/image/imageTV.png")} 
                      style={{width:107,height:107}}

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
                // onPress={() => {
                //   navigation.navigate("ShopingNam");
                // }}
              >
                <Image source={require("../../src/image/imageNu.png")} 
                      style={{width:107,height:107}}

                />
                <Text style={{ textAlign: "center", width: 88 }}>
                  Thời Trang Nữ
                </Text>
              </Pressable>

              <Pressable
                style={{ alignItems: "center" }}
                // onPress={() => {
                //   navigation.navigate("ShopingNam");
                // }}
              >
                <Image source={require("../../src/image/imageBaby.png")} 
                      style={{width:107,height:107}}

                />
                <Text style={{ textAlign: "center", width: 88 }}>Mẹ & Bé</Text>
              </Pressable>

              <Pressable
                style={{ alignItems: "center" }}
                // onPress={() => {
                //   navigation.navigate("ShopingNam");
                // }}
              >
                <Image source={require("../../src/image/imageHouse.png")} 
                      style={{width:107,height:107}}

                />
                <Text style={{ textAlign: "center", width: 88 }}>
                  Nhà Cửa & Đời Sống
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <SectionRecomment />
        <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              marginTop: 4,
            }}
          >
            <View
              style={{
                width: 360,
                flexDirection: "row",
                margin: 4,
              }}
            >
              <View
                style={{
                  width: 180,
                  height: 270,
                  borderRadius: 4,
                  backgroundColor: "#ccc",
                  marginRight: 4,
                  padding: 4,
                }}
              >
                {/* Image */}

                <View style={{ width: 177, height: 169 }}>
                  <Image source={require("../../src/image/productHome.png")} style={{width:177,height:169}} />
                </View>
                {/* desciption */}
                <View>
                  <View>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      Áo khoác dù nike chính hãng nam nữ chát gió 2 ...
                    </Text>
                  </View>

                  <View style={{ width: 80, height: 30, margin: 4 }}>
                    <Pressable
                      style={{ borderWidth: 1, borderColor: "#F06145" }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#F06145",
                          backgroundColor: "#fff",
                        }}
                      >
                        Flash sale
                      </Text>
                    </Pressable>
                  </View>

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
                      100.000đ
                    </Text>
                    <Text style={{ color: "#817B7B", fontSize: 12 }}>
                      Đã bán 1k/tháng
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  width: 180,
                  height: 270,
                  borderRadius: 4,
                  backgroundColor: "#ccc",
                  marginRight: 4,
                  padding: 4,
                }}
              >
                {/* Image */}

                <View style={{ width: 177, height: 169 }}>
                  <Image source={require("../../src/image/productHome.png")} style={{width:177,height:169}} />
                </View>
                {/* desciption */}
                <View>
                  <View>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      Áo khoác dù nike chính hãng nam nữ chát gió 2 ...
                    </Text>
                  </View>

                  <View style={{ width: 80, height: 30, margin: 4 }}>
                    <Pressable
                      style={{ borderWidth: 1, borderColor: "#F06145" }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#F06145",
                          backgroundColor: "#fff",
                        }}
                      >
                        Flash sale
                      </Text>
                    </Pressable>
                  </View>

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
                      100.000đ
                    </Text>
                    <Text style={{ color: "#817B7B", fontSize: 12 }}>
                      Đã bán 1k/tháng
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                width: 360,
                flexDirection: "row",
                margin: 4,
              }}
            >
              <View
                style={{
                  width: 180,
                  height: 270,
                  borderRadius: 4,
                  backgroundColor: "#ccc",
                  marginRight: 4,
                  padding: 4,
                }}
              >
                {/* Image */}

                <View style={{ width: 177, height: 169 }}>
                  <Image source={require("../../src/image/productHome.png")} style={{width:177,height:169}} />
                </View>
                {/* desciption */}
                <View>
                  <View>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      Áo khoác dù nike chính hãng nam nữ chát gió 2 ...
                    </Text>
                  </View>

                  <View style={{ width: 80, height: 30, margin: 4 }}>
                    <Pressable
                      style={{ borderWidth: 1, borderColor: "#F06145" }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#F06145",
                          backgroundColor: "#fff",
                        }}
                      >
                        Flash sale
                      </Text>
                    </Pressable>
                  </View>

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
                      100.000đ
                    </Text>
                    <Text style={{ color: "#817B7B", fontSize: 12 }}>
                      Đã bán 1k/tháng
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  width: 180,
                  height: 270,
                  borderRadius: 4,
                  backgroundColor: "#ccc",
                  marginRight: 4,
                  padding: 4,
                }}
              >
                {/* Image */}

                <View style={{ width: 177, height: 169 }}>
                  <Image source={require("../../src/image/productHome.png")} style={{width:177,height:169}} />
                </View>
                {/* desciption */}
                <View>
                  <View>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      Áo khoác dù nike chính hãng nam nữ chát gió 2 ...
                    </Text>
                  </View>

                  <View style={{ width: 80, height: 30, margin: 4 }}>
                    <Pressable
                      style={{ borderWidth: 1, borderColor: "#F06145" }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#F06145",
                          backgroundColor: "#fff",
                        }}
                      >
                        Flash sale
                      </Text>
                    </Pressable>
                  </View>

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
                      100.000đ
                    </Text>
                    <Text style={{ color: "#817B7B", fontSize: 12 }}>
                      Đã bán 1k/tháng
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
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
