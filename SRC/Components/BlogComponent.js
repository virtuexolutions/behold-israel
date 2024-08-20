import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {useNavigation} from '@react-navigation/native';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import { windowHeight, windowWidth } from '../Utillity/utils';
import { moderateScale } from 'react-native-size-matters';
import CustomText from './CustomText';

const BlogComponent = ({item}) => {
    const navigation =useNavigation()
  return (
    <View
    style={[
      styles.Container,
      {
        borderRadius: moderateScale(20, 0.6),
      },
    ]}>
    <View style={styles.imageContainer}>
      <CustomImage
        source={item?.image}
        style={{
          height: '100%',
          width: '100%',
          overflow: 'hidden'
        }}
      />
    </View>
    <CustomText
      isBold
      style={[
        styles.heading,
        {
          fontSize: moderateScale(15, 0.6),
          paddingVertical: moderateScale(5, 0.6),
          marginHorizontal: moderateScale(10, 0.6),

        },
      ]}>
      {item?.mainHeading}
    </CustomText>

    <CustomText
    numberOfLines={3}
      style={[
        styles.text,
        {
          fontSize: moderateScale(11, 0.6),
          marginHorizontal: moderateScale(10, 0.6),
        },
      ]}>{item?.intro}
    </CustomText>

    <CustomText
    onPress={() => {
        navigation.navigate('BlogDetails',{item: item})
    }}
      isBold
      style={[
        styles.btntext,
        {
          paddingVertical: moderateScale(10, 0.6),
          marginHorizontal: moderateScale(10, 0.6),
          fontSize: moderateScale(13, 0.6),
        },
      ]}>
      {'Read MOre >>'}
    </CustomText>
  </View>
  )
}

export default BlogComponent

const styles = StyleSheet.create({
    Container: {
        height: windowHeight * 0.4,
        width: windowWidth * 0.9,
        borderWidth: 1,
        borderColor: 'white',
        overflow: 'hidden',
        marginBottom :moderateScale(15,.3)
      },
      imageContainer: {
        height: windowHeight * 0.2,
        width: windowWidth * 0.9,
      },
      text: {
        color: 'white',
        width: windowWidth * 0.8,
      },
      btntext: {
        color: Color.theme2,
      },
      heading: {
        color: 'white',
        width: windowWidth * 0.85,
      },
})