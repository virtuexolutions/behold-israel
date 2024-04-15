import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import { moderateScale } from 'react-native-size-matters'
import CustomText from './CustomText'

const DonationComponent = ({item}) => {
  console.log("🚀 ~ DonationComponent ~ item:", item)
  return (
    <ImageBackground
          resizeMode="cover"
          source={item?.image}
          style={{
            width: windowWidth * 0.4,
            borderRadius: moderateScale(20, 0.2),
            height: windowHeight * 0.14,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomText
            style={{
              position: 'absolute',
              bottom: 0,
              textAlign: 'center',
              width: '100%',
              height: '40%',
              backgroundColor: 'rgba(0,0,0,0.4)',
              color: 'white',
              marginTop: moderateScale(22, 0.2),
              fontWeight: 'bold',
              fontSize: moderateScale(22, 0.3),
              paddingTop :moderateScale(7,.6)
            }}>
            {item?.title}
          </CustomText>
         </ImageBackground>
  )
}

export default DonationComponent

const styles = StyleSheet.create({})