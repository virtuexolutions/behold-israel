import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import {windowWidth} from '../Utillity/utils';

const BookDescription = ({item, verseNo}) => {
  console.log('🚀 ~ BookDescription ~ verseNo:', verseNo);
  console.log('🚀 ~ BookDescription ~ item kamal==================>:', item);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: moderateScale(30, 0.6),
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <CustomText
          isBold
          style={{
            fontSize: moderateScale(14, 0.6),
            color: Color.white,
            paddingVertical: moderateScale(5, 0.6),
            width: windowWidth * 0.04,
            textAlign: 'left',
          }}>
          {verseNo}
        </CustomText>
        <CustomText
          isBold
          style={{
            fontSize: moderateScale(12, 0.6),
            color: Color.white,
            paddingVertical: moderateScale(5, 0.6),
            width: windowWidth * 0.8,
            textAlign: 'left',
          }}>
          {item}
        </CustomText>
      </View>
    </ScrollView>
  );
};

export default BookDescription;
