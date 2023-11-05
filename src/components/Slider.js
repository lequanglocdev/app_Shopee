import React, { useState, useEffect, useRef } from "react";
import { TextInput, Image, Text, View, ScrollView } from "react-native";
import { Dimensions } from "react-native";
const { width: screenWidth } = Dimensions.get("window");
const Slider = () => {
  const [imageList, setImageList] = useState([]);
  const stepCarousel = useRef(null);
  useEffect(() => {
    // 1 loading image
    const images = [
      {
        image: (
          <Image
            source={require("../../src/image/slider/bannerHome.png")}
            resizeMode="stretch"
            style={{ width: screenWidth, height: "100%" }}
          />
        ),
      },
      {
        image: (
          <Image
            source={require("../../src/image/slider/bannerHome2.jpg")}
            resizeMode="stretch"
            style={{ width: screenWidth, height: "100%" }}
          />
        ),
      },
      {
        image: (
          <Image
            source={require("../../src/image/slider/bannerHome3.jpg")}
            resizeMode="stretch"
            style={{ width: screenWidth, height: "100%" }}
          />
        ),
      },
      {
        image: (
          <Image
            source={require("../../src/image/slider/bannerHome4.jpg")}
            resizeMode="stretch"
            style={{ width: screenWidth, height: "100%" }}
          />
        ),
      },
      {
        image: (
          <Image
            source={require("../../src/image/slider/bannerHome5.jpg")}
            resizeMode="stretch"
            style={{ width: screenWidth, height: "100%" }}
          />
        ),
      },
      {
        image: (
          <Image
            source={require("../../src/image/slider/bannerHome6.jpg")}
            resizeMode="stretch"
            style={{ width: screenWidth, height: "100%" }}
          />
        ),
      },
    ];

    // cập nhật hình lên state
    setImageList(images);
  }, []);

  useEffect(() => {
    if (imageList.length > 0) {
      let index = 0;
      setInterval(() => {
        stepCarousel.current.scrollTo({
          x: index * screenWidth,
          y: 0,
          animated: true,
        });
        index += 1;
        if (index === imageList.length) {
          index = 0;
        }
      }, 2000);
    }
  }, [imageList]);

  // const handleScroll = (e) =>{
  //   if(!e){
  //     return
  //   }
  //   const {nativeEvent} = e
  //   if(nativeEvent && nativeEvent.contentOffset){
  //     const
  //   }
  // }
  return (
    <View>
      <ScrollView
        // pagingEnabled
        horizontal
        contentContainerStyle={{
          width: screenWidth * imageList.length,
          height: 192,
        }}
        // onScroll={handleScroll}
        ref={stepCarousel}
      >
        {imageList.map((e, index) => (
          <View key={index}>{e.image}</View>
        ))}
      </ScrollView>
    </View>
  );
};
export default Slider;
