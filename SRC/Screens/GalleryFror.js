import {
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {SliderBox} from 'react-native-image-slider-box';
import {
  ScaledSheet,
  moderateScale,
} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';

import {Rating} from 'react-native-ratings';

const GalleryFror = () => {
  const images = [
    require('../Assets/Images/s3.jpg'),
    require('../Assets/Images/s2.jpg'),
    require('../Assets/Images/s3.jpg'),
    require('../Assets/Images/s4.jpg'),
  ];

  return (
    <ImageBackground
      style={{
        width: windowWidth,
        minHeight: windowHeight,
        paddingBottom: moderateScale(40, 0.6),
      }}
      source={require('../Assets/Images/setting_Bg.png')}>
      <Header
        showLeft={true}
        leftName={'back'}
        leftType={Feather}
        title={'Gallery'}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={
          {
            // paddingTop: moderateScale(10, 0.6),
          }
        }
        contentContainerStyle={{
          paddingBottom: moderateScale(150, 0.3),
        }}>
        <SliderBox
          images={images}
          autoplay
          circleLoop
          sliderBoxHeight={250}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor={Color.theme2}
          inactiveDotColor="#90A4AE"
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default GalleryFror;
const styles = ScaledSheet.create({
  imgcontainer: {
    height: windowHeight * 0.35,
    width: windowWidth,
    // backgroundColor :'red'
  },
});
