import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from './CustomImage';
import Color from '../Assets/Utilities/Color';
import CustomText from './CustomText';

const QrScanComponent = ({title, description}) => {
  return (
    <View
      style={{
        height: windowHeight * 0.45,
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor :'red',
        marginBottom :moderateScale(10,.3),
        // borderBottomWidth :1,
        // borderColor:Color.red
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
        {title}
        </CustomText>
        <CustomText
          style={{
            color: Color.white,
            width: windowWidth * 0.7,
            textAlign: 'justify',
            fontSize: moderateScale(12, 0.6),
          }}>
          {
            description
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
      <View
          style={styles.border}></View>
    </View>
  );
};

export default QrScanComponent;

const styles = StyleSheet.create({
  border:{
    marginVertical :moderateScale(10,.6),
    marginHorizontal: moderateScale(20, 0.6),
    width: windowWidth * 0.87,
    borderWidth: 0.4,
    borderColor: Color.red,
    // backgroundColor :'red'
  }
});
