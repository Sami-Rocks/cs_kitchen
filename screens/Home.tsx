import React, { useState } from 'react'
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
import renderCategories from "../components/categories";
import { COLORS, icons } from '../constants';
import { FONTS, SIZES } from '../constants/theme';
import { catogories, foods } from '../constants/data';
import { int32ARGBColor } from 'react-native-svg';
import renderMeals from '../components/meals';

const stlyes = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
})


const Home = () =>{

    const [foodList, setFoodList] = useState(foods)
    const [ categoryList, setCategoryList ] = useState(catogories)
    const [selectedCategory, setSelectedCategory] = useState()
    
    function onSelectMeal(meal:any){
        console.log(meal)
    }

    function onSeletCategory(category:any){
        let food = foods.filter(a => a.category.includes(category.id))
        console.log(food)
        console.log(category)
        setFoodList(food)
        setSelectedCategory(category)
        // console.log(foodList)
        // console.log(selectedCategory)
    }

    return(
        <SafeAreaView style={stlyes.container}  >

            {renderHeader('home')}      
            <View style={{
                height: 130,
                backgroundColor: '#FFEECE',
                margin: 20,
                borderRadius: 20
            }} >
            </View>
            {renderCategories( categoryList, selectedCategory, onSeletCategory )}
            {renderMeals( foodList, onSelectMeal )}
        </SafeAreaView>
    )
}

export default Home