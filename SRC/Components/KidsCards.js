import { Alert, Platform, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import CustomImage from './CustomImage'
import { windowHeight, windowWidth } from '../Utillity/utils'
import { moderateScale } from 'react-native-size-matters'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../Store/slices/common'
import { useNavigation } from '@react-navigation/native'

const KidsCards = ({item}) => {
    const navigation =useNavigation()
const dispatch =useDispatch()
//   console.log("🚀 ~ file: KidsCards.js:9 ~ KidsCards ~ item:", item)
const cardData = useSelector(state => state.commonReducer.cart);
// console.log("🚀 ~ KidsCards ~ cardData:", cardData)




  return (
    <TouchableOpacity
    onPress={() => {
        if (cardData.find((data, index) => data?.id == item?.id)) {
            Platform.OS == 'android'
              ? ToastAndroid.show('item already added', ToastAndroid.SHORT)
              : Alert.alert('item already added');
          } else {
              dispatch(AddToCart(item))
            // dispatch(AddToCart({...item, quantity: 1, size_id: {}}));
          }
        console.log('item succsessfully add to cart')
}}
    
    style={{
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
              onPress={() => {
                navigation.navigate('ProductDetail' ,{item :item})
                console.log('image')
            //   dispatch(AddToCart(item))
            }}
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
            // numberOfLines={2}
            isBold
            style={{
                fontSize: moderateScale(14, 0.6),
                color: Color.themeBlack  ,
                width:windowWidth*0.35,
                // backgroundColor:'red',
                // paddingVertical: moderateScale(5,.6),
                // paddingHorizontal: moderateScale(10, .6)
            }}>
     {item?.title}
        </CustomText>
        <CustomText 
            numberOfLines={2}
            isBold
            style={{
                fontSize: moderateScale(12, 0.6),
                color: Color.grey,
                paddingVertical: moderateScale(2,.6),
                // paddingHorizontal: moderateScale(10, .6)
            }}>
     {item?.discription}
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
    </TouchableOpacity>
  )
}

export default KidsCards

const styles = StyleSheet.create({})