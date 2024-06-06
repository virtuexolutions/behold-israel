import { Alert, Platform, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import CustomImage from './CustomImage'
import { windowHeight, windowWidth } from '../Utillity/utils'
import { moderateScale } from 'react-native-size-matters'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart, RemoveToCart } from '../Store/slices/common'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../Assets/Utilities/Color'
import { baseUrl } from '../Config'
import CustomButton from './CustomButton'


const KidsCards = ({item}) => {
    console.log("🚀 ~ KidsCards ~ item:", item)
    const navigation =useNavigation()
const dispatch =useDispatch()
//   console.log("🚀 ~ file: KidsCards.js:9 ~ KidsCards ~ item:", item)
const cardData = useSelector(state => state.commonReducer.cart);
// console.log("🚀 ~ KidsCards ~ cardData:", cardData)




  return (
    <View>
    <TouchableOpacity
    
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
                if (cardData.find((data, index) => data?.id == item?.id)) {
                    Platform.OS == 'android'
                      ? ToastAndroid.show('item already added', ToastAndroid.SHORT)
                      : Alert.alert('item already added');
                  } else {
                      dispatch(AddToCart(item))
                      console.log('item succsessfully add to cart')
                    // dispatch(AddToCart({...item, quantity: 1, size_id: {}}));
                  }
        }}
             
            style={{
                height:"100%",
                width:'100%',
                borderRadius:moderateScale(10,.6),
                overFlow:'hidden'
            }}
            source={{uri: `${baseUrl}${item?.photo}`}}
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
     {item?.description}
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
     ${item?.price}
        </CustomText> 
        <TouchableOpacity 
            onPress={() => {
                if (cardData.find((data, index) => data?.id == item?.id)) {
                    // Platform.OS == 'android'
                    //   ? ToastAndroid.show('item already added', ToastAndroid.SHORT)
                    //   : Alert.alert('item already added');
                    dispatch(RemoveToCart({id: item?.id}))
                  } else {
                      dispatch(AddToCart({...item, quantity: 1}))
                          // Platform.OS == 'android'
                    //   ? ToastAndroid.show('item already added', ToastAndroid.SHORT)
                    //   : Alert.alert('item already added');
                    // dispatch(AddToCart({...item, quantity: 1, size_id: {}}));
                  }
                console.log('item succsessfully add to cart')
        }}
        >
            <Icon
            as={Ionicons}
            name={cardData?.some((data, index) => data?.id === item?.id) ? 'cart' : 'cart-outline'}
            size={moderateScale(24,0.3)}
            color={Color.black}
            />

        </TouchableOpacity>
    </TouchableOpacity>
    {/* {
        cardData.find((data, index) => data?.id == item?.id) &&
    
    <CustomButton
                isBold
                onPress={() => {
                 dispatch(RemoveToCart({id : item?.id }))
                }}
                text={'Remove'}
                textColor={Color.theme2}
                width={windowWidth * 0.3}
                height={windowHeight * 0.04}
                fontSize={moderateScale(13, 0.6)}
                // marginBottom={moderateScale(10,.3)}
                // marginTop={moderateScale(20, 0.3)}
                bgColor={Color.themeColor}
                borderRadius={moderateScale(1, 0.3)}
                borderColor={Color.theme2}
                borderWidth={1}
                // isGradient
              />
            } */}
    </View>
  )
}

export default KidsCards

const styles = StyleSheet.create({})