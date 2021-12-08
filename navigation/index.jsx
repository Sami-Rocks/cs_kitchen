import React from "react";
import  {
    View,
    Image,
    TouchableOpacity
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Home, Notif, Fav, Cart } from "../screens"
import { COLORS, icons } from "../constants";
import Svg, { Path } from 'react-native-svg'


const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress  }) => {
    const isSelected = accessibilityState.selected

    if(isSelected){
        return(
            <View style={{ flex:1, alignItems: "center", backgroundColor: COLORS.white }} >
                <View style={{ flexDirection: 'row', position: "absolute", top: 0 }} >
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} ></View>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} ></View>
                </View>
                <TouchableOpacity 
                    style={{
                        top: -22.4,
                        justifyContent: "center",
                        alignItems: "center",
                        flex:1,
                        borderRadius: 50,
                        height: 50,
                        width: 50,
                        backgroundColor: COLORS.primary,
                        boxShadow: "0px 9px 10px rgba(245, 71, 72, .35)",
                    }}  
                    activeOpacity={1}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity> 
            </View>
        )
    }else{
        return(
            <TouchableOpacity 
                style={{
                    flex:1,
                    height: 45,
                    top: -5,
                    backgroundColor: COLORS.white
                }}  
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }

}


const Tabs = () =>{
    return (
        <Tab.Navigator 
            tabBarOptions={{
                showLabel: false,
            }}
            screenOptions={{
                 tabBarStyle: {backgroundColor: COLORS.white , borderTopWidth: 0 },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused})=>(
                        <Image 
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.dark_grey
                            }}
                        />
                    ),
                    tabBarButton: (props) => {
                        return(<TabBarCustomButton 
                            {...props}
                        />)
                    }
                }}
            />
            <Tab.Screen
                name="Fav"
                component={Fav}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused})=>(
                        <Image 
                            source={icons.favorite}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.dark_grey
                            }}
                        />
                    ),
                    tabBarButton: (props) => {
                        return(<TabBarCustomButton 
                            {...props}
                        />)
                    }
                }}
            />
            <Tab.Screen
                name="Notif"
                component={Notif}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused})=>(
                        <Image 
                            source={icons.notifications}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.dark_grey
                            }}
                        />
                    ),
                    tabBarButton: (props) => {
                        return(<TabBarCustomButton 
                            {...props}
                        />)
                    }
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused})=>(
                        <Image 
                            source={icons.cart}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.dark_grey
                            }}
                        />
                    ),
                    tabBarButton: (props) => {
                        return(<TabBarCustomButton 
                            {...props}
                        />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs