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

function renderMeals(meals, onSelectMeal){
    
    const renderItem = ({item}) =>{
        return(
            <TouchableOpacity style={{
                padding: SIZES.padding,
                paddingRight: SIZES.padding * 2,
                borderRadius: SIZES.radius,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.white,
                marginRight: SIZES.padding * 2,
                marginTop: SIZES.padding,
                marginBottom: 20,
                marginLeft: 10,
                boxShadow: "1px 5px 27px -1px rgba(0,0,0,0.06)",
            }} 
                onPress={ ()=> onSelectMeal(item) }
            >
                <View style={{
                    width: 170, height: 120,
                    borderRadius: SIZES.radius,
                    alignItems: 'center', justifyContent: 'center'
                }} >
                    <Image 
                        source= {item.image}
                        resizeMode="contain"
                        style={{
                            width: 150, height: 150,
                            marginTop: 20
                        }}
                    />
                </View>
                <View style={{
                    marginTop: 30,
                    textAlign: 'center'
                }}>

                    <Text style={{
                        color: COLORS.black,
                        fontWeight: 900,
                        ...FONTS.h4
                    }} > {item.food} </Text>
                    <Text style={{
                        color: COLORS.black,
                        fontWeight: 900,
                        color: COLORS.dark_grey,
                        ...FONTS.body4
                    }} > {item.ingredients} </Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        marginTop: 5
                    }} >
                        <Text style={{
                            color: COLORS.primary,
                            fontWeight: 900,
                            position: 'relative',
                            bottom: 4
                        }} > GHC </Text>
                        <Text style={{
                            color: COLORS.black,
                            fontWeight: 900,
                            ...FONTS.h1
                        }} > {item.price} </Text>

                    </View>
                </View>



            </TouchableOpacity>
        )
    }
    return(
        <View style={{ padding: SIZES.padding * 2 }} >
            <Text style={{ ...FONTS.h3}}> Available Now </Text>

            <FlatList  
                data={meals}
                horizontal
                showsHorizontalScrollIndicator = {false}
                keyExtractor={item=> `${item.id}`}
                renderItem={renderItem}
            />
        </View>

    )
}

export default renderMeals