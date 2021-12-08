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
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 20
    },
})


const Fav = () =>{
    return(
        <SafeAreaView style={stlyes.container} >
            {renderHeader('favorite')}
            <Text>
                Favorite
            </Text>
        </SafeAreaView>
    )
}

export default Fav; 