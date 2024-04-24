import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from './CustomImage';
import CustomText from './CustomText';
import navigationService from '../navigationService';
import { useNavigation } from '@react-navigation/native';

const PopularBooks = ({item}) => {
  console.log('🚀 ~ RecommandedBooksComponent ~ item:', item);
  const navigation =useNavigation()
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('AboutBooks' ,{item :item})}
      style={{
        borderWidth: moderateScale(1, 0.6),
        borderColor: Color.white,
        padding: moderateScale(10, 0.6),
        width: windowWidth * 0.39,
        borderRadius: moderateScale(10, 0.3),
        marginVertical: moderateScale(10, 0.3),
        marginHorizontal: moderateScale(10, 0.3),
      }}>
      <View
        style={{
          height: windowHeight * 0.189,
          width: windowWidth * 0.34,
        }}>
        <CustomImage
          onPress={() => {
            // navigation.navigate('ProductDetail' ,{item :item})
            // console.log('image')
          }}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: moderateScale(10, 0.6),
            overFlow: 'hidden',
          }}
          source={require('../Assets/Images/mission2.png')}
        />
      </View>
      <CustomText
        isBold
        style={{
          fontSize: moderateScale(14, 0.6),
          color: Color.white,
          width: windowWidth * 0.35,
        }}>
        {item?.title}
      </CustomText>
      <CustomText
        numberOfLines={1}
        style={{
          fontSize: moderateScale(12, 0.6),
          color: Color.white,
          paddingVertical: moderateScale(2, 0.6),
        }}>
        {item?.description}
      </CustomText>
    </TouchableOpacity>
  );
};

export default PopularBooks;

const styles = StyleSheet.create({});
