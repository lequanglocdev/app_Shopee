import { View, Text ,StyleSheet, Pressable,Dimensions} from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
export default function PaySuccess({navigation}) {
  return (
    <View  style={{alignItems: 'center', justifyContent: 'center', height: Dimensions.get('window').height,backgroundColor:'#F06145'}}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <FontAwesome5 name="check-circle" size={100} color="#fff" />
        <Text style={{fontSize:16,fontWeight:'bold',color:'#fff',marginTop:20}}>Cảm ơn bạn đã mua hàng</Text>
      </View>
      <Pressable 
        onPress={() => navigation.navigate("Home")}
      style={{width: 300,height:40,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderRadius:10,
            bottom: 20, position: 'absolute'}}>
            <Text style={{fontSize: 24, color: "#F06145"}}>Quay Lại Trang Chủ</Text>
      </Pressable>
    </View>
  )
}