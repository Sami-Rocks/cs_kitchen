import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation";
import { Home, Fav, Notif, Cart } from "./screens";

const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer >
      <Stack.Navigator
      
        screenOptions={{
          headerShown: false,

        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Fav" component={Fav} />
        <Stack.Screen name="Notif" component={Notif} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;