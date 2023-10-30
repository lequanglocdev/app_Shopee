import React from "react";
import { View, Text, Image, Pressable ,FlatList} from "react-native";

const products = [
  {
    url:require('../image/productHome.png'),
    name: "Dép Nam quai ngang LBB cao 4cm đẳng cấp - dép LÊ...",
    price:20000,
    sale:'2.6k'  
  },
  {
    url:require('../image/productHome.png'),
    name: "Dép Nam quai ngang LBB cao 4cm đẳng cấp - dép LÊ...",
    price:20000,
    sale:'2.6k'  
  },
  {
    url:require('../image/productHome.png'),
    name: "Dép Nam quai ngang LBB cao 4cm đẳng cấp - dép LÊ...",
    price:20000,
    sale:'2.6k'  
  },
  {
    url:require('../image/productHome.png'),
    name: "Dép Nam quai ngang LBB cao 4cm đẳng cấp - dép LÊ...",
    price:20000,
    sale:'2.6k'  
  },
  {
    url:require('../image/productHome.png'),
    name: "Dép Nam quai ngang LBB cao 4cm đẳng cấp - dép LÊ...",
    price:20000,
    sale:'2.6k'  
  },
  {
    url:require('../image/productHome.png'),
    name: "Dép Nam quai ngang LBB cao 4cm đẳng cấp - dép LÊ...",
    price:20000,
    sale:'2.6k'  
  },
];
const Product = () => {
  return (
    <FlatList
        data={products}
        numColumns={2}
        renderItem = {({item}) =>{
            return(
                <Pressable>
                <View
                  style={{ width: "100%", paddingHorizontal: 10, marginVertical: 6 ,borderRadius:10,overflow:"hidden"}}
                >
                  <View style={{ width: 178, height: 270, backgroundColor: "#ccc" , }}>
                    {/* image */}
                    <View>
                      <Image
                        source={item.url}
                        style={{ width: 177, height: 169 }}
                      />
                    </View>
                    {/* description */}
                    <View>
                      {/* text */}
                      <View style={{paddingHorizontal:4,marginVertical:4}}>
                        <Text style={{fontSize:12,color:'#000000DE'}}>{item.name}</Text>
                      </View>
                      {/* lable */}
                      <View style={{paddingHorizontal:4}}>
                        <Pressable style={{ borderWidth: 1, borderColor: "#F06145" ,width:100 , borderRadius:6 ,overflow:'hidden' }}>
                          <Text
                            style={{
                              fontSize: 16,
                              color: "#F06145",
                              backgroundColor: "#fff",
                              paddingHorizontal:4
                            
                            }}
                          >
                            Flash sale
                          </Text>
                        </Pressable>
                      </View>
                      {/* Price */}
                      <View style={{paddingHorizontal:4}}>
                        <View
                          style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{ color: "#F06145", fontSize: 16, fontWeight: "bold" }}
                          >
                            {item.price}đ
                          </Text>
                          <Text style={{ color: "#817B7B", fontSize: 12 ,paddingHorizontal:2 }}>
                            Đã bán {item.sale}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
            )
        }}
    
    />
  
  );
};

export default Product;
