import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import CustomImage from './CustomImage'
import { windowHeight, windowWidth } from '../Utillity/utils'
import { moderateScale } from 'react-native-size-matters'

const KidsCards = ({item}) => {
//   console.log("🚀 ~ file: KidsCards.js:9 ~ KidsCards ~ item:", item)
  return (
    <View style={{
        backgroundColor:Color.white,
        padding:moderateScale(10,.6),
        // height:windowHeight*0.15,
        width:windowWidth*0.39,
        borderRadius:moderateScale(10,.3),
        marginVertical:moderateScale(10,.3),
        marginHorizontal:moderateScale(10,.3)
    }}>
        <View style={{
            height:windowHeight*0.189,
            width:windowWidth*0.34,
            // borderRadius:moderateScale(15,.6),

        }}>
            <CustomImage
            style={{
                height:"100%",
                width:'100%',
                borderRadius:moderateScale(10,.6),
                overFlow:'hidden'
            }}
            source={item?.image}
            />
        </View>
        <CustomText 
            numberOfLines={1}
            isBold
            style={{
                fontSize: moderateScale(15, 0.6),
                color: Color.themeBlack  ,
                paddingVertical: moderateScale(5,.6),
                // paddingHorizontal: moderateScale(10, .6)
            }}>
     {item?.title}
        </CustomText>  
        <CustomText 
            numberOfLines={1}
            isBold
            style={{
                fontSize: moderateScale(15, 0.6),
                color:Color.themeBlack,
                // paddingVertical: moderateScale(10, .6),
                // paddingHorizontal: moderateScale(10, .6)
            }}>
     {item?.price}
        </CustomText> 
    </View>
  )
}

export default KidsCards

const styles = StyleSheet.create({})