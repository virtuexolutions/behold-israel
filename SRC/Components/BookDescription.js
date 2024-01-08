import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import Color from '../Assets/Utilities/Color'
import { moderateScale } from 'react-native-size-matters'
import { windowWidth } from '../Utillity/utils'

const BookDescription = ({item}) => {
  return (
    <ScrollView contentContainerStyle={{
        paddingBottom:moderateScale(30,.6)
    }}>
        
    <CustomText
        // numberOfLines={1s}
        isBold
        style={{
            fontSize: moderateScale(12, 0.6),
            color: Color.white,
            paddingVertical: moderateScale(5, .6),
            width: windowWidth * 0.8,
            textAlign: 'left',
            // backgroundColor:'red',
            // paddingVertical: moderateScale(30, .6)
        }}>
           {item}
        </CustomText>
    </ScrollView>
  )
}

export default BookDescription