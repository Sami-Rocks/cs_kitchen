import React from 'react'
import {
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Text
} from "react-native";
import renderHeader from '../components/header';
import { COLORS, icons } from '../constants';
import { FONTS, SIZES } from '../constants/theme';

const stlyes = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})


const Notif = () =>{
    return(
        <SafeAreaView>
            {renderHeader('notifications')}
            <Text>Notif</Text>       
        </SafeAreaView>
    )
}

export default Notif