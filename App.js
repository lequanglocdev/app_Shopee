import { StyleSheet, Text, View } from "react-native";
import { Home, Product, Notify, User, Login ,ShopingNam ,ShoppingNu,ShoppingHouse,ShoppingBe,ShoppingPhone,ShoppingThietBi,DetailProduct} from "./src/views";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
function MyTabs() {
  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      background: "#fff",
    },
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Trang chủ"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",

                    width: 80,
                  }}
                >
                  <FontAwesome
                    name="home"
                    size={30}
                    color={focused ? "#F06145" : "#111"}
                  />
                  <Text style={{ fontSize: 14, color: focused ? "#F06145" : "#111" }}>Trang chủ</Text>
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Mua hàng"
        component={Product}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",

                    width: 80,
                  }}
                >
                  <FontAwesome5 name="shopping-bag" size={24} color={focused ? "#F06145" : "#111"} />
                  <Text style={{ fontSize: 14, color: focused ? "#F06145" : "#111" }}>Mua hàng</Text>
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Thông báo"
        component={Notify}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",

                    width: 80,
                  }}
                >
                  <Ionicons name="notifications" size={24} color={focused ? "#F06145" : "#111"} />
                  <Text style={{ fontSize: 14, color:focused ? "#F06145" : "#111"}}>Thông báo</Text>
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Tôi"
        component={User}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",

                    width: 80,
                  }}
                >
                  <FontAwesome name="user" size={24} color={focused ? "#F06145" : "#111"} />
                  <Text style={{ fontSize: 14, color: focused ? "#F06145" : "#111" }}>Tôi</Text>
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="ShopingNam" component={ShopingNam} />
        <Stack.Screen name="ShoppingNu" component={ShoppingNu} />
        <Stack.Screen name="ShoppingHouse" component={ShoppingHouse} />
        <Stack.Screen name="ShoppingPhone" component={ShoppingPhone} />
        <Stack.Screen name="ShoppingBe" component={ShoppingBe} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
        <Stack.Screen name="ShoppingThietBi" component={ShoppingThietBi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
