import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {
  ScaledSheet,
  moderateScale,
} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';

import {Rating} from 'react-native-ratings';

const AboutBooks = props => {
  const navigation = useNavigation();
  const item = props?.route?.params?.item;

  const [saveBooks, setSaveBooks] = useState(false);

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
        title={'About Book'}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{}}
        contentContainerStyle={{
          paddingBottom: moderateScale(150, 0.3),
        }}>
        <View style={styles.imgcontainer}>
          <CustomImage
            style={{
              height: '100%',
              width: '100%',
            }}
            source={item?.image}
          />
        </View>
        <View style={styles.container}>
          <CustomText style={styles.tit}>{item?.title}</CustomText>
          <CustomText style={styles.author}>{item?.title}</CustomText>
          <View style={styles.row}>
            <Rating
              type="custom"
              readonly={false}
              startingValue={2}
              ratingCount={5}
              imageSize={moderateScale(13, 0.3)}
              style={{
                width: windowWidth * 0.24,
              }}
              ratingBackgroundColor={'transparent'}
            />
            <CustomText style={styles.rating}>2.5</CustomText>
          </View>
          <CustomText
            //   isBold
            style={styles.des}>
            {item?.description}
          </CustomText>
        </View>
        <View style={styles.btnrow}>
          <CustomButton
            isBold
            height={windowHeight * 0.06}
            width={windowWidth * 0.4}
            text={'preview'}
            onPress={() => {}}
            marginTop={moderateScale(20, 0.3)}
            bgColor={'#FFC928'}
            borderRadius={moderateScale(25, 0.6)}
            textColor={'black'}
            fontSize={moderateScale(13, 0.6)}
          />
          <CustomButton
            isBold
            height={windowHeight * 0.06}
            width={windowWidth * 0.4}
            text={'Details'}
            onPress={() => {}}
            marginTop={moderateScale(20, 0.3)}
            bgColor={'#FFC928'}
            borderRadius={moderateScale(25, 0.6)}
            textColor={'black'}
            fontSize={moderateScale(13, 0.6)}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AboutBooks;
const styles = ScaledSheet.create({
  imgcontainer: {
    height: windowHeight * 0.35,
    width: windowWidth,
  },
  container: {
    width: windowWidth,
    alignItems: 'center',
    paddingVertical: moderateScale(5, 0.6),
  },
  tit: {
    color: Color.white,
    paddingHorizontal: moderateScale(10, 0.6),
    fontSize: moderateScale(18, 0.6),
    paddingTop: moderateScale(15, 0.6),
  },
  author: {
    color: Color.white,
    paddingHorizontal: moderateScale(10, 0.6),
    fontSize: moderateScale(13, 0.6),
    paddingVertical: moderateScale(5, 0.6),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.6),
  },
  rating: {
    color: Color.white,
    paddingHorizontal: moderateScale(10, 0.6),
    fontSize: moderateScale(14, 0.6),
    paddingVertical: moderateScale(10, 0.6),
  },
  des: {
    color: Color.white,
    lineHeight: moderateScale(18, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    fontSize: moderateScale(12, 0.6),
    paddingVertical: moderateScale(10, 0.6),
  },
  btnrow: {
    marginHorizontal: moderateScale(18, 0.3),
    width: windowWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
