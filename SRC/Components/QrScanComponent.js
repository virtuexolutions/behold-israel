import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from './CustomImage';
import Color from '../Assets/Utilities/Color';
import CustomText from './CustomText';

const QrScanComponent = () => {
  return (
    <View
      style={{
        height: windowHeight * 0.4,
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: windowHeight * 0.12,
          width: windowHeight * 0.12,
          overflow: 'hidden',
          borderColor: 'red',
          borderWidth: moderateScale(1, 0.6),
          borderRadius: moderateScale((windowHeight * 0.12) / 2),
          marginHorizontal: moderateScale(25, 0.3),
        }}>
        <CustomImage
          style={{
            overflow: 'hidden',

            height: '100%',
            width: '100%',
          }}
          source={require('../Assets/Images/dummyUser.png')}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CustomText
          isBold
          style={{
            color: Color.white,
            width: windowWidth,
            textAlign: 'center',
            fontSize: moderateScale(18, 0.6),
            paddingVertical: moderateScale(10, 0.6),
          }}>
          Donna W.wade
        </CustomText>
        <CustomText
          style={{
            color: Color.white,
            width: windowWidth * 0.7,
            textAlign: 'justify',
            fontSize: moderateScale(12, 0.6),
          }}>
          {
            'Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum has been the industrys sta'
          }
        </CustomText>
        <View
          style={{
            height: windowHeight * 0.14,
            width: windowHeight * 0.14,
            overflow: 'hidden',
            borderRadius: moderateScale(10, 0.6),
          }}>
          <CustomImage
            style={{
              overflow: 'hidden',
              height: '100%',
              width: '100%',
            }}
            source={require('../Assets/Images/scan.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default QrScanComponent;

const styles = StyleSheet.create({});
