import React from 'react';
import * as Animatable from 'react-native-animatable';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../Components/CustomText';
import {Image, ImageBackground} from 'react-native';
import {View} from 'native-base';

const SplashScreen = () => {
  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      <ImageBackground
        style={{
          width: windowWidth,
          minHeight: windowHeight,
          paddingBottom: moderateScale(40, 0.6),
        }}
        source={require('../Assets/Images/setting_Bg.png')}>
        <Animatable.View
          animation="zoomIn"
          duration={2500}
          useNativeDriver
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: windowHeight,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText
              isBold
              style={{
                textAlign: 'center',
                fontSize: moderateScale(27, 0.6),
                marginTop: moderateScale(10, 0.3),
                paddingVertical: moderateScale(20, 0.6),
                color: Color.white,
              }}>
              Bible App
            </CustomText>
            <CustomText
              style={{
                textAlign: 'center',
                fontSize: moderateScale(15, 0.6),
                color: Color.white,
                fontStyle: 'italic',
              }}>
              you can easily read bible when ever you want
            </CustomText>
          </View>
        </Animatable.View>
      </ImageBackground>
    </ScreenBoiler>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: 'center',
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.themeColor,
  },
  bottomImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.3,
  },
  LogoText: {
    fontSize: moderateScale(35, 0.3),
    fontWeight: 'bold',
  },
});

export default SplashScreen;
