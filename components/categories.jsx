import React from 'react'
import {
    View,
    TouchableOpacity,
    Image,
    FlatList,
    Text
} from "react-native";
import { COLORS, icons } from '../constants';
import { FONTS, SIZES } from '../constants/theme';

function renderCategories(categories, selectedCategory, onSeletCategory){
    
    const renderItem = ({item}) =>{
        return(
            <TouchableOpacity style={{
                padding: SIZES.padding,
                paddingRight: SIZES.padding * 2,
                backgroundColor: (1 == item.id) ?  COLORS.primary : COLORS.grey,
                borderRadius: SIZES.radius,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginRight: SIZES.padding,
                marginTop: SIZES.padding,
                marginBottom: 20,
                boxShadow: "1px 5px 15px -7px rgba(245,71,73,0.20)",
            }} 
                onPress={ ()=> onSeletCategory(item) }
            >
                <View style={{
                    width: 40, height: 40,
                    borderRadius: SIZES.radius,
                    alignItems: 'center', justifyContent: 'center',
                    backgroundColor: COLORS.white,
                    marginRight: SIZES.padding,
                }} >
                    <Image 
                        source= {item.image}
                        resizeMode="contain"
                        style={{
                            width: 25, height: 25
                        }}
                    />
                </View>

                <Text style={{
                    color: (1 === item.id) ?  COLORS.white : COLORS.black
                }} > {item.category} </Text>

            </TouchableOpacity>
        )
    }
    return(
        <View style={{ padding: SIZES.padding * 2 }} >
            <Text style={{ ...FONTS.h3}}> Categeories </Text>

            <FlatList  
                data={categories}
                horizontal
                showsHorizontalScrollIndicator = {false}
                keyExtractor={item=> `${item.id}`}
                renderItem={renderItem}
            />
        </View>

    )
}

export default renderCategories