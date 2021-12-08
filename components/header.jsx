import React from 'react'
import {
    View,
    Image,
    Text
} from "react-native";
import { COLORS, icons } from '../constants';
import { FONTS, SIZES } from '../constants/theme';


function renderHeader( where ){
    return(
        <View style={{ flexDirection: 'row', height: 50, marginTop: 10 }} >
            <View style={{ width: 50, paddingLeft: SIZES.padding * 2, justifyContent: 'center' }} >
                <Image 
                    source={icons[where]}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30
                    }}
                />

            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <View style={{ 
                    width: '70%', height: '100%', 
                    backgroundColor: COLORS.light_grey, 
                    alignItems: 'center', justifyContent: 'center',
                    borderRadius: 50
                    }}>
                    <Text style={{ ...FONTS.h3 }} > { where.charAt(0).toUpperCase() + where.slice(1) } </Text>
                    
                </View> 
            </View>
        </View>
    )
}

export default renderHeader